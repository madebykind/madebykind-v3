---
author: seth
cover_img: images/alabaster.jpg
cover_img_alt: Just another rando unsplash image
date: 2020-01-04T17:31:19Z
description:
draft: true
hidden: true
listed: false
intro: A demo of Hugo's internal templates.
topics: []
title: "Internal Templates"
toc: false
---

This page is a demo of Hugo's internal shortcodes and templates.

## Figure

Not fit for purpose. Seth should totally propose an update to this in Hugo. Just use Markdown's native syntax and an image render template instead.

## Gists

The gist shortcode takes two values, the Github username and gist id.
{{< gist nternetinspired 03b56e50822ea65f9bf0da89a7dd6602 >}}

## Highlighted code

See [#highlight-shortcode docs](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode) for config options

{{< highlight html >}}
<section id="main">
    <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
      {{ .Render "summary"}}
    {{ end }}
</section>
{{< /highlight >}}

## Instagram

Broken thanks to their API updates. Don't bother with this one.

## Twitter

{{< tweet user="nternetinspired" id="1312124715272597505" >}}

## Vimeo

{{< vimeo 75412111 >}}

## Youtube

{{< youtube FNgUhFrG238 >}}
