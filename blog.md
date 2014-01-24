---
layout: page
permalink: /blog/
title: "Blog"
tagline: "Information and Ideas"
description: "All of our thoughts and musings."

---

<ul class="post-list">
{% for post in site.categories.blog %}
  {% if post.previous %}<li>{% else %}<li class="last">{% endif %}<article itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting"><a href="{{ site.baseurl }}{{ post.url }}"><strong itemprop="name">{{ post.title }}</strong> <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B" }} {{ post.date | date: "%d" | plus:'0' }}, {{ post.date | date: "%Y" }}</time></span></a><br/>
  <p>{{ post.description }}</p></article></li>
{% endfor %}
</ul>