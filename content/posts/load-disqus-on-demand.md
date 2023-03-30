---
title: Load Disqus on demand
categories: [] 
author: Seth Warburton
summary: If you care about your visitors only load Disqus comments on demand, as even an empty comment form weighs in around 226Kb.
hero-class: overlay-secondary hero-reversed
hero-image: /img/800px/craftsman.jpg
intro-image: /img/800px/craftsman.jpg
tags: [performance, UX, tutorials]
cover_img:
cover_img_alt:
date: 2014-11-15
description:
draft: false
toc: false
---

If you want commenting on your blog [http://disqus.com/](Disqus) seems like a great solution but it comes at a cost, page-weight. If you care about your visitors you should load that overhead only when it is requested.

Don't get me wrong, Disqus offers plenty of advantages over self-hosted options and it's a solution I use myself when I require commenting. My only concern is the weight it adds to a page. Even with no comments, i.e., an empty comment form, the call to Disqus will load an extra 226Kb, *minimum*. If your page has comments this can be far higher. Don't assume your visitors will always want that, give them the option to choose.

Admittedly, Disqus is loaded asynchronously so it won't block loading of your page, a point which Disqus are quick to make but this doesn't account for the fact that people *pay* for bandwidth. If your visitors happen to be on a mobile device they may pay *a lot* for that bandwidth. If you care about page-weight you'll want to ensure that additional overhead is only loaded if it is actually requested.

I created a quick [Github Gist][2] to show how I'd handle this.

{% gist 7482445 %}

Assuming you are already loading jQuery then you can simply drop the script into your template's main scripts file (which you already combine and minify, right??) and the html into your posts / article view. You could inline the script of course, but personally I wouldn't as I like to keep things organised.

## Where are *your* comments?
The observant among you will have already noticed that, for the time being, I've decided to not bother with commenting on my blog posts. I did actually implement this solution on this site, along with a method to allow/disallow commenting on a post by post basis, then I decided to leave it disabled.

I'd love hear what you have to say though so feel free to [comment directly on my code at Github][2] or Tweet me.

Thanks.

[2]: https://gist.github.com/nternetinspired/7482445
