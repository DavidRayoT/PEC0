# PJP PAC 0

En aquesta PAC aprendrem a gestionar Github i el seu entorn de programació estandard que utilitzarem a la resta d'activitats.

## Objectius

Els objectius d'aquesta PAC són:

- Configurar un entorn de treball per al desenvolupament d'aplicacions en JavaScript.
- Conèixer GitHub i les principals tasques col·laboratives de la plataforma.
- Revisar el nivell previ de programació.

## Entrega de la PAC

Un cop hagis realitzat les activitats pràctiques proposades en aquest enunciat, **el lliurament es realitzarà de forma doble**:

- Hauràs d'enviar els teus canvis al Registre d'Avaluació Contínua (RAC) del campus virtual de la UOC, seguint les indicacions de l'enunciat en PDF de l'aula.
- Hauràs d'enviar els teus canvis al Repositori de GitHub Classroom, tal com es descriu a l'enunciat en PDF de l'aula.

Recorda que aquest repositori l'has clonat del repositori a GitHub. Quan treballis al teu sistema, tots els canvis els faràs als teus fitxers locals, els quals hauràs d'afegir i _comitejar_ al teu repositori Git. Aquests canvis estaran al teu sistema fins que facis _push_ i els enviïs al repositori a GitHub. Recorda que has de treballar en la branca _main_ (si no has creat branques diferents, serà la que git utilitzarà per defecte i no hauràs de fer res). Pots fer diversos enviaments.

## Requeriments mínims

- Coneixements bàsics de Git i GitHub
- Tenir instal·lat VSCode
- Coneixements bàsics de programació

## Coneixements adquirits durant la realització de la pràctica

- Què és un bundler i perquè és important
  - https://medium.com/@gimenete/how-javascript-bundlers-work-1fc0d0caf2da
- Repàs de la sintaxi bàsica de JavaScript
- Com pujar codi i passar els tests

## Preguntes teòriques (4p)

Per tal de respondre a les preguntes teòriques d'aquesta PAC, has d'anar a l'eina Moodle de la teva aula i realitzar el test _PEC 0 / PAC 0_ que trobaràs al menú de navegació, a l'esquerra.

## Cas pràctic (6p)

Per realitzar els exercicis pràctics has de dirigir-te a la següent ruta, dins del repositori: `src/pec/pec0.js`.
D'altra banda, els tests que et permetran comprobar si els exercicis són correctes estan al fitxer `src/pec/pec0.spec.js`.

**Consell:** Si tens dubtes sobre el què es demana en algun dels exercicis, repassa els seus tets.

### Preparant l'entorn (0p)

En primer lloc assegura't de que tens instal·lats:

- [Node.js](https://nodejs.org/es/)
- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

Perquè el vostre professor pugui localitzar-vos a l'aula en GitHub Classroom, necessita conèixer el vostre login a la plataforma. Un cop estigueu registrats en GitHub, podeu informar del vostre login seguint les indicacions de l'enunciat en PDF de l'aula.

#### Còpia la plantilla de l'exercici a Github i clónala al teu entorn local

```
git clone <el-teu-repositori>.git
```

#### Instal·la les dependències del projecte 

```
npm install
```

#### Executa els tests

```
npm t
```

Els tests es llançaran cada cop que modifiquis el fitxer `src/pec/pec0.js`.

### Exercici 0 (1p)

Implementar una funció `canDrive` que rep com a paràmetre un número anomentat `age` y retorna un valor booleà si l'edat és suficient per poder conduir a Espanya.

> Nota: A Espanya es pot conduir a partir dels 18 anys.

### Exercici 1 (1p)

Implementar la funció `isEquilateral` que rep 3 paràmetres numèrics `a` `b` i `c` que representan les longituds dels tres costats d'un triangle.

Aquesta funció ha de retornar `true` en el cas de que el triàngle sigui equilàter i `false` en qualsevol altre cas.
 
### Exercici 2 (2p)

Implementar la funció `sum2` que rep un únic paràmetre corresponent a un array de números i retorna el mateix array sumant 2 a cadascun dels números.

Exemples:

[1, 2, 3] --> [3, 4, 5]
[5, 2, 0] --> [7, 4, 2]

### Exercici 3 (2p)

Implementar una funció `fibonacci(n)` que retorna el N número de Fibonacci.


> Nota: N <= 40
