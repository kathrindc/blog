+++
title = "Yet another WordPress theme"
date = 2023-05-18
updated = 2023-05-18
description = "Time to make the theme to end all themes"

[taxonomies]
tags = ["tech", "code", "php", "wordpress"]
+++

I have been making WordPress sites for friends, family and co for some while.
Yet, every time it comes to the age old question of what theme to use I find myself getting annoyed at various aspects of existing themes.
It's not like there aren't any good themes either, but for some reason, my "clients" (not really a registered business, so calling them clients is a bit odd) always pick the ones that might fit their needs but cause a lot of issues when actually deployed.
For this reason, I decided to begin the long and arduous journey of creating my own WordPress theme.

You, might think to yourself, "oh no, she's gone mad".
I assure you, dear reader, that I am of sound mind.
But I *do* value my time, so if I can save some time later on I am willing to put in the work beforehand.

Now, the last time I made a theme for a PHP-based CMS was for Joomla back in 2011.
More than a decade has passed and things have changed quite a bit.
To be fair, I made a couple little block plugins for WP in 2019 for a friend's site, which still work to this day.
But very little of the knowledge for creating themes is going to apply to today (at least I think so).

So far I've gone through the trouble of setting up a development host, which turned out to be way more annoying that I thought it to be.
At first, I just tried dockerizing a dev environment, but keeping the file permissions in sync didn't quite work out.
Next, I tried to just set up a VM host and use PHPStorm's remote development feature.
That was more trouble than it was worth just to get working, since PHPStorm kept having weird issues, even when editing files in my remote user's home directory.
So I thought maybe I'll have better luck with code-server (VS Code in the browser).
Nope.
That thing didn't want to work properly at all.
Now I just settled for jEdit on the server over SSH X11 forwarding.
It's *definitely* not the best solution but at least it works good enough for now.
I might as well just go back to setting up NeoVim with some plugins on the dev server.

With a dev environment set up and WordPress spun up on the dev host I am finally able to actually start working.
I just set up [Underscores](https://underscores.me/) as base, since I've read good things about it and that's about it for now.

Cheers.
