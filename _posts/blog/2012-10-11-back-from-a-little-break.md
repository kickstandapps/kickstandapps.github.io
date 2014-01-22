---
layout: post
title: "Back From a Little Break"
description: "Time to catch up and get back to work."
category: blog
image:
  feature: Greece.jpg
  credit: 
  creditlink: 
tags: [Etc., Tock]
comments: true
share: true
---

So it's been just over three weeks since Tock made it's way into the [App Store]({{ site.baseurl }}/2012/09/success/). I've definitely stayed busy since then.

I almost immediately released an update to [Tock]({{ site.baseurl }}/tock) so that it would be fully compatible with the iPhone 5. Because of the rumors surrounding the larger screen, I had already built the app to be able to handle different screen sizes. The app was designed so that a taller screen would simply create more space between the time and the date. However, it wasn't until Apple released the final version of the software that I could test what the app would really look like on the iPhone 5. And it turns out that it couldn't "just work". Despite all the code being able to adapt to a new size, the app would still show up with bars on the top and bottom of the screen. The reason? The app needed a "Launch Image" for the new 4-inch screen. For those of you who have seen or used the app, you will notice that there is no launch image. Well it turns out, that if you wanted an app to display correctly on the new iPhone, you had to provide one anyways. Even though you don't need one for the older iPhones. Even though you don't need one for any iPads. Even if you just set it be a black rectangle so that no one will ever notice it. It has to be there. So I added it, released the update, and went on vacation.

And that's the biggest reason why there hasn't been a new post for over three weeks. For more than half of that time, I traded in the lakes of Minnesota for the islands of the Mediterranean Sea. It was beautiful, relaxing, and extremely enjoyable. Pretty much everything you hope for in a vacation. But it had to come to an end.

So I came back. I came back to find that a number of people had downloaded [Tock](http://itunes.apple.com/us/app/tock/id560678443?ls=1&mt=8). That was a good feeling. I could actually call myself a professional developer. But I also came back to a email from one of the first people who bought Tock. It had said that the app wasn't displaying properly. That the hour would only show up some of the time. Well that's not exactly what I had hoped to come back to, but it meant it was time to get back to work to fix the issue. The problem ended up being that I had not tested the app on a device set to 24-hour time. The user's setting would override the time in the app and try to display 24-hour time when it had never been programmed to provide it.

Well, I wanted to fix the problem as soon as I could, but I also realized that I could use the opportunity to continue making Tock better. I would add the option for 12-hour or 24-hour time. That way the user could set it to whatever they wanted. So over the last week, that's what I had been doing. I built the capability to switch between modes and tweaked all the animations so that they could adapt as well. While I was at it, I made some efficiency improvements and cleaned up the code a bit. I also added a setting so that the user can chose whether or not the screen should dim when the device is running on battery power.

As of last night, all this work is complete. The update is submitted to Apple and is [waiting for review]({{ site.baseurl }}/2012/09/waiting-for-review/). It should be released early next week.

So what do I want you to take out of this? Mostly, just the fact that this company, like any other, is made up of people (or person, at least for now). People who try their best. People who go on vacation. People who overlook things they should have caught. People who care about what they do and want to do it as best they can. People who never see their work as "done", because they will always strive to make it better.

I hope that by giving a little transparency to what's going on here, I take they mystery away from the whole process. This company will never be about telling customers what they want. Nor will it be about telling customers what they want to hear. It should always be a discussion between partners. Consumer and provider. And I want anyone reading this to know that your opinion will be heard. Your question will be answered. Your issue will be solved. Your suggestion will be considered. All you have to do is [reach out to us]({{ site.baseurl }}/contact/), and we will reach right back.