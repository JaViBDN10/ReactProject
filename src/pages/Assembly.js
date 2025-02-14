import React from 'react';
import ensamblaje from '../img/ensamblaje.webp';
import refrigeracion from '../img/refrigeracion.webp';
import cableado from '../img/cableado.webp';

const Assembly = () => {
  return (
    <div className='pages'>
      <h1>Montaje del PC Gaming</h1>
      
      <h2>1.- Preparación de los Componentes</h2>
      <p>Después de haber pasado por caja y habernos dejado los ahorros de toda nuestra vida, somo estudiantes no tenemos ahorros...
        esperamos impacientemenete a que nos lleguen todos los componentes.<br></br>
        Una vez hemos recibido todo, nos aseguramos que tenemos todas las herramientas nececsarias para el montaje.<br></br>
        <strong>Herramientas básicas:</strong>
          <ul style={{ marginLeft:"100px" }}>
            <li>🔧 <strong>Destornillador Phillips (#2)</strong> – Para atornillar la mayoría de los componentes.</li>
            <li>🪛 <strong>Destornillador de precisión</strong> – Útil para tornillos más pequeños (M.2, disipadores, etc.).</li>
            <li>🔗 <strong>Pinzas o alicates de punta fina</strong> – Para sujetar cables o colocar pequeños conectores.</li>
            <li>📎 <strong>Bridas o velcro para cables</strong> – Ayudan con la gestión del cableado.</li>
            <li>🎟️ <strong>Pasta térmica</strong> (si el disipador no la trae preaplicada) – Mejora la transferencia de calor entre la CPU y el disipador.</li>
            <li>🔦 <strong>Linterna o luz LED</strong> – Para ver mejor dentro del gabinete.</li>
            <li>🔍 <strong>Pulsera o tapete antiestático</strong> (opcional pero recomendado) – Para evitar daños por electricidad estática.</li>
          </ul>
        </p>
      <img src={ensamblaje} className='ensamblaje' alt='Preparación del montaje' />
      
      <h2>2.- Instalación del Procesador y la Memoria RAM</h2>
      <p>Primero de todo limpiaremos bien la mesa y colocaremos un mantel antiestático para evitar posibles cargas electroestáticas.
      Cogeremos la placa base y miraremos que estén los anclajes de AMD para instalar la CPU. Una vez hecha esa comprovación colocaremos
      el <strong>Ryzen 7 9800X3D</strong> en el socket AM5 de la placa base y aseguramos los módulos <strong>DDR5</strong> en sus respectivos Slots.
      </p>
      
      <h2>3.- Instalación del Almacenamiento</h2>
      <p>Ya que nuestro almacenamiento es un M.2 y va conectado a la placa base, aprovecharemos también antes de instalart la placa en la torre
      a conectar nuestro <strong> Samsung 990 PRO 4TB</strong> en su ranura M.2 y lo aseguramos con su tornillo correspondiente.</p>
      
      <h2>4.- Montaje de la Placa Base en la Torre</h2>
      <p>Una vez tenemos los componentes anteriores ya instalados en la placa es hora de fijar nuestra <strong> ASUS ROG STRIX X870E-E</strong> en la 
      <strong>Corsair 6500X RGB</strong> asegurando una correcta alineación con los separadores.</p>
      
      <h2>5.- Instalación de la Refrigeración Líquida</h2>
      <p>Una vez tenemos la placa correctamente montada en noestro cabinete, aplicamos la pasta térmica en el microprocesador, hay varias maneras de aplicar 
      la pasta, yo personalmente la distrubuyo en 5 puntos. Colocamos el bloque de refrigeración en la CPU, anclamos los tornillos y montamos el radiador 
      de 360mm en la parte superior de la caja. En este punto podemos aprovechar para instalar los demás ventiladores en el cabinete y hacer las conexiones a la placa
      de la líquida.</p>
      <img src={refrigeracion} className='refrigeracion' alt='Instalación de refrigeración líquida' />
      
      <h2>6.- Instalación de la Tarjeta Gráfica</h2>
      <p>Tenemos todo practicamente conectado, ahora nos falta lo más importante, insertamos la <strong>RTX 4080 Super</strong> en la ranura PCIe y aseguramos con 
      tornillos para evitar movimientos.</p>
      
      <h2>7.- Conexión de la Fuente de Alimentación</h2>
      <p>Ahora nos falta suministrar energía a todos nuestro sistema, montamos la <strong> Thermaltake TOUGHPOWER PF3 1200W</strong> y conectamos los cables de alimentación a cada componente.</p>
      
      <h2>8.- Gestión del Cableado</h2>
      <p>Organizamos y ocultamos los cables para mejorar el flujo de aire y la estética interna.</p>
      <img src={cableado} className='cableado' alt='Gestión del cableado' />
      
    
      <h2>9.- Pruebas y Configuración Inicial</h2>
      <p>Encendemos el PC, revisamos la BIOS y configuramos los parámetros necesarios antes de instalar el sistema operativo.</p>
      
      <div style={{ margin: '20px', fontSize: '22px' }}>
        <a className='App-link' href='/Testing' rel='noopener noreferrer'>Ir a Testeo del PC</a>
      </div>
    </div>
  );
};

export default Assembly;