---
layout: post
title: "Fine-tuning BioClinical BERT: notes from production"
date: 2026-04-27 14:00:00 +0530
last_modified_at: 2026-04-27 14:00:00 +0530
description: >
  Practical notes on adapting BioClinical BERT for healthcare textual-entailment in a
  production setting &mdash; data quality, PEFT trade-offs, evaluation, and SageMaker async endpoints.
tags: [llm, fine-tuning, peft, healthcare, evals]
categories: [applied-ml]
featured: true
toc:
  beginning: true
related_posts: false
---

## Why this post

Most public LLM fine-tuning content stops at "the loss curve goes down." This post collects the things that actually mattered when adapting a BioClinical BERT-family model for a healthcare textual-entailment task in production at [Optum](https://www.optum.com/). Names and exact numbers are abstracted; the methodology is not.

## Direct answers up front

- **Data quality dominates everything.** The single biggest precision win came from cleaning the entailment labels, not from a fancier architecture.
- **PEFT was the right default.** LoRA-style adapters matched full fine-tuning on this task at a fraction of the compute and a fraction of the storage cost per checkpoint.
- **Async beats sync in healthcare.** Many clinical documents are long enough that a synchronous endpoint causes timeouts and angry callers; an asynchronous SageMaker endpoint plus a result queue is a much better fit.

## What is BioClinical BERT and when should you use it?

BioClinical BERT is a family of BERT-style transformer models pre-trained on clinical text (typically MIMIC-style notes layered on top of biomedical pre-training). It is a strong starting point when you need a small, fast model that already understands clinical vocabulary &mdash; entailment, classification, and span extraction over discharge summaries, prior auth narratives, and clinical notes are good fits. For long-context generative tasks you would reach for a different family.

## The evaluation harness comes first

Before touching any model, build the eval set. For a textual-entailment task that means:

1. A representative hold-out of premise / hypothesis / label triples, sliced by document type.
2. A noise-resistant metric &mdash; precision in your operating recall band, not raw accuracy.
3. Human spot checks of the worst slices, every iteration.

In our case, **the eval set explained more variance in shipped quality than the model architecture did.** That sounds obvious; it is rarely the way time is actually spent.

## PEFT vs. full fine-tuning

| Approach | Compute | Storage / checkpoint | Quality |
| --- | --- | --- | --- |
| Full fine-tuning | High | Full model size | Baseline |
| LoRA / QLoRA (PEFT) | Low&ndash;moderate | A few MB of adapters | Matched full fine-tuning on this task |

If you are inside a regulated environment where every checkpoint has to be reviewed and stored, the per-experiment storage cost of PEFT is a quietly large win. You can ship dozens of experiments in the storage budget of a single full fine-tune.

## Serving: why async on SageMaker

Healthcare documents have a long-tailed length distribution. A synchronous endpoint that is sized for the median latency will hit timeouts on long documents, and a sync endpoint sized for the tail wastes money. An [SageMaker asynchronous endpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/async-inference.html) accepts a job, returns a handle, processes when capacity is available, and writes the result to S3. You pay for what you use and you do not block your callers.

## What I would do differently next time

- **Eval set first, model second.** I always say this and I always have to relearn it. Build the harness, then iterate.
- **Track per-slice metrics from day one.** A 0.3% headline precision lift can hide a 5% regression on the slice that matters clinically.
- **Document the negatives.** The experiments that did not work were as informative as the ones that did. Future me would have spent fewer cycles re-trying obviously dead branches if past me had written them down.

---

*This post is a placeholder seed for the blog &mdash; it will be expanded with concrete code and visuals.* If you have an applied LLM problem where production quality matters, the [contact form](/contact/) is the fastest way to reach me.
