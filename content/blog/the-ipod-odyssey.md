+++
title = "The iPod Odyssey"
date = 2024-10-10
updated = 2024-10-10
description = "A journey towards digital minimalism ( + small updates )"

[taxonomies]
tags = ["misc", "tech"]
+++

About two weeks ago, I started noticing how overly instinctual it has become for me to check my phone constantly.
Two minutes in the checkout queue at the grocery store? Check emails.
Quick toilet break at work? Scroll through Twitter for a minute.
Waiting at the bus stop for five minutes? Check Discord for the sixth time in the last 20 minutes.

You don't have to be a behavioural analyst to notice that this is a bit of bad habbit.
Constantly consuming whatever my phone had to throw at me had become a bit of an addiction.
The thing is, I own my phone, not the other way around.
Then why the fuck does it feel like it's calling out to me so often?
The answer to that question should be obvious; Algorithms.

I'm not going to go full-on philosophical here, but I just wanted to point some things out before I continue.
At the end of the day, I like to at least feel like I'm in charge of what I do in my daily life.
Being constantly online has made that a fair bit more difficult though.
Sometimes you just happen to get a notification from Discord that your friends are chatting about something you are interested in.
Or getting a ping on my watch for every e-mail that lands in my inbox.
It's easier than ever before to get distracted.
So let's try and fix that.

One of the most important things in my day-to-day life is music.
Because of this, around 7 years ago I jumped on the oppurtunity to set up a Spotify subscription while they had a discount on for three months.
I was instantly hooked by the sheer speed at which I could find new music.
At first it seemed brilliant, but about a year after I signed up, I did start to notice that the Spotify recommendation algorithms sucked.
Seriously, they're actually terrible.
It's gotten especially bad in the last two or so years.
You end up getting the same three albums mixed throughout different automatically generated playlists.
And then the only way to break out of that loop is to explicitly search for something new and listen to it often enough for the algorithm to pick it up.
Additionally, with the way only individual songs get thrown at you through radio playlists you miss out on so much, while having to still skip loads of tracks you just don't vibe with in the moment.
To put it simply; it sucks.

To tell a long story short; I found an iPod Video Gen 5.5 on Willhaben ( if you're not from Austria, just think of it as our local version of Craigslist ).
The previous owner seemed to take very good care of it, he even still had the original receipt of him purchasing the device back in 2006.
It is kind of mad to think about the fact that, when this device was initially sold at MediaMarkt, I just started primary school.
As soon as the parcel had arrived I dropped everything and unpacked it with my fiancé and, not gonna lie, I was quite giddy.
The iPod was in really good condition.
Of course the backplate was pretty scratched up, but that's to be expected for iPods at this point.
Because I daily-drive Linux on my desktop PC and I couldn't be arsed to drag all my music to my Macbook to sync it over, I installed Rockbox, a custom operating system for portable jukeboxes.
After customizing it a bit and dropping some music on it to test if everything was in order I just started using it.
I put on an album I was meaning to listen to for a few days and loved it.
No interruptions, no random crashes ( looking at you Spotify ), just the music I wanted to hear.

Ever since then, I ordered some upgrade parts from a site called Elite Obsolete Electronics as well as an iFlash board to replace the mechanical hard-drive, which didn't sound all-too-happy anymore.
Now, a week and a bit after I placed the orders for the parts, they arrived and yesterday I decided to get at it.
I grew quite emotionally attached to this piece of technology so I tried to be as careful as possible.
Initially, things seemed to proceed quite fast. I flashed the original firmware without a hitch, but then I hit the first road-block.
The hold switch, which "locks" the device to prevent accidental inputs on the touch-wheel, wasn't fully functional.
The part of the switch you actually move around had gotten detached from the electrical switch inside the case.
After a bit of consideration how to move forward, I decided to just try and apply a few drops of super glue to re-connect the two parts of the switch.
All it took was ruining a pair of tweezers, which I had to use to apply a minute amount of glue, so I didn't fully lock the switch in place, rendering it unusable.
Thankfully, I only applied a little bit too much glue which settled immediately, so I had to just use brute force to move the switch, but it worked!
The iPod was now able to register the hold switch toggling perfectly fine.
Now I finally was able to add Rockbox and put some music on my freshly modded 196GB iPod!
Since everything seemed like it was fine, I thought I was mostly done, so I decided to close the case.
Suddenly I had to have a painful realisation that something was messed up with the storage.
The iPod would sometimes appear as read-only in my file manager or just randomly stop accepting files via USB.
Even worse, when I tried to play the few tracks I had managed to get on there, they seemed completely corrupted.
Even more worse, when I tried rebooting it, to see if that would fix the issues, but then the bootloader told me that the `rockbox.ipod` file didn't match the expected checksum.
Okay this is bad.
TLDR; I had forgotten to format the SD cards correctly before putting them in the iFlash board, which lead to the corruption and random behaviour. 
After a lot of fussing about to open the case without bending it out of shape completely, I managed to get the cards out.
I formatted them, popped everything back in, flashed the stock OS, installed RockBox, put on some music, tested a bit, and then it was finally done.
And only then did I notice that it was already nearly midnight and I should probably get ready to sleep.

Now it's the next day and so let's recap.
The 3000mAh battery I put in drastically improved battery performance, which to be fair, wasn't even that bad before.
Now the storage totals up to 196GB ( of which about 180GB are usable, basically 6x the original 30GB hard drive ), so I shouldn't have to worry about storage for a while.
And even if, one day in the future, I want to add more, there are still two micro-SD card slots free on the iFlash board for more.

All in all, I couldn't be happier with it.
Thinking about what albums I want on my jukebox really gave me an appreciation for the music that I haven't had since the Limewire days.
If you have an old iPod at home, try and see if you can fix it, cause for one it certainly is a fun side project to customize everything, and secondly it's just a good device.
It really is lovely.

![Image collage of the modded iPod. On the left a picture of the U2 back-plate and on the right playing a song from the album "five seconds flat" by Lizzy McAlpine](/img/blog/ipod.webp)

PS.: Oh yeah I changed the back cover, front plate and center button.
The back case is of the U2 special edition iPods and I thought it would be funny.

