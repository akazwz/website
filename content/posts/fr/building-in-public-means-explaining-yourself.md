---
title: Construire en public signifie souvent s'expliquer encore et encore
date: 2026-04-02
author: akazwz
category: Open source
excerpt: Une fois qu'un projet devient public, écrire du code n'est qu'une partie du travail. Il faut aussi continuer à expliquer les limites, les choix et pourquoi le projet doit avoir cette forme.
readingTime: 5
---

« Construire en public » donne l'impression de parler surtout de transparence et de publication régulière. Mais plus je le fais longtemps, plus cela ressemble à un processus d'explication continue.

Vous ne faites pas seulement l'objet. Vous expliquez aussi, encore et encore, pourquoi il a pris cette forme.

## Une fois le code public, les choix deviennent publics eux aussi

Dès qu'un projet arrive sur GitHub, les gens ne voient pas seulement le résultat. Ils voient aussi vos choix.

Pourquoi ce runtime ici, pourquoi cette fonctionnalité n'a pas été construite, pourquoi la documentation insiste sur les limites, pourquoi la structure est un monorepo, pourquoi un projet est déployé à l'edge tandis qu'un autre reste local. Tout cela entre dans la manière dont votre travail est compris.

Si vous ne l'expliquez pas, les autres remplissent les vides avec leurs propres hypothèses.

## Expliquer n'est pas se défendre. C'est restaurer le contexte.

Je pensais autrefois que si le projet était assez bon, il n'avait pas besoin de beaucoup d'explications. Plus tard, j'ai compris que cela ne fonctionne vraiment que pour les gens déjà très proches du contexte.

Pour la plupart des lecteurs extérieurs, un projet apparaît comme un bloc de code et une arborescence sans arrière-plan. Beaucoup des présupposés qui paraissent naturels dans la tête de l'auteur n'existent tout simplement pas pour eux.

Voilà pourquoi écrire des README, des articles, des feuilles de route et des notes de limites n'est pas un emballage supplémentaire. C'est une manière de restaurer le contexte manquant.

## C'est aussi pour cela que j'ai envie d'écrire des billets

Les dépôts sont très bien pour porter le code et des instructions directes, mais certaines choses s'expriment mieux sous forme d'articles.

Par exemple, pourquoi je travaillerais sur `hostc`, `smail`, `workersai` et `mlx-live` dans la même période alors qu'ils semblent dispersés. Pourquoi je reviens sans cesse aux systèmes edge, aux outils pour développeurs et à l'interaction IA. Pourquoi je continue à écrire en Go tout en expérimentant aussi avec des modèles locaux.

Tout cela est difficile à expliquer complètement dans le README d'un seul projet.

## Expliquer vous oblige à devenir plus honnête

Dès que vous commencez à expliquer vraiment vos propres choix, vous voyez vite quels jugements ne sont que des préférences temporaires, lesquels sont déjà des principes testés, et lesquels n'ont pas encore été pensés jusqu'au bout.

Ainsi, construire en public n'est pas seulement une sortie vers l'extérieur. Cela revient aussi corriger l'auteur lui-même.

## Cette partie du travail est difficile à éviter

Si quelqu'un veut réellement continuer à construire des projets publiquement dans la durée, le besoin de continuer à expliquer est presque impossible à éviter. Non pas parce que le public doit être convaincu, mais parce que le contexte n'apparaît pas tout seul.

Pour moi, c'est justement l'une des parties les plus précieuses de la construction en public. Vous n'écrivez pas seulement du code. Vous clarifiez aussi votre propre jugement, morceau par morceau.
