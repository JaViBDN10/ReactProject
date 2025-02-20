import React from 'react';
import cerdito from '../img/piggy.png';
import javier from '../img/Javier_montando_PC.webp';
import confetti from "canvas-confetti";


const Pcgaming = () => {
  const launchFireworks = () => {
    const duration = 3 * 1000; // 3 segundos
    const animationEnd = Date.now() + duration;
  
    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        return clearInterval(interval);
      }
      confetti({
        particleCount: 100,
        spread: 160,
        startVelocity: 30,
        origin: { x: Math.random(), y: Math.random() * 0.5 }
      });
    }, 500);
  };
  return (
    <>
    <div className='pages'>
    
      <h1>Elección del PC Gaming</h1>
    <p>Hemos acabado el ciclo de ASIX <strong>(Pulsa al cerdito para celebrar el final del módulo!)</strong>, hemos <strong>sufrido</strong> mucho y, por lo tanto, nos merecemos un capricho. Es por ello que hemos decidido romper nuestra  
        <strong> PiggyBank</strong> y hacernos un regalo a nosotros mismos: construir un <strong>PC Gaming</strong> de alto rendimiento.</p>
    <img onClick={launchFireworks} src={cerdito} className="cerdito" alt="Cerdito" />
    <p>El mundo del hardware evoluciona constantemente, y elegir los <strong>componentes adecuados</strong> es clave para conseguir el máximo rendimiento en videojuegos. 
        Desde la <strong>tarjeta gráfica</strong> hasta la fuente de alimentación, cada pieza juega un papel fundamental en el equilibrio del sistema. No basta con tener la 
        mejor GPU si el procesador no está a la altura o si el sistema de refrigeración no es suficiente para mantener temperaturas óptimas.</p>
        <img src={javier} className="javier" alt="Javier montando el PC super concentrado" />
    <p>Además, al montar nuestro propio PC no solo obtenemos un equipo a medida, sino que también aprendemos sobre compatibilidad, ensamblaje y optimización del hardware. 
        En este proyecto, no solo vamos a seleccionar los mejores componentes, sino que también explicaremos el proceso de montaje y configuración para que cualquiera pueda 
        replicarlo con éxito.</p>
    <p>En el siguiente apartado, analizaremos en detalle cada componente y el por qué de su elección, asegurándonos de que nuestro PC Gaming esté preparado para cualquier 
        desafío.</p>
    </div>
    <div style={{ margin:"20px" , fontSize:"22px"}}><a className="App-link" href="/Components" rel="noopener noreferrer">Ir a Componentes</a></div>
    </>
  );
};

export default Pcgaming;
