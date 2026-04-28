---
layout: about
title: about
permalink: /
faq: true
description: >
  Ronak Pradhan is an Applied Scientist working on large language models, fine-tuning,
  and applied ML in production. Available for full-time Applied Scientist / ML Engineer roles
  and selected consulting engagements.
keywords: applied scientist, machine learning engineer, large language models, LLM fine-tuning, PEFT, BERT, healthcare AI, recommender systems, PyTorch, HuggingFace, AWS SageMaker
subtitle: >
  <strong>Applied Scientist</strong> &mdash; shipping LLMs and applied ML in production.
  <br>
  <span class="status-pill">Available for full-time roles &amp; consulting</span>
  <br><br>
  <a class="btn btn-primary cta-primary" href="/contact/">Work with me</a>
  &nbsp;
  <a class="btn btn-outline-primary cta-secondary" href="/experience/">See case studies</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p><i class="fa-solid fa-location-dot"></i> India / Remote</p>
    <p><i class="fa-solid fa-envelope"></i> hi at ronakpradhan dot com</p>
    <p><i class="fa-solid fa-calendar"></i> <a href="/contact/">Book an intro call</a></p>

selected_papers: false # set true once papers.bib has selected={true} entries

social: true # social icons at the bottom of the page

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: true
  scrollable: true
  limit: 3
---

## What I do

I build, fine-tune, and ship machine-learning systems &mdash; mostly **large language models** &mdash; for teams that care about real metrics, not demos. Right now that means domain-adapting LLMs for complex healthcare reasoning at **Optum**, after a year as an Applied Scientist Intern at **Amazon** improving product retrieval for `Amazon.in`.

If you have an LLM or applied-ML problem where production quality matters &mdash; evals, fine-tuning, RAG, deployment, MLOps &mdash; I can help. The [case studies](/experience/) walk through two recent examples with concrete numbers (+0.4% Precision@1%R, +0.2% ROC AUC, +0.4% Cold Start AUC, terabyte-scale data).

## Where I've worked

<div class="logo-strip">
  <span class="logo-pill">Amazon &mdash; Applied Scientist Intern</span>
  <span class="logo-pill">Optum &mdash; Data Scientist Intern</span>
  <span class="logo-pill">Manipal Institute of Technology &mdash; B.Tech ECE</span>
</div>

## What I'm good at

| Area | Tools / techniques |
| --- | --- |
| LLMs &amp; fine-tuning | HuggingFace `transformers`, `peft`, LoRA / QLoRA, instruction tuning, BioClinical BERT, domain adaptation |
| Modeling | PyTorch, TensorFlow, GANs, recommender systems, two-tower retrieval, textual entailment |
| Data at scale | PySpark, SQL, 100M+ row pipelines, terabyte-scale feature engineering |
| Production / MLOps | AWS SageMaker (sync &amp; async endpoints), Docker, Flask model serving, AWS Lambda |
| Eval &amp; analysis | Precision@K, ROC AUC, cold-start AUC, error slicing, ablation tables |

## What I'm looking for

- **Full-time** Applied Scientist / Research Engineer / ML Engineer roles working on LLMs or applied ML in production.
- **Consulting** engagements (4&ndash;12 weeks) where you need someone senior to set up evals, fine-tune a model, or unblock a stuck production system.
- **Collaborations** on open-source LLM tooling, evals, or healthcare-focused ML.

The fastest way to start a conversation is the [contact form](/contact/) or booking a slot via Calendly. I usually reply within a day.

## FAQ

<div class="faq" markdown="0">
{% for entry in site.data.faq %}
  <details>
    <summary>{{ entry.question }}</summary>
    <p>{{ entry.answer }}</p>
  </details>
{% endfor %}
</div>
