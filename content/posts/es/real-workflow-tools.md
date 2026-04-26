---
title: Prefiero crear herramientas que resuelvan problemas reales de flujo de trabajo
date: 2026-04-26
author: akazwz
category: Producto
excerpt: Muchos de mis proyectos parecen dispersos a primera vista, pero parten del mismo lugar: resolver primero un problema real de flujo de trabajo y solo después decidir la forma y la tecnología.
readingTime: 6
---

Si uno mira solo la lista de repositorios, lo que construyo puede parecer algo disperso.

`smail` es correo temporal. `hostc` es un túnel para localhost. `openchat-monorepo` y `workersai` tratan sobre interacción con IA. `mlx-live` se mueve hacia un asistente de voz local. Además, sigo escribiendo servicios en Go y experimentos de backend más pequeños.

Pero en mi cabeza estos proyectos son bastante consistentes. Ninguno empieza con “quiero trabajar en una tendencia”. Empiezan con un problema de flujo de trabajo muy concreto.

## No confío mucho en premisas grandes y vagas

“Construir un producto de IA”, “hacer una herramienta para desarrolladores” o “crear una plataforma de productividad” suena completo, pero muchas veces no define realmente el problema.

Prefiero empezar con una frase más estrecha.

Por ejemplo, `smail` no empezó con “reinventar el correo”. Empezó con hacer que una bandeja temporal se sienta rápida, directa y fácil de confiar en contextos de bajo riesgo. `hostc` tampoco empezó con “crear otra plataforma de túneles”, sino con comprimir “quiero una URL pública para mi servicio local ahora mismo” en la menor cantidad de pasos posible.

Lo mismo ocurre con `openchat-monorepo` y `workersai`. No nacieron para perseguir una idea abstracta de IA, sino para validar un ciclo de interacción real: entrada, respuesta, búsqueda, sincronización, voz, sesiones, almacenamiento y experiencia entre dispositivos.

## Hay que dejar clara la primera frase

Cada vez creo más que la posibilidad de seguir con un proyecto depende en gran medida de si puedes explicar con claridad su primera frase.

Si esa primera frase se queda en palabras de dirección, la arquitectura, la documentación, la interfaz y la prioridad de funciones pierden foco muy rápido.

En cambio, si la primera frase es lo bastante concreta, muchas decisiones se vuelven automáticamente más simples. Sabes qué funciones son núcleo y cuáles son ruido. Sabes si debes gastar tiempo en estabilidad o en presentación. También sabes qué tecnologías son necesarias y cuáles solo parecen avanzadas.

## La tecnología llega después del problema

Mucha gente empieza hablando del stack. Yo suelo mirar primero el problema, después el entorno de ejecución y solo al final la tecnología.

¿Por qué algunos proyectos terminan en Cloudflare Workers? Porque necesitan de forma natural alcance global, despliegue rápido, ejecución en el edge y una ruta operativa corta. ¿Por qué `mlx-live` toma la vía de modelos locales y Apple Silicon? Porque quiere validar interacción de voz en tiempo real, con baja latencia e interrupción posible, del lado del dispositivo, y ese problema encaja mejor en local.

La tecnología importa, claro, pero para mí funciona más como una restricción posterior que como un lema inicial.

## Me importa más la utilidad que la escala

La mayoría de los proyectos que hago tienen algo en común: idealmente ayudan a alguien desde el primer día.

Aunque la ayuda sea pequeña, sigue importándome más que un sistema conceptualmente muy completo que nunca termina de aterrizar en un uso real. Una buena herramienta no tiene por qué ser grande, pero sí suele tener que ser clara. Debe quedar claro qué resuelve, qué no resuelve y por qué vale la pena conservarla después de usarla.

Por eso sigo haciendo proyectos que no parecen pertenecer a una sola línea visible. Sirven a usuarios y situaciones distintas, pero todos comparten la forma de software que me gusta: algo que nace de un flujo real, resuelve primero el paso más crítico y solo después se expande.

## Para mí, la consistencia no está en la superficie

Probablemente seguiré construyendo cosas que, en la superficie, no parecen de la misma familia. Puede que algunas sean productos edge. Otras serán servicios en Go. Otras, IA local. O quizá solo pequeñas herramientas que eliminan un paso molesto de un flujo.

Pero la regla debajo de todas ellas probablemente no cambie: encontrar primero el problema real y luego resolverlo con un sistema lo más claro posible.
