# React vs Next Performance Lab

Proyecto de comparación de rendimiento entre React y Next.js en modo normal y optimizado.

## Requisitos

- Node.js >= 20.19 (recomendado: 24)
- npm >= 11
- nvm (opcional, para gestionar versiones de Node)

## Scripts disponibles (desde la raíz del proyecto)

```bash
# Levantar React Normal
npm run dev:react-normal

# Levantar React Optimizado
npm run dev:react-optimized

# Levantar Next Normal
npm run dev:next-normal

# Levantar Next Optimizado
npm run dev:next-optimized

# Levantar todos los proyectos a la vez
npm run dev:all
```

## 
Todos los scripts utilizan concurrently para ejecutar varios proyectos en paralelo.
Asegúrate de haber instalado las dependencias en cada subcarpeta antes de ejecutar los scripts:
```bash
cd frontend-react/normal && npm install
cd frontend-react/optimizado && npm install
cd frontend-next/normal && npm install
cd frontend-next/optimizado && npm install
```
