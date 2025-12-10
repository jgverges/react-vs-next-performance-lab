  export const getOptimizedImage = (url: string, width:number) => {
    // Añadimos parámetros a la URL de Unsplash para optimización
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}w=${width}&q=80&auto=format&fit=crop`;
  };