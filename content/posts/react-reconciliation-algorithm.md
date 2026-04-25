---
title: Understanding React's Reconciliation Algorithm
date: 2026-04-18
author: Elena Maris
category: React
excerpt: React doesn't touch the DOM unless it has to. Understanding why — and how — makes you a better React developer.
readingTime: 8
---

React's reconciliation algorithm is the engine behind its performance model. Understanding it well removes a great deal of mystery from React's behaviour — and explains why some patterns are fast while others silently destroy performance.

## The Core Idea: Virtual DOM Diffing

When state changes, React doesn't immediately reach for the real DOM. Instead it re-renders to a virtual DOM — a lightweight JavaScript object tree — and diffs it against the previous snapshot. Only the differences are applied to the real DOM.

This matters because real DOM mutations are expensive. JavaScript is fast. The diff itself costs almost nothing compared to what it avoids.

## The Heuristics

A naïve tree diff is O(n³) — unusable at scale. React reduces this to O(n) with two heuristics:

**1. Different element types produce different trees.**

If a `<div>` becomes a `<section>`, React tears down the entire subtree and rebuilds from scratch. It does not attempt to reuse children. This is why changing a wrapper element can unmount deeply nested components.

**2. Keys stabilise identity across renders.**

Without keys, React reconciles children by position. Add an item to the beginning of a list and React sees every child as changed. With stable keys, React can match items across renders by identity, not position.

```tsx
// Bad: forces a full re-render of every item on change
{
  items.map((item, i) => <Row key={i} item={item} />);
}

// Good: React can track each item individually
{
  items.map((item) => <Row key={item.id} item={item} />);
}
```

## Fibre: Incremental Reconciliation

The original React reconciler was synchronous and stack-based. A large update would block the main thread until complete. React 16 introduced Fibre — a complete rewrite that made reconciliation interruptible.

Fibre breaks work into small units. Between units, React can yield to the browser, handling input events or painting frames. This is what makes `useTransition` and `startTransition` possible: low-priority updates can be interrupted by high-priority ones.

```tsx
const [isPending, startTransition] = useTransition();

function handleInput(value: string) {
  setQuery(value); // urgent: update the input immediately
  startTransition(() => {
    setResults(computeResults(value)); // deferrable: can wait
  });
}
```

## Bailout: When React Skips Work

React does not always reconcile. Several mechanisms allow it to skip subtrees entirely:

- `React.memo` — skips re-rendering if props are shallowly equal
- `useMemo` — memoises a computed value
- `useCallback` — stabilises a function reference across renders

These are not premature optimisations when applied at component boundaries where prop identity is meaningful. They are premature when applied everywhere by default.

## What This Means in Practice

A few rules follow directly from how reconciliation works:

- Keep component trees stable. Defining components inside render functions recreates them every render, forcing React to unmount and remount rather than update.
- Use stable keys for dynamic lists.
- Colocate state as deep as possible. State high in the tree causes wide re-renders.
- Profile before optimising. React DevTools' Profiler tab shows exactly which components re-rendered and why.

The reconciler is on your side. Work with its heuristics rather than against them.
