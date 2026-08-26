---
layout: archive
title: "Students"
permalink: /students/
author_profile: true
---

List of successfully defended theses under my supervision, mostly at Faculty of Informatics, Masaryk University.

{% include base_path %}

{% for post in site.students reversed %}
  {% include archive-single.html %}
{% endfor %}
