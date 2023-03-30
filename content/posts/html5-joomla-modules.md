---
title: html5 Joomla modules
categories: [] 
summary: A new html5 module chrome for OneWeb, my responsive boilerplate template, brings html5 elements to Joomla! modules.
permalink: /labs/html5-joomla-modules/
cover_img:
cover_img_alt:
date: 2012-02-07
description:
draft: false
tags: []
toc: false
---

A new html5 module chrome for OneWeb, my responsive boilerplate template, brings html5 elements to Joomla! modules.

<figure><img src="/img/html5.png" alt="I have seen the light" title="I have seen the light" /><figcaption>I have seen the light!</figcaption></figure>

OneWeb, my responsive Joomla! boilerplate was originally conceived and built to be 100% html5, making use of the new semantic elements wherever possible. However, Joomla's treament of module positions meant that all modules were being output with only meaningless divs; not cool.

## Fast forward
To remedy this I have created a new module chrome, style="html5", which gives all module positions the full html treatment wrapping each module in an article tag and creating a header and content section for the modules output.

The html5 module chrome adds the familiar class .moduletable to the module article to clearly differentiate modules from the output of com_content. OneWeb's com_content overrides add the class .article to Joomla! articles. This may seem a little confusing, but it is important to remember that the html5 element article does not equate to the Joomla article, it is merely a discrete html5 element.

### I use this how?
If you want to target a Joomla! article in your css you should use article.article, but if you are targetting a module use article.moduletable. Simple eh? To make things easier still, the module chrome outputs the Joomla module id to the article element, so you can even target inidividual modules in your css.

### In stores now
These changes are already integrated into OneWeb so are available on Github now: <a href="https://github.com/nternetinspired/OneWeb" target="_blank">https://github.com/nternetinspired/OneWeb</a> and you can see the code in action at <a href="http://joomlafuture.com" target="_blank">http://joomlafuture.com</a>. If you are updating from a previous version you need to add the file /html/modules.php and update /index.php to make use of the html module chrome.
