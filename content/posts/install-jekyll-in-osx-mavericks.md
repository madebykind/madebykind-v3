---
title: Install Jekyll in OSX Mavericks
categories: [] 
summary: Installing the static site generator Jekyll has never been easier, this short tutorial will have you up an running in no time at all.
cover_img:
cover_img_alt:
date: 2014-10-30
description:
draft: false
tags: []
toc: false
hero-image: /img/1280px/map.jpg
---

Installing the static site generator <a href="http://jekyllrb.com/">Jekyll</a> in OSX can be fast and painless. With greatly improved documentation available now, there's no good reason to not try this fantastic tool.

Admittedly, it wasn't always this way…

Documentation in the past was complex and seemingly designed to scare off newcomers, the number of designers using Jekyll was limited and installation was a nightmare. None of these things are true today, and installing Jekyll is easier than it ever has been, as I recently discovered after a clean install of OSX Mavericks on my machine.

With that process still fresh in my mind I thought it would be helpful if I recorded the steps that I took. I'll run through everything you need to install Jekyll and build your first site, so fire up your Terminal app and follow me!

Simply copy and paste any commands below into your Terminal app and sit back while the magic happens. But before that, there's one thing we need to do.

## Install XCode

We don't need XCode itself, but we *do* need the command line toools that it ships with to install Jekyll. In fact, as soon as Jekyll is installed you can remove XCode if you want, I did. Xcode is  in the App Store so just search ‘XCode’ and hit install. Don't you love App Store apps?

<figure><img src="/img/xcode-on-appstore.jpg" alt="An image of the app in the OSX App Store">
<figcaption>Just click and install, it couldn't be easier.</figcaption>
</figure>

Xcode's pretty large, so now is a good time to go and grab cup of tea while it downloads.

### …and XCode's command line tools

This is the bit we really need, and the fastest way to get them is via the Terminal app. Open up Terminal (Application > Other > Terminal) and type, or copy and paste, the following command then hit enter:

	xcode-select --install

This will launch a prompt to install the command line tools package that we need:

<figure><img src="/img/commandline-tools-install.jpg" alt="An image showing the command line tools install prompt">
<figcaption>Give me those tools sucker!</figcaption>
</figure>

We're almost done with prep work, so click ‘install’ and wait for the tools to finish installing.

## Install Jekyll

Then, to install Jekyll, simply enter following command:

	sudo gem install jekyll

The above command will install all of Jekyll's dependancies automagically, so just sit back and give it a few minutes. Once it's finished, that's it, you've installed Jekyll!

## Create your first site

Now for the fun part. Let's build a sample site that will give you a nice starting point, an example of how a Jekyll site is structured and used.

Jekyll can run it's own local server so you can create your Jekyll site anywhere on your system, you don't need to worry about using MAMP or anything like that. My suggestion is to create it somewhere easy to remember and easy to type, I use a folder in my home directory for that.

The following Terminal commands will create a directory in your home folder in which to create your new Jekyll site(s). You can change the path after ~/ to whatever you'd like these directories to be called:

	mkdir ~/jekyll-sites

Now we can create our new Jekyll site automagically in that folder:

	jekyll new ~/jekyll-sites/my-awesome-site

Go to that folder:

	cd ~/jekyll-sites/my-awesome-site

And build it into a website!

	jekyll serve --watch

The --watch flag is optional, but I'd recommend it as it means Jekyll will watch for any changes in the source files (You correct a typo in a blog post, for example) and rebuild the site the refresh your browser, without you doing a thing! It's a bit like magic.

## Hello World!

Now just open up your browser and go to <a href="http://localhost:4000/">http://localhost:4000/</a> to see your new site.

Jeykyll will be running until you close the Terminal window you launched it in, so if you quit Terminal you'll need to enter the last two commands to bring Jekyll back to life when you want it to generate your site again.

That's it, Jekyll's installed, you built a site now you just need to start making it your own. I'd suggest this is a great place to start: [Jekyll's Directory Structure](http://jekyllrb.com/docs/structure/).
