---
title: El README no es un accesorio. Es parte del trabajo de producto.
date: 2026-04-18
author: akazwz
category: Código abierto
excerpt: Un proyecto open source normalmente no se vuelve real cuando el código está terminado, sino cuando otra persona puede ponerlo en marcha siguiendo el README.
readingTime: 5
---

Cada vez me gusta menos tratar la documentación como algo que “se añade al final”.

En proyectos open source, el README, las notas sobre variables de entorno, los pasos de despliegue, la explicación de la arquitectura y las declaraciones de límites no suelen ser accesorios. Son parte del propio producto.

## Que el código funcione no significa que el proyecto ya exista de verdad

Muchos autores asumen una cosa: si el código es real, la gente lo entenderá por sí sola.

La realidad suele ser otra. Cuando alguien abre tu repositorio, lo primero que ve no es la lógica interna del código. Ve la portada. Y empieza preguntándose: qué es esto, por qué existe, si puedo averiguar rápido cómo iniciarlo, qué recursos externos necesito para desplegarlo y para qué tipo de escenarios sirve realmente.

Si esas preguntas no tienen respuesta, incluso un código bien escrito tendrá dificultades para convertirse en algo que la gente use de verdad.

## El README también está definiendo los límites del proyecto

Un buen README hace más que explicar cómo instalar algo. También define los límites del proyecto.

En un proyecto como `smail`, no basta con listar funciones. También hay que explicar dependencias de ejecución, bindings de Cloudflare, configuración de sesión, migraciones de base de datos, casos de uso previstos y limitaciones. Con `hostc` ocurre lo mismo: el quick start, la arquitectura y la hoja de ruta influyen directamente en cómo la gente entiende su nivel de madurez y su propósito.

Hay proyectos cuya portada no necesita impresionar. Necesita dar suficiente tranquilidad como para seguir adelante.

## La documentación revela si realmente lo has pensado bien

Hay una verdad bastante dura que me gusta: las partes que no puedes explicar con claridad en la documentación suelen ser las mismas partes que el producto todavía no ha terminado de pensar.

Si un concepto solo funciona porque el autor aún lo completa en su cabeza, entonces esa abstracción probablemente todavía no está terminada.

Por eso, escribir un README no es solo explicación externa para mí. También es inspección interna. Ahí aparecen los nombres que aún son inestables, las rutas demasiado enredadas y las funciones que solo parecen “obvias” desde la perspectiva del autor.

## Open source no es simplemente lanzar el código ahí fuera

No me convence demasiado esa forma de hacer open source que dice “publícalo primero y ya veremos”. No digo que no se pueda publicar pronto, pero si quieres que un proyecto sea realmente utilizable, el punto de entrada debería estar al menos en un nivel aceptable.

La gente no está ahí para rellenar el contexto que falta, ni para adivinar tus variables de entorno.

El open source útil debería ayudar a evitar al menos algunos de los problemas que podían haberse evitado desde el principio.

## Por eso cada vez trato más la documentación como trabajo central

No hará que el repositorio se vea más llamativo, y quizá no traiga más stars de inmediato, pero sí aumenta de forma clara la usabilidad real del proyecto.

Si un proyecto está hecho para ser entendido, reutilizado y desplegado por otras personas, entonces el README no es trabajo de cierre. Es parte del trabajo de producto.
