---
title: Le README n'est pas un accessoire. Il fait partie du travail produit.
date: 2026-04-18
author: akazwz
category: Open source
excerpt: Un projet open source ne devient généralement réel ni au moment où le code est fini, ni même au moment où il est publié, mais quand quelqu'un d'autre peut le lancer en suivant le README.
readingTime: 5
---

J'aime de moins en moins traiter la documentation comme quelque chose qu'on « ajoute à la fin ».

Pour les projets open source, le README, les notes sur les variables d'environnement, les étapes de déploiement, l'explication de l'architecture et les déclarations de limites ne sont souvent pas des accessoires. Ils font partie du produit lui-même.

## Le fait que le code tourne ne veut pas dire que le projet existe vraiment

Beaucoup d'auteurs supposent une chose : si le code est réel, les autres le comprendront naturellement.

La réalité est rarement aussi simple. Quand quelqu'un ouvre votre dépôt, la première chose qu'il voit n'est pas la logique interne du code. Il voit la page d'accueil. Et il commence par se demander : qu'est-ce que c'est, pourquoi cela existe, puis-je comprendre rapidement comment le lancer, quelles ressources externes faut-il pour le déployer, et pour quels cas d'usage est-ce réellement fait ?

Si ces questions restent sans réponse, même un code bien écrit aura du mal à devenir quelque chose que d'autres utiliseront vraiment.

## Le README définit aussi les frontières du projet

Un bon README fait plus qu'expliquer l'installation. Il définit aussi les frontières du projet.

Pour un projet comme `smail`, il ne suffit pas d'aligner les fonctionnalités. Il faut aussi expliquer les dépendances d'exécution, les bindings Cloudflare, la configuration de session, les migrations de base de données, les cas d'usage visés et les limites. Pour `hostc`, c'est pareil : le démarrage rapide, l'architecture et la feuille de route influencent directement la manière dont les autres perçoivent sa maturité et sa finalité.

Certains projets n'ont pas besoin d'une page d'accueil spectaculaire. Ils ont besoin d'une page d'accueil qui rassure assez pour donner envie de continuer.

## La documentation révèle si vous avez vraiment pensé le produit jusqu'au bout

Il y a une vérité assez brutale que j'aime bien : les parties que vous n'arrivez pas à expliquer clairement dans la documentation sont souvent les mêmes que le produit lui-même n'a pas encore réellement clarifiées.

Si un concept ne fonctionne que parce que l'auteur continue de le compléter dans sa tête, alors l'abstraction n'est probablement pas terminée.

Écrire un README n'est donc pas seulement une explication tournée vers l'extérieur. C'est aussi une inspection interne. Cela révèle quels noms restent instables, quels chemins sont encore trop tortueux, et quelles fonctionnalités paraissent « évidentes » uniquement du point de vue de l'auteur.

## L'open source, ce n'est pas seulement jeter du code dehors

Je n'adhère pas vraiment à la manière de faire de l'open source qui consiste à dire « publions d'abord, on verra ensuite ». Je ne dis pas qu'il ne faut pas publier tôt, mais si l'on veut qu'un projet soit réellement utilisable, le point d'entrée doit au moins être amené à un niveau acceptable.

Les autres ne sont pas là pour reconstituer votre contexte manquant, ni pour deviner vos variables d'environnement.

L'open source utile devrait aider les gens à éviter au moins une partie des pièges qui auraient pu être évités dès le départ.

## C'est pour cela que je traite de plus en plus la documentation comme un travail central

Cela ne rendra pas le dépôt plus spectaculaire, et cela n'apportera pas forcément plus d'étoiles immédiatement, mais cela augmente bel et bien l'utilisabilité réelle du projet.

Si un projet est fait pour être compris, réutilisé et déployé par d'autres, alors le README n'est pas un travail de finition. Il fait partie du travail produit.
