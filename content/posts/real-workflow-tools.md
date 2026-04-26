---
title: I Prefer Building Tools That Solve Real Workflow Problems
date: 2026-04-26
author: akazwz
category: Product
excerpt: Many of my projects look scattered on the surface, but they start from the same place: solve a real workflow problem first, then decide the shape and stack.
readingTime: 6
---

If you only look at the repository list, the things I build can seem a little scattered.

`smail` is temporary email. `hostc` is a localhost tunnel. `openchat-monorepo` and `workersai` are both about AI interaction. `mlx-live` shifts toward a local voice assistant. I am also still writing Go services and smaller backend experiments.

But in my own head, these projects are actually very consistent. They do not start from “I want to work on a trendy space.” They start from a very specific workflow problem.

## I Don't Trust Big, Vague Premises

“Build an AI product,” “build a developer tool,” or “build a productivity platform” all sound complete, but they usually do not define the problem clearly enough.

I would rather start with a narrower sentence.

For example, `smail` did not begin with “reinvent email.” It began with making temporary inboxes feel fast, direct, and easy to trust for low-risk situations. `hostc` did not begin with “build another tunnel platform.” It began with compressing “I want my local service to have a public URL right now” into as few steps as possible.

The same is true for `openchat-monorepo` and `workersai`. They were never about chasing an abstract AI idea. They were about validating a complete interaction loop: input, response, search, sync, voice, sessions, storage, and cross-device experience.

## Get the First Sentence Right

I increasingly believe that whether a project deserves to keep going depends heavily on whether you can explain its first sentence clearly.

If that first sentence stays at the level of broad direction words, the architecture, documentation, interface, and feature priorities will lose focus very quickly.

If the first sentence is specific enough, many decisions become easier by themselves. You know which features are core and which are just noise. You know whether time should go into stability or packaging. You know which technologies are necessary and which only look advanced.

## The Technology Comes After the Problem

Many people discuss the stack first. I usually look at the problem first, then the runtime, and only then the technology.

Why do some projects end up on Cloudflare Workers? Because they naturally need global reach, fast deployment, edge execution, and a short operational path. Why does `mlx-live` lean toward local models and Apple Silicon? Because it is trying to validate low-latency, interruptible, device-side real-time voice interaction, and that problem belongs locally.

Technology matters, of course, but it acts more like a later constraint than an opening slogan.

## I Care More About Usefulness Than Scale

Most of the projects I build have one thing in common: ideally, they help someone on day one.

Even if the help is small, that still matters more to me than a system that feels conceptually complete but never really lands in real use. A good tool does not have to be large, but it usually has to be clear. You should know what it solves, what it does not solve, and why it is worth keeping around after you use it once.

That is why I keep making projects that do not seem to sit on a single visible line. They serve different users and different scenarios, but they all match the software shape I like: something that grows out of a real workflow, gets the most critical step right first, and only then expands.

## To Me, the Consistency Is Not Surface-Level

I will probably keep building things that do not look like they belong to one family on the surface. Some might be edge products. Some might be Go services. Some might be local AI. Some might just be small tools that erase one annoying step from a workflow.

But the rule underneath them probably will not change: find the real problem first, then solve it with a system that stays as clear as possible.
