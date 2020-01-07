---
title: Rick and Morty Characters
layout: layout.liquid
pagination:
  data: characters
  size: 10
  alias: chars
puppers: false
---

{% for character in chars %}

- [{{character.name}}](/characters/{{character.name|slug}})

{% endfor %}

{% if pagination.href.previous %}<a href="{{pagination.href.previous}}">Previous Page</a>{% endif %}
{% if pagination.href.next %}<a href="{{pagination.href.next}}">Next Page</a>{% endif %}
