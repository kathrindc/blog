---
title: "Valve's Hammer Editor on Linux"
date: 2024-03-06
updated: 2024-03-06
layout: "post"
tags:
  - games
  - source
  - hammer
  - linux
---

So the other day I wanted to mess around with making my own game-mode for Garry's Mod. I thought I could make a quick map with some custom entities preset to make testing a tad faster. Turns out getting Source's level editor to function properly on Linux is a bit of a headache.

This isn't gonna be a long post, but rather just a quick heads-up for anyone who wants to use this as well. Since I only want to make maps for GMod right at the moment, I will only be focusing on the specifics for this game.

At first I thought I could get it working within the wine prefix that Steam created for my GMod installation, but that brought me nowhere close to a stable editor after an entire afternoon.
Every time I launched either Hammer or Hammer++ they just froze up after a couple of small interactions.
Granted this might've just been an issue with my graphics setup (I am using an Intel Arc card), but I still hadn't gotten any closer to my goal.
So, just for lulz, I just created an empty wine prefix and used the normal wine version that I installed via `pacman`. Turns out that worked somehow. God knows how or why but it does. No patches, funky setups or anything were actually required.

I quickly wrote a bash script that starts up Hammer so I don't have to do it manually every time. You should be able to just take this, adjust the paths (mine are all somewhere within my home directory) and run it that way. Here's my `gmh` script:

```bash
#!/usr/bin/env bash

cd /home/kad/data/steam/steamapps/common/GarrysMod/bin/
WINEPREFIX=/home/kad/gmhpfx wine hammer.exe
```

Of course this doesn't include anything fancy like Hammer++, but at least it works for now. I might make a better launch script to account for different SDKs and what-not later on. Anyways, for now, it works.

