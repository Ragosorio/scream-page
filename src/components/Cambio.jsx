import { useState, useEffect } from "react";

export function Cambio() {
  const [loading, setLoading] = useState(true);
  const carganding = (
    <div class="h-60 w-60 flex justify-center items-center flex-col">
      <img src="no-way.gif" alt="Gato estelar" />
      <div class="text-xl mr-4 font-medium leading-none text-center text-white rounded-full animate-pulse">
        cargando...
      </div>
    </div>
  );
  const video = (<p>Hola</p>)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
	<>
		{loading ? carganding : video}	
	</>
)
}
