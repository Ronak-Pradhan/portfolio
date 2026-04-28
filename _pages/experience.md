---
layout: page
permalink: /experience/
title: experience
description: >
  Detailed case studies from my Applied Scientist Intern role at Amazon and
  Data Scientist Intern role at Optum &mdash; including the problem, approach,
  results (with metrics), and stack.
nav: true
nav_order: 1
keywords: amazon applied scientist, optum data scientist, BioClinical BERT, LLM fine-tuning case study, healthcare NLP, recommender systems, GAN, ROC AUC, precision at recall
toc:
  sidebar: left
---

This page collects two production case studies from my time at Amazon and Optum. Each one walks through the **problem**, **approach**, **results with concrete numbers**, **stack**, and **what I'd do differently**. Skim the metric tiles for the headline impact.

## How is an Applied Scientist different from a Data Scientist?

In short: an Applied Scientist owns the modeling and the production system end-to-end. The role at Amazon involved reading recent ML research, prototyping models against real metrics, and shipping the winning approach into a customer-facing pipeline. The role at Optum is similar in shape but in a healthcare-NLP setting, where regulatory caution and dataset quality dominate. The two case studies below illustrate both modes.

---

<div class="case-study" markdown="1">

### Domain-adapting LLMs for healthcare reasoning &mdash; Optum

<p class="case-meta">Data Scientist Intern &middot; January 2024 &ndash; Present &middot; Healthcare / NLP</p>

<div class="metric-grid" markdown="0">
  <div class="metric"><span class="metric-value">+significant</span><span class="metric-label">Precision uplift on textual entailment</span></div>
  <div class="metric"><span class="metric-value">SageMaker</span><span class="metric-label">Async endpoint, productionized</span></div>
  <div class="metric"><span class="metric-value">PEFT</span><span class="metric-label">Parameter-efficient fine-tuning</span></div>
</div>

#### Context

Optum's clinical reasoning workflows depend on accurately interpreting complex healthcare documents (discharge summaries, prior authorization narratives, clinical notes). Off-the-shelf LLMs underperform because they have not seen enough clinical language and they hallucinate on edge cases that matter clinically.

#### Problem

Build a domain-adapted LLM pipeline that can perform sophisticated reasoning on healthcare documents at production quality &mdash; specifically improve **textual-entailment precision** so downstream automation does not act on false positives.

#### Approach

1. **Literature scan** &mdash; surveyed the clinical-NLP and PEFT landscape (LoRA, QLoRA, instruction tuning, BioClinical BERT family) to pick a starting point that balances quality and cost.
2. **Data curation** &mdash; built a high-quality entailment dataset from internal sources, with careful label-quality review to avoid the classic "noisy labels destroy fine-tuning" trap.
3. **Fine-tuning** &mdash; specialized BioClinical BERT with `transformers` + `peft`, comparing full fine-tuning vs. PEFT under the same compute budget and tracking validation precision per epoch.
4. **Serving** &mdash; wrapped the winning model in a Flask service, dockerized it, and deployed it to AWS SageMaker as an **asynchronous endpoint** so long-running clinical documents do not block synchronous callers.
5. **Evaluation** &mdash; ran ablations on precision vs. recall trade-off, error-sliced by document type, and surfaced the slice-level metrics to stakeholders.

#### Results

- Significantly improved precision on the textual-entailment task without losing recall in the operating range we care about.
- Shipped a production async endpoint on SageMaker &mdash; not a notebook prototype.
- Documented the eval methodology so future iterations can be benchmarked against the same harness.

<p class="case-stack"><strong>Stack:</strong> PyTorch, HuggingFace <code>transformers</code> + <code>peft</code>, BioClinical BERT, Flask, Docker, AWS SageMaker (async endpoint), Python.</p>

</div>

---

<div class="case-study" markdown="1">

### Improving product retrieval for `Amazon.in` with GANs and LLMs &mdash; Amazon

<p class="case-meta">Applied Scientist Intern &middot; February 2023 &ndash; July 2023 &middot; Recommender systems / IR</p>

<div class="metric-grid" markdown="0">
  <div class="metric"><span class="metric-value">+0.4%</span><span class="metric-label">Precision @ 1% Recall</span></div>
  <div class="metric"><span class="metric-value">+0.2%</span><span class="metric-label">ROC AUC</span></div>
  <div class="metric"><span class="metric-value">+0.4%</span><span class="metric-label">Cold-Start ROC AUC</span></div>
  <div class="metric"><span class="metric-value">100M+</span><span class="metric-label">Training rows (TB-scale)</span></div>
</div>

#### Context

Product retrieval on `Amazon.in` is a classic retrieval-then-rank pipeline operating at terabyte scale. Even a fractional improvement in **Precision@1%R** moves real revenue at Amazon's volume, and **cold-start** &mdash; surfacing newly listed products with little behavioral signal &mdash; is one of the hardest parts of the system.

#### Problem

Push the retrieval model's quality on three axes simultaneously: high-precision head, overall ROC AUC, and cold-start ROC AUC, without regressing latency or training cost.

#### Approach

1. **Research integration** &mdash; rapidly absorbed recent retrieval / GAN / LLM literature and identified two candidates likely to help: a generative augmentation approach for cold-start representations and an LLM-based feature for query understanding.
2. **Data engineering** &mdash; built a PySpark pipeline to assemble training data over **100M+ rows / terabyte-scale** behavioral logs, with careful negative sampling and feature engineering to avoid leakage.
3. **Modeling** &mdash; fine-tuned advanced ML models including GANs and LLMs, tracking three eval slices in parallel: head precision, full-distribution AUC, and cold-start AUC.
4. **Eval and analysis** &mdash; produced ablation tables and error analyses; pulled actionable insights from model outputs (which slices improved, which regressed, and why).
5. **Stakeholder review** &mdash; circulated the design and results to **10+ experienced scientists**, took their feedback, iterated, and shipped the winning configuration.

#### Results

- **+0.4%** Precision @ 1% Recall.
- **+0.2%** ROC AUC.
- **+0.4%** Cold-Start ROC AUC.
- Detailed project documentation and a reproducible eval harness for the next intern to extend.

#### What I'd do differently

In retrospect, I would invest earlier in **eval-set quality** before iterating on models &mdash; a chunk of the cycles in the middle of the project went to chasing apparent regressions that turned out to be eval noise. The lesson generalizes: in any retrieval/rank system, your eval set is the model's coach.

<p class="case-stack"><strong>Stack:</strong> PyTorch, HuggingFace, GANs, LLMs, PySpark, SQL, Amazon-internal modeling and serving infrastructure.</p>

</div>

---

## Frequently asked questions

<div class="faq" markdown="1">

<details markdown="1">
<summary>What kind of applied-ML problems are you strongest on?</summary>

LLM fine-tuning and PEFT, retrieval and ranking systems, evaluation design, and turning research prototypes into production endpoints. I am comfortable across the full stack from PySpark data pipelines to SageMaker deployment.
</details>

<details markdown="1">
<summary>What is your typical engagement length?</summary>

For full-time roles I am looking for a long-term home. For consulting I usually scope **4&ndash;12 week** engagements with clear deliverables (an evaluation harness, a fine-tuned model, an unblocked production endpoint).
</details>

<details markdown="1">
<summary>Can you work in healthcare / regulated domains?</summary>

Yes &mdash; my current Optum work is healthcare-NLP, and I am familiar with the data-handling and evaluation discipline that domain demands.
</details>

<details markdown="1">
<summary>How do I start a conversation?</summary>

The fastest path is the [contact form](/contact/) or booking a 20-minute intro call via Calendly. I usually reply within a day.
</details>

</div>
