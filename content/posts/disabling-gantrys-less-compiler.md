---
title: Disabling Gantry's LESS compiler
categories: [] 
summary: I discovered serious short-comings with the automatic LESS compilation built into Rocket Theme's Gantry 4 framework so I set about disabling it.
cover_img:
cover_img_alt:
date: 2014-06-25
description:
draft: false
tags: []
toc: false
permalink: /wrote/tutorials/disabling-gantrys-less-compiler/
---

Gantry 4 has a built in LESS compiler that detects changes in a templates LESS files and recompiles the css accordingly, which I find problematic on several levels.

Firstly, this is a pretty intensive operation and, developing in MAMP, it caused PHP memory exhausted errors (I wouldn't want this on a live site either, as I want all my servers resources available for serving pages, not watching LESS files). Secondly, I like to work with Codekit, because it is simply unbeatable.

I also found Gantry's LESS compiler was ignoring basic syntax errors in the source files, which for me is a big deal. Codekit warns of errors and identifies the file they originate in, Gantry's compiler doesn't. Features like this are invaluable for professionals.

No problem, I thought, there must be a switch to disable the built in compiler. No. There isn't. So, I quickly googled and found a pretty unhelpful response on the Rocket Theme Forums, along the lines of ‘Our compiler is the best implementation available anywhere, you can't disable it.’.

So, I set about disabling it without their help and quickly found a likely-looking section of code, which I then commented out. Bingo! Now my MAMP server would load the site!! Moreover, I was now free to compile my LESS with my own settings, using my preferred (and vastly superior) compiler, CodeKit.

It's unfortunate that there is no way to do this from within the template itself, as this change will not survive an update of Gantry's Framework, but for anyone who wishes to follow the same path I chose you can disable Gantry's LESS compiler in the file /libraries/gantry/core/gantry.class.php by simply commenting out lines 1088 - 1106;

{% highlight php %}
$runcompile    = false;
$cache_handler = GantryCache::getCache($cachegroup, null, true);

$cached_less_compile = $cache_handler->get($cssfile_md5, false);
if ($cached_less_compile === false || !file_exists($css_file_path)) {
	$cached_less_compile = $less_file_path;
	$runcompile          = true;
} elseif (is_array($cached_less_compile) && isset($cached_less_compile['root'])) {
	if (isset($cached_less_compile['files']) and is_array($cached_less_compile['files'])) {
		foreach ($cached_less_compile['files'] as $fname => $ftime) {
			if (!file_exists($fname) or filemtime($fname) > $ftime) {
				// One of the files we knew about previously has changed
				// so we should look at our incoming root again.
				$runcompile = true;
				break;
			}
		}
	}
}
{% endhighlight %}

If you find a cleaner, more persistent method, please let me know!
