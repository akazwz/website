---
title: De workersai à mlx-live : comment je pense l'IA cloud et l'IA locale
date: 2026-04-14
author: akazwz
category: Systèmes d'IA
excerpt: Le cloud et le local ne relèvent pas d'un remplacement de l'un par l'autre, mais de deux ensembles de contraintes produit très différents, chacun adapté à une expérience distincte.
readingTime: 6
---

Dans les projets liés à l'IA sur lesquels j'ai travaillé récemment, il y a deux lignes très différentes.

L'une est une voie plus orientée cloud, comme `workersai`, avec son accent sur la portée publique, le déploiement unifié, les capacités partagées et l'interaction en ligne complète. L'autre est une voie plus locale, comme `mlx-live`, centrée sur l'interaction vocale immédiate sur Apple Silicon, la faible latence et l'expérimentation côté appareil.

Placées côte à côte, ces deux directions peuvent ressembler à de l'hésitation. Pour moi, elles répondent en réalité à deux questions complètement différentes.

## La force de l'IA cloud, c'est la portée et l'unification

La valeur la plus évidente d'une approche cloud, c'est qu'elle peut être accessible à tout moment, mise à jour de manière centralisée, servir plus facilement plusieurs clients et gérer beaucoup de ressources et de capacités en un seul endroit.

Si vous construisez un vrai produit en ligne qui a besoin de comptes, de synchronisation, de stockage, de recherche, de traitement de médias et de continuité entre appareils, alors le cloud est généralement la direction la plus naturelle. `workersai` et `openchat-monorepo` se rapprochent beaucoup plus de cette forme de problème.

Dans ce type de projet, l'infrastructure n'est pas un acteur secondaire. Elle fait partie de l'expérience produit.

## La valeur de l'IA locale est dans son rapport au temps

Avec un projet local comme `mlx-live`, l'enjeu n'est pas de « servir beaucoup de monde ». L'enjeu est de rendre l'interaction suffisamment immédiate.

Capture audio dans le navigateur, transport WebSocket vers le backend, VAD pour détecter le début et la fin de la parole, transcription ASR, génération du modèle, synthèse TTS, et interruption immédiate lorsque l'utilisateur coupe la réponse. Si vous voulez que toute cette chaîne reste aussi courte que possible, l'exécution locale devient la direction la plus honnête.

La valeur de l'IA locale ne se limite pas à la confidentialité ou au hors ligne. Plus profondément, elle change la sensation temporelle de l'interaction. Le système commence à sembler dans la même pièce que vous plutôt que derrière une latence réseau évidente.

## Les priorités d'ingénierie des deux voies sont totalement différentes

Dans les projets cloud, je m'intéresse davantage à l'identité, aux sessions, à la scalabilité, à l'état partagé, au chemin de déploiement et à la cohérence entre appareils. Ces projets répondent à la question de savoir comment exister durablement comme produit.

Dans les projets locaux, je m'intéresse davantage au chargement du modèle, à la chaîne audio, à la logique d'interruption, aux limites de l'appareil, aux capacités du navigateur et au débogage sur une seule machine. Ces projets répondent à la question de savoir comment rendre l'interaction vraiment réelle.

Si l'on mélange ces deux objectifs, on tombe facilement dans le pire état possible : quelque chose qui semble faire les deux, mais qui ne fait bien ni l'un ni l'autre.

## Je ne veux pas choisir un camp par idéologie

Les discussions autour de l'IA locale et de l'IA cloud prennent parfois un ton idéologique, comme s'il fallait déclarer son allégeance à un camp.

Du point de vue de la construction produit, ce cadrage est peu utile. Les questions importantes restent les mêmes : quel problème essayez-vous de résoudre, quel type d'expérience voulez-vous créer, et quelles contraintes êtes-vous prêt à accepter ?

Si le produit doit être accessible à beaucoup de personnes, utilisable à tout moment et déployé en continu, le cloud est naturel. Si l'objectif est la faible latence, l'interruptibilité et une sensation proche de l'interaction côté appareil, le local l'est tout autant.

## Le plus important, c'est de ne pas choisir le mauvais problème

En construisant `workersai` et `mlx-live`, l'une de mes plus grandes leçons n'a pas été de savoir quel chemin était le plus avancé. Cela a été de voir plus clairement comment des contraintes différentes façonnent un produit.

Placez le problème au bon endroit et beaucoup de décisions de conception convergeront naturellement. Placez-le au mauvais endroit et le système passera son temps à se battre contre son propre objectif.

Pour moi, l'IA cloud et l'IA locale ne sont donc pas opposées. Ce sont deux voies produit honnêtes, avec deux ensembles de contraintes différents.
