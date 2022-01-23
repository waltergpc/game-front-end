### Setup del ambiente de desarrollo

```bash
git clone https://github.com/waltergpc/game-front-end.git
cd game-front-end
npm i
npm start
```

### Git workflow

Flujo de trabajo para control de versiones del equipo.

| Tipo de rama | Descripción |
| ------------- | ------------- |
| main  | Rama de despliegues a producción  |
| Develop  | Rama de despliegues para ambiente de testing. Acá solo van releases.  |
| feature  | Toda feature sale desde develop y hace merge con develop. En estas ramas se desarrollan features de la aplicación.  |

### Comandos soportados por el proyecto

Para correr estos comandos debes estar en una terminal situada en el directorio raíz del proyecto:


#### Para empezar el servidor de desarrollo

```bash
npm start
```