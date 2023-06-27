---
hidden: false
title: Building a more sustainable website architecture
date: 2021-02-16
author: Mat
cover_img: images/environment.png
cover_img_alt: A roll of film on a yellow background
draft: false
description: There are many ways we can improve the efficiency of a website,
  many of which Kind already includes as standard practice.
featured: true
topics:
  - Environment
  - Mobile-first design
  - Digital sustainability
header_class: bg-teal text-blue
toc: true
key_topic: Digital sustainability
intro: There are many ways we can improve the efficiency of a website, many of
  which Kind already includes as standard practice.
related_pages: []
related_posts:
  - b-corp
---

It’s rare that anyone considers the environmental effects of sending an email, loading a website or posting a tweet, but it’s estimated that digital technologies are responsible for 1.7 billion tonnes of greenhouse gas emissions per year.

While it’s true that delivering your content through a website is much more sustainable than printed brochures or other equivalences, we still require energy to build and maintain those websites and to serve our content to our users around the world.

Luckily there are many ways we can improve the efficiency of a website, many of which Kind already includes as standard practice.

## Create a lightweight codebase

We always work to ensure that our code is efficient as possible and loads quickly for users, regardless of their device.

This has been standard practice with good web developers for years, but a happy side effect is that reducing the filesizes of the <abbr class="smcp" title="Hyper Text Markup Language">HTML</abbr>, <abbr class="smcp" title="Cascading Style Sheets">CSS</abbr> and JavaScript that is downloaded by the user and, therefore, reducing the amount of energy used to do so.

## Optimise imagery

Images play an important role on many websites but, while a picture paints a thousand words, they also take thousands of times more energy to download than text.

During our design phase we consider lower energy alternatives to photography, such as illustration and patterns which can be created with a few lines of code, but sometimes it is still best for the user (and the project) to use real-life images.

To balance this with our sustainable values, we reduce the impact of these images by automatically optimising, resizing and cropping them at the point they are uploaded, serving the optimal size image to the user, depending on their device and removing the need to download unnecessary bytes.

## Sustainable hosting

Hosting your website at datacentres that use renewable energy will massively reduce the emissions associated with your website.

Luckily, the Green Web foundation has compiled a list you can use to find one that suits you.

## Use a CDN

A content delivery network (<span class="smcp">CDN</span>) is a distributed set of servers located in datacentres around the world with the aim to deliver your website content as quickly as possible to all users, by serving it from somewhere nearby.

There are many <span class="smcp">CDN</span>’s available and the cost to use them is relatively low, especially when compared to the improvement in user experience that is gained from a website loading quickly, regardless of the user’s location.

As an example, the cost for hosting and serving the images and files for the Kind website is less than £10 a month.

## Remove or reduce video

Video is very popular on the web (everyone wants that moving hero video that nobody watches) but is also one of the biggest energy users of all content types.

To mitigate this, use video sparingly and host it via a platform like Youtube or Vimeo. These platforms will encode your video to work optimally on as many devices, browsers and connections as possible and then serve that videos through their own CDN.

Also, do your best to argue for videos not playing automatically. This practice only adds to energy consumption, even when a user isn’t interested.
Reduce pageviews

Often a goal set by our clients is to increase the number of pageviews on their website. While this could point to a more engaged audience, it more likely means that users aren’t finding the information they need quickly and that will only lead to increased energy usage.

Instead, we should be aiming for website users to find what they are looking for as quickly as possible, not only to reduce our consumption, but to help our users complete the task in hand and move on to the next step.

With well-balanced SEO and intuitive navigation systems we should be able to ensure this happens within the first one or two pages loaded. It should be noted though that this is not the same as the old ​‘3‑click rule’ which is shown to be false. Instead we work to ensure that your users land on (or around) the right content straight away.

This will lead to a reduction in energy consumption and will make it easier to differentiate highly engaged users from frustrated ones.

## Serve static HTML

Most websites will use a content management system (<span class="smcp">CMS</span>) to allow non-technical team members to make content changes.

This is extremely useful but, when also used to serve the website, it means that the content database is queried each time a page is loaded, adding to the energy usage.

Thankfully, it is possible to setup a website in such a way that you can still get all the benefits of using a CMS, but the front-end code is served as static HTML, with no database queries.

Side-benefits of this approach are also increased security (however secure a CMS is, it’s never as secure as no CMS) and faster page load times.

## Reduce font usage

Obviously, it’s important to use the right typeface for any website, however, font files are large and for each style or weight required your developer will have to include additional files.

If your design includes multiple fonts in multiple weights and styles, we’ll be requiring a huge amount of data downloading to each users’ device.

Ensure that the typographic system you employ uses the optimum number of font styles and weights and every time you add a new style or weight, ask ​“is this really needed?”

## Utilise caching

By default, every time a user visits a webpage the browser will download all the code, images and files needed to show it in the front-end.

But if some or all of this content hasn’t changed since it was last downloaded, then it’s simply a waste of energy to download it again.

You can make use of caching methods to ensure that if a file, image or the code hasn’t changed since the last visit then the users browser will use the previously downloaded content.

This approach means that, for example, a webpage that usually weighs 500KB can be served by downloading just 10<span class="smcp">KB</span> of code.

<hr>

Ok, some of the tips above might be difficult to implement without a developer, but hopefully there are some quick wins that you can use to start doing better and reduce your websites energy consumption today.
