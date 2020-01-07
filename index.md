---
title: Welcome to the Blog
layout: layout.liquid
pagination:
  data: collections.blog
  size: 2
  alias: blogs
---

{% for blog in blogs %}

- [{{blog.data.title}}]({{blog.url}})

{% endfor %}

You should read it!

{% if pagination.href.previous %}<a href="{{pagination.href.previous}}">Previous Page</a>{% endif %}
{% if pagination.href.next %}<a href="{{pagination.href.next}}">Next Page</a>{% endif %}
