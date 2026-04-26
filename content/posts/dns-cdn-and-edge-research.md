---
title: Why I Have Been Spending So Much Time on DNS, CDNs, and Edge Delivery
date: 2026-04-10
author: akazwz
category: Systems
excerpt: Many product problems eventually point to the network path itself. The speed, stability, and reachability users actually feel are often not things the page layer can explain on its own.
readingTime: 6
---

Recently I have spent quite a bit of time on DNS, CDN behaviour, and edge delivery.

Those topics do not sound like “product work.” They sound more like infrastructure research. But the more public products I build, the more I feel how close they are to real user experience.

## Many Experience Problems Are Not in the Page Layer at All

When your site will not open, newly deployed content is inconsistent, cache behaviour feels strange, or one region is noticeably slower, the problem is often already below the component and page logic layer.

It may be in the DNS resolution path, the CDN cache policy, the edge-to-origin relationship, or the boundary handling between static and dynamic content.

If you do not understand those parts, many surface-level “product problems” end up being guessed at rather than understood.

## If You Build Edge Products, You Will Run Into These Questions Sooner or Later

Whether it is a public-facing product like `smail` or a network-path tool like `hostc`, you eventually run into questions of reachability, caching, resolution, and distribution.

Even if you are not building a networking product directly, the moment you hand something to global users, those issues become part of product quality.

Whether a page stays stable, whether an update arrives in time, whether a URL feels trustworthy, whether a resource gets cached correctly. None of those things disappear just because you are focused on business logic.

## DNS and CDNs Are Not “Low-Level Details.” They Shape Experience.

I increasingly dislike calling DNS and CDNs “low-level details,” because they directly shape the form of the experience users actually see.

How should the default TTL be set? Should static assets be cached long-term? Should pages be revalidated? Why did a piece of traffic pass through one edge node instead of another? Will a domain change or certificate activation create visible jitter?

Those are not purely operational questions. They land directly in the final experience.

## Understanding the Path Makes Product Decisions More Stable

A lot of the time, studying these things is not about making a system feel “more advanced.” It is about reducing misjudgment.

If you know how caching works, you know when the origin is or is not the real problem. If you understand the DNS propagation path, you know why a domain switch does not become globally consistent at once. If you understand the value of edge nodes, you know which products naturally belong there.

For me, that understanding feeds directly back into product decisions.

## Once Software Goes Public, the Network Stops Being Background

When you write local software, many paths are stable and controllable. But once a system is actually on the public internet and gets accessed from different regions, ISPs, and devices, the network itself stops being background scenery.

It starts participating in product quality.

That is why I have been spending time on DNS, CDNs, and edge delivery recently. Not because those terms sound hard-core, but because they are already part of the products I am building.
