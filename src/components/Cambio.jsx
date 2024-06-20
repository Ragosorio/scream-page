import { useState, useEffect, useRef } from "react";

export function Cambio() {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mostrar, setMostrar] = useState(null); // Inicialmente no mostramos nada

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const ref = useRef(null);

  function handleClick() {
    setMostrar(video); // Cambiar a mostrar el video
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  const carganding = (
    <div className="h-60 w-60 flex justify-center items-center flex-col">
      <img src="no-way.gif" alt="Gato estelar" />
      <div className="text-xl mr-4 font-medium leading-none text-center text-white rounded-full animate-pulse">
        {loading ? "cargando..." : <button onClick={handleClick}>Tocame</button>}
      </div>
    </div>
  );

  const video = (
    <video
      ref={ref}
      autoPlay
      className="w-full h-dvh object-cover bg-black"
    >
      <source src="scream.mp4" type="video/mp4" />
    </video>
  );

  return <>{mostrar || carganding}</>; // Mostrar el contenido de 'mostrar' si está definido, de lo contrario mostrar 'carganding'
}
