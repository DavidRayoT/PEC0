# PJP PEC 0

En esta PEC vamos a aprender a manejar Github y el entorno de programación estándar que utilizaremos en el resto de actividades.

## Objetivos

Los objetivos de esta PEC son:

- Configurar un entorno de trabajo para el desarrollo de aplicaciones en JavaScript.
- Conocer GitHub y las principales tareas colaborativas de la plataforma.
- Revisar el nivel previo de programación.

## Entrega de la PEC

Una vez hayas realizado las actividades prácticas propuestas en este enunciado, **la entrega se realizará de forma doble**:

- Deberás enviar tus cambios al Registro de Evaluación Continua (REC) del campus virtual de la UOC, siguiendo las indicaciones del enunciado en PDF del aula.
- Deberás enviar tus cambios al repositorio de GitHub Classroom, tal y como se describe en el enunciado en PDF del aula.

Recuerda que este repositorio lo has clonado del repositorio en GitHub. Cuando trabajes en tu sistema, todos los cambios los harás en tus ficheros locales, los cuales tendrás que añadir y _comitear_ a tu repositorio Git. Estos cambios estarán en tu sistema hasta que hagas _push_ y los envíes al repositorio en GitHub. Recuerda que debes trabajar en la rama _main_ (si no has creado ramas diferentes, será la que git utilizará por defecto y no deberás hacer nada). Puedes hacer varios envíos.

## Requisitos mínimos

- Conocimientos básicos de Git y GitHub
- Tener instalado VSCode
- Conocimientos básicos de programación

## Conocimientos adquiridos durante la realización de la práctica

- Qué es un bundler y porque es importante
  - https://medium.com/@gimenete/how-javascript-bundlers-work-1fc0d0caf2da
- Repaso de la sintaxis básica de JavaScript
- Cómo subir código y pasar los tests


## Preguntas Teóricas (4p)

Para responder a las preguntas teóricas de esta PEC, debes ir a la herramienta Moodle de tu aula y realizar el test _PEC 0 / PAC 0_ que encontrarás en el menú de navegación, a la izquierda.

## Caso práctico (6p)

Para realizar los ejercicios prácticos debes dirigirte a la siguiente ruta, dentro del repositorio: `src/pec/pec0.js`.
Por otro lado, los tests que te permitirán saber si los ejercicios son correctos están en el fichero `src/pec/pec0.spec.js`.

**Consejo:** Si tienes dudas sobre lo que se pide en alguno de los ejercicios, repasa sus tests.

### Preparando el entorno. (0p)

Primero de todo asegúrate de que tienes instalados:

- [Node.js](https://nodejs.org/es/)
- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

Para que vuestro profesor os localice en GitHub Classroom, necesita conocer vuestro _login_ en la plataforma. Una vez estéis registrados en GitHub, podéis informar de vuestro _login_ tal y como se describe en el enunciado en PDF del aula.

#### Copia la plantilla del ejercicio en Github y clónala en tu entorno local

```
git clone <tu-repositorio>.git
```

#### Instala las dependencias del proyecto

```
npm install
```

#### Ejecuta los tests

```
npm t
```

Los test se lanzarán cada vez que edites el fichero `src/pec/pec0.js`.

npm t### Ejercicio 0 (1p)

Implementar una función `canDrive` que recibe como parámetro un número llamado `age` y devuelve un valor booleano si la edad es suficiente para conducir en España.

> Nota: En España se puede conducir una vez cumplidos los 18 años.

### Ejercicio 1 (1p)

Implementar la función `isEquilateral` que recibe 3 parametros numéricos `a` `b` y `c` que representan las longitudes de los 3 lados de un triángulo.

Esta función debe devolver `true` en el caso de que el triángulo sea equilátero y `false` en cualquier otro caso.

### Ejercicio 2 (2p)

Implementar la función `sum2` que recibe un único parámetro correspondiente a un array de números y devuelve el mismo array sumándole 2 a cada uno de los números.

Ejemplos:

[1, 2, 3] --> [3, 4, 5]
[5, 2, 0] --> [7, 4, 2]

### Ejercicio 3 (2p)

Implementar una función `fibonacci(n)` que devuelve el N número de Fibonacci.


> Nota: N <= 40
