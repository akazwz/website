---
title: What hostc Really Needs to Solve Is the Last Mile of Developer Experience
date: 2026-04-20
author: akazwz
category: Developer Tools
excerpt: When you build a localhost tunnel, the hard part is not mapping a port to the public internet. It is making connection, feedback, and the first-minute experience feel natural.
readingTime: 6
---

When people first look at `hostc`, they often describe it as “mapping a local port to the public internet.” That description is not wrong, but it is far from enough.

From an implementation point of view, building something that can forward requests is not the hardest part. The part that really decides whether the tool feels legitimate is usually the last mile.

## Users Judge a Tunnel Tool in About a Minute

When does a developer use a tunnel tool? Usually when a local service is already running and they urgently need to show it to someone else, hook up a callback, test against a third-party platform, or open it on another device.

That means they have no patience. What they want is not to understand your system. They want a public URL that works immediately.

If the command is not direct enough, the connection state is unclear, the errors are vague, WebSocket support is shaky, or the feedback feels awkward when the local service dies, the whole tool starts to feel unreliable in the first minute.

## Experience Problems Often Disguise Themselves as Technical Problems

When you build this kind of tool, it is easy to focus entirely on the protocol and the forwarding itself. But many of the things that most strongly shape product feel are actually closer to UX.

For example: how reconnection works after a drop, how the tunnel address is presented, what the terminal should say when the local service is not up, how state stays in sync between the Worker and the CLI, and what the error page should tell the user.

These things do not look like “core technology,” but they decide whether people keep using the tool.

## I Like Systems That Can Be Explained Quickly

I like the structure of `hostc`: a CLI, a Cloudflare Worker, a Durable Object, and a shared protocol package. It is not a monorepo just to look complete. It is a monorepo because those parts genuinely need to speak the same language.

If the state the CLI sees does not match the state the server thinks it has, a tunnel tool becomes hard to debug very quickly. The shared protocol here is not showing off. It is a way to reduce that kind of split.

## “Zero Config” Is Not Just a Marketing Phrase

I am always a little cautious with terms like “zero-config,” because many products say it while simply hiding the configuration.

But I do think tunnel tools should push as close to that direction as they can. Developers are already busy with their own services and business logic. If the tunnel layer demands too much extra understanding, its value drops.

So what `hostc` really needs to solve is not just forwarding traffic. It is sanding down the entire layer of friction around that traffic.

## A Good Developer Tool Should Make People Think One Step Less

I increasingly like tools that actively reduce judgment cost for the user. Not tools that make every decision for them, but tools that keep unnecessary steps from rising to the surface.

For `hostc`, that feeling of “one less thing to think about” may matter more than a longer feature list. It sits in the last mile of developer experience. If that last mile is still awkward, all the implementation work before it becomes much harder to feel valuable.
