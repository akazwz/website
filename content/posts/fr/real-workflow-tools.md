---
title: Je préfère créer des outils qui résolvent de vrais problèmes de flux de travail
date: 2026-04-26
author: akazwz
category: Produit
excerpt: Beaucoup de mes projets semblent dispersés en surface, mais ils partent du même endroit : résoudre d'abord un vrai problème de flux de travail, puis seulement choisir la forme et la technologie.
readingTime: 6
---

Si l'on regarde seulement la liste des dépôts, ce que je construis peut paraître un peu dispersé.

`smail` est un service d'email temporaire. `hostc` est un tunnel localhost. `openchat-monorepo` et `workersai` tournent tous les deux autour de l'interaction avec l'IA. `mlx-live` se déplace vers un assistant vocal local. Et je continue aussi à écrire des services Go et de plus petites expériences backend.

Mais dans ma tête, ces projets sont en réalité assez cohérents. Ils ne commencent pas par « je veux travailler sur une tendance ». Ils commencent par un problème de flux de travail très concret.

## Je ne fais pas confiance aux grandes prémisses vagues

« Construire un produit IA », « faire un outil pour développeurs » ou « créer une plateforme de productivité » sonne de façon complète, mais cela ne définit souvent pas assez clairement le problème.

Je préfère partir d'une phrase plus étroite.

Par exemple, `smail` n'a pas commencé par « réinventer l'email ». Le point de départ était de rendre la réception temporaire rapide, directe et facile à faire confiance dans des situations à faible risque. `hostc` non plus n'a pas commencé par « construire une autre plateforme de tunnel », mais par l'idée de compresser « je veux une URL publique pour mon service local tout de suite » en aussi peu d'étapes que possible.

Il en va de même pour `openchat-monorepo` et `workersai`. Ils ne sont pas nés pour poursuivre une idée abstraite de l'IA, mais pour valider une boucle d'interaction réelle : entrée, réponse, recherche, synchronisation, voix, sessions, stockage et expérience multi-appareils.

## Il faut rendre la première phrase claire

Je pense de plus en plus que la possibilité de continuer un projet dépend en grande partie de la clarté avec laquelle on peut formuler sa première phrase.

Si cette première phrase reste au niveau de mots de direction, l'architecture, la documentation, l'interface et les priorités fonctionnelles perdent vite leur centre.

En revanche, si la première phrase est suffisamment concrète, beaucoup de décisions deviennent naturellement plus simples. On sait quelles fonctionnalités sont centrales et lesquelles ne sont que du bruit. On sait s'il faut investir le temps dans la stabilité ou dans l'habillage. On sait aussi quelles technologies sont nécessaires et lesquelles ont seulement l'air avancées.

## La technologie vient après le problème

Beaucoup de gens parlent d'abord de la stack. Moi, je regarde généralement d'abord le problème, puis l'environnement d'exécution, et seulement ensuite la technologie.

Pourquoi certains projets finissent-ils sur Cloudflare Workers ? Parce qu'ils ont naturellement besoin d'une portée globale, d'un déploiement rapide, d'une exécution à l'edge et d'un chemin opérationnel court. Pourquoi `mlx-live` penche-t-il vers les modèles locaux et Apple Silicon ? Parce qu'il essaie de valider une interaction vocale temps réel, à faible latence et interruptible, côté appareil, et que ce problème est plus honnête en local.

La technologie compte évidemment, mais pour moi elle agit davantage comme une contrainte ultérieure que comme un slogan d'ouverture.

## L'utilité m'importe plus que l'ampleur

La plupart des projets que je construis ont un point commun : idéalement, ils aident quelqu'un dès le premier jour.

Même si l'aide est modeste, cela compte plus pour moi qu'un système conceptuellement très complet qui n'arrive jamais vraiment dans un usage réel. Un bon outil n'a pas besoin d'être grand, mais il doit souvent être clair. On doit comprendre ce qu'il résout, ce qu'il ne résout pas et pourquoi il vaut la peine de rester après usage.

C'est pour cela que je continue à faire des projets qui ne semblent pas appartenir à une seule ligne visible. Ils servent des utilisateurs et des contextes différents, mais ils correspondent tous à la forme de logiciel que j'aime : quelque chose qui pousse depuis un flux réel, qui rend d'abord le pas le plus critique fiable, puis qui s'étend.

## Pour moi, la cohérence n'est pas de surface

Je continuerai probablement à construire des choses qui, en surface, ne ressemblent pas à une seule famille. Certaines seront peut-être des produits edge. D'autres seront des services Go. D'autres encore seront de l'IA locale. Ou simplement de petits outils qui effacent une étape irritante d'un flux.

Mais la règle sous-jacente changera sans doute très peu : trouver d'abord le vrai problème, puis le résoudre avec un système qui reste aussi clair que possible.
