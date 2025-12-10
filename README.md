# React vs Next Performance Lab

Proyecto de comparación de rendimiento entre **React** y **Next.js**, en sus versiones **normal** y **optimizada**, con el objetivo de mostrar mejoras en **First Contentful Paint**, **Largest Contentful Paint**, **Total Blocking Time**, y **Cumulative Layout Shift**.

> Nota: La parte de **Next.js** está actualmente en desarrollo. La estructura y el estilo están siendo replicados a partir de las versiones de React para permitir la comparación directa cuando se complete.

---

## Requisitos

* Node.js >= 20.19 (recomendado: 24)
* npm >= 11

---

## Backend

El backend se ha implementado usando **JSON Server** para simplificar y no depender de un backend real.
Se ha añadido un **delay de 800ms** en las llamadas para simular el tiempo de respuesta de un servidor real.

### Scripts para el backend

```bash
# Levantar JSON Server
cd backend-jsonserver && npm install && npm run api
```

> Esto levantará el servidor en `http://localhost:3001` sirviendo la colección de hoteles desde `db.json`.

Desde la carpeta backend-jsonserver  se pude hacer
```bash
npm run api
```

---

## Scripts disponibles (desde la raíz del proyecto)

```bash
# Levantar React Normal
npm run dev:react-normal

# Levantar React Optimizado
npm run dev:react-optimized

# Levantar Next Normal (en proceso)
npm run dev:next-normal

# Levantar Next Optimizado (en proceso)
npm run dev:next-optimized

# Levantar todos los proyectos a la vez
npm run dev:all

```

> Todos los scripts utilizan **concurrently** para ejecutar varios proyectos en paralelo.

---

## Instalación de dependencias

Antes de ejecutar los scripts, asegúrate de instalar las dependencias en cada subcarpeta:

```bash
cd frontend-react/normal && npm install
cd frontend-react/optimizado && npm install
cd frontend-next/normal && npm install
cd frontend-next/optimizado && npm install
cd backend-jsonserver && npm install
```



