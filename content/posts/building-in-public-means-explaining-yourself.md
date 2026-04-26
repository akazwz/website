---
title: Building in Public Often Means Explaining Yourself Again and Again
date: 2026-04-02
author: akazwz
category: Open Source
excerpt: Once a project is public, writing code is only part of the work. You also have to keep explaining the boundaries, the choices, and why the project should look the way it does.
readingTime: 5
---

“Building in public” sounds like it is mainly about transparency and steady output. But the longer I do it, the more it feels like a process of ongoing explanation.

You are not only making the thing. You are also repeatedly explaining why it ended up in this shape.

## Once the Code Is Public, the Choices Become Public Too

The moment a project goes to GitHub, people do not only see the result. They also see your choices.

Why this runtime is used here, why that feature was not built, why the documentation emphasises boundaries, why the structure is a monorepo, why one project is deployed to the edge while another stays local. All of those become part of how people understand your work.

If you do not explain them, people fill in the gaps with their own assumptions.

## Explanation Is Not Self-Defence. It Is Context Restoration.

I used to think that if the project was good enough, it did not need much explanation. Later I realised that only works for people who are already very close to the context.

For most outside readers, a project appears as a block of code and a directory structure with no prior background. Many of the assumptions that feel natural in the author’s head simply do not exist for them.

That is why writing READMEs, blog posts, roadmaps, and boundary notes is not extra packaging. It is a way to restore the missing context.

## That Is Also Why I Keep Wanting to Write Blog Posts

Repositories are good at carrying code and direct instructions, but some things are better expressed as articles.

For example, why I would work on `hostc`, `smail`, `workersai`, and `mlx-live` in the same phase even though they look scattered. Why I keep returning to edge systems, developer tools, and AI interaction. Why I continue to write Go while also experimenting with local models.

Those things are hard for any single project README to fully explain.

## Explanation Forces You to Become More Honest

Once you really start explaining your own choices, you quickly see which judgments are only temporary preferences, which are already tested principles, and which are things you still have not thought through.

So building in public is not only outward output. It also pushes back on the author and corrects them.

## This Part of the Work Is Hard to Avoid

If someone truly wants to keep building projects publicly over time, the need to keep explaining is almost impossible to avoid. Not because the audience needs persuasion, but because context does not appear by itself.

To me, that is actually one of the most valuable parts of building in public. You are not only writing code. You are also making your own judgment clearer, piece by piece.
