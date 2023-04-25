## Getting Started

Primero deberá correr la API para siguiendo los pasos en el readme del mismo.
Luego deberá correr los siguientes comandos:

```bash
npm run start
# or
yarn start
```

Esto generará un build de la aplicación y dejará corriendo la misma en un servidor local.
Para visitar la web podrá ingresar a [http://localhost:3000](http://localhost:3000) en el navegador con esto tendría la web funcionando.

- Para poder retornar todas las files podría utilizar el siguiente comando:

```bash
curl --location --request GET 'localhost:4000/files/data'
```

- Para poder consultar el API por un file específico podría utilizar el siguiente comando:

```bash
curl --location --request GET 'localhost:4000/files/data?fileName=test2.csv'
```
