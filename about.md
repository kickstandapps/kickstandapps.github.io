---
layout: page
permalink: /about/
title: About Us
tagline: The company and the team
modified: 2013-12-26
description: "A little bit about the company and the team behind it."
tags: [about]
---
<p>
  We have a mission: create apps that people love to use. Here's how we are going to do that.
</p>
<div style="position: relative;">
  <div class="half">
    <h3 style="margin: 30px 0 10px;">Have Fun</h3>
    <p style="margin: 0;">
      This is the most important. If we're not having a great time creating an app, you won't enjoy using it. At least not as much as you should.
    </p>
    <h3 style="margin: 30px 0 10px;">Stay Passionate</h3>
    <p style="margin: 0;">
      We are going to build the apps that we want to use ourselves. This allows us to stay excited and satisfy our most demanding customers... us.
    </p>
  </div>
  <div class="half last">
    <h3 style="margin: 30px 0 10px;">Iterate Quickly</h3>
    <p style="margin: 0;">
      By consistently trying to improve our apps, we'll be able to react more quickly to customer input and push out new features more frequently.
    </p>
    <h3 style="margin: 30px 0 10px;">Communicate with You</h3>
    <p style="margin: 0;">
      Customer relations should be a discussion. Whether it's solving a problem, introducing new features, or getting suggestions, your voice will be heard.
    </p>
  </div>
</div>

&nbsp;

<hr />

<h1 style="text-align: center;">Our Team</h1>

<div class="team-bio" style="overflow: auto;">

  {% assign index = 0 %}

  {% for name in site.team %}
  {% assign author = name[1] %}

  <div class="{% cycle 'half', 'half last' %}" style="text-align: center;">
    <img src="{{ site.baseurl }}/images/{{ author.avatar }}" alt="{{ author.name }} photo" width="80%">
    <span class="author vcard" itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name" class="fn"><strong>{{ author.name }}</strong></span></span>
    <p class="bio">{{ author.bio }}</p>
    {% if author.email %}
    <div style="width: auto;">
      {% if author.getInvolved %}
      <a class="btn" href="mailto:{{ author.email }}" target="_blank">Get Involved</a>
      {% else %}
      <a class="btn" href="mailto:{{ author.email }}" target="_blank">Contact Me</a>
      {% endif %}
    </div>
    {% endif %}
  </div>

  {% endfor %}

</div>

<hr />

