---
layout: page
title: projects
permalink: /projects/
description: >
  Open-source and personal ML projects by Ronak Pradhan &mdash; LLM fine-tuning,
  evaluation tooling, retrieval, and applied research prototypes.
nav: true
nav_order: 2
keywords: ronak pradhan projects, llm fine-tuning github, peft examples, applied ml projects, open source ml
display_categories: [research, tools]
horizontal: false
---

Selected open-source and personal projects. Code is on [GitHub](https://github.com/Ronak-Pradhan). Project write-ups will appear here as they are published; check back or [follow me](https://github.com/Ronak-Pradhan) for updates.

## What kind of projects show up here?

Projects fall into two buckets: **research** &mdash; small experiments to validate an idea (LLM evals, PEFT recipes, retrieval baselines) &mdash; and **tools** &mdash; reusable utilities I use across day-job and consulting work. Each card links to a GitHub repo and, where available, a write-up with reproducible code. The case studies on the [experience](/experience/) page walk through similar work in a production setting.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
