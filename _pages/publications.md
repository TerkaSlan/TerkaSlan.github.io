---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

  This page contains the top three most impactful papers from my Ph.D. You can find the complete publication list on <u><a href="https://scholar.google.com/citations?user=aVhtRH0AAAAJ&hl=en">my Google Scholar profile</a>.</u>

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}