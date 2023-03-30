---
title: Go, grab a Jekyll today!
categories: [] 
summary: I wanted to share the fun I've been with Jekyll, so I put together a  build that you can easily make your own. It's fast, light and Github will host it for free.
cover_img:
cover_img_alt:
date: 2013-03-19
description:
draft: false
tags: []
toc: false
---

I wanted to share the enjoyment I have been having using [Jekyll](http://jekyllrb.com/), so I put together a basic build that you can make your own. It's fast, light and Github will host it for free.

As I'm not very creative it looks very similar to this blog and it's called [Jekyll Me](http://nternetinspired.github.com/).

<figure><img src="/img/monster-man.jpg" alt="" />
	<figcaption>A typical new user's expression upon discovering the awesome powers that Jekyll bestows</figcaption>
</figure>

Functionaly, it's quite limited as I have deliberately tried to avoid over-complicating things. In both design and in terms of Jekyll's capabilites there is a *lot* more that you can add to it, but as a basic blog I think it has everything you might need.

1. A homepage showing recent posts.
2. An archive page showing all posts.
3. An about page.
3. Intra-article navigation.
4. Built in commenting using Disqus.
6. An RSS feed with descriptions of recent posts.
7. Automated author meta tag.
8. Automated meta description tag.
9. Seriously mobile-friendly, out of the box.

In addition, it's insanely fast. A typical post, without an image comes in with 2 http requests totalling around 4Kb. I don't think it's possible to make it much faster or lighter than that, not without starting to sacrifice quite a lot (the css for example).

<p data-pullquote="…you can add your own bloat faster, and more reliably, than you can take away mine!">I'll probably be adding more stuff, pagination for the archive page for example, but I won't be adding much. The way I see it, you can add your own bloat faster, and more reliably, than you can take away mine! I'm well aware that my LESS could be improved greatly, but please keep in mind I created this in less than a day.</p>

That said, if something really bugs you please let me know, preferably via the Github repository's [issue reporting system](https://github.com/nternetinspired/nternetinspired.github.com/issues). Thanks.

## Get forked
It couldn't be easier to get Jekyll Me up and running, just:

1. Fork the [source respository](https://github.com/nternetinspired/nternetinspired.github.com).
2. Click the 'settings' button and rename the your fork to <strong>your-github-username</strong>.github.com.
3. Wait a few minutes. Github will automagically start serving the site at your-github-username.github.com.
4. Edit config.yml to contain _your personal details_.
5. Edit html or LESS to taste.

To create new posts, simply push a correctly named and formatted (take existing posts as examples) to the posts folder. Github will automagically do its thing.
