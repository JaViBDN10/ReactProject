import React from 'react';
import cableado from '../img/cableado.JPG';
import lola from '../img/lola.JPG';
import lola2 from '../img/lola2.JPG';
import ryzen7 from '../img/ryzen7.JPG';
import liquid from '../img/liquid.JPG';
import graficaInstall from '../img/graficaInstall.JPG';

const Assembly = () => {
  return (
    <div className='pages'>
      <h1>Montaje del PC Gaming</h1>
      
      <h2>1.- Preparación de los Componentes</h2>
      <p>Después de haber pasado por caja y habernos dejado los ahorros de toda nuestra vida, somo estudiantes no tenemos ahorros...
        esperamos impacientemenete a que nos lleguen todos los componentes.</p>
        <img src={lola} className='ensamblaje' alt='Lola checkeando que todo esté bien :)' />
        <p>Una vez hemos recibido todo, <strong>Lola </strong>se asegura que tenemos todos los componentes y herramientas nececsarias para el montaje.<br></br>
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
        <p>Lola: está todo correcto!!!, ya podemos empezar.</p>
      <img src={lola2} className='ensamblaje' alt='Lola pensando como montarlo todo...' />
      
      <h2>2.- Instalación del Procesador y la Memoria RAM</h2>
      <p>Primero de todo limpiaremos bien la mesa y colocaremos un mantel antiestático para evitar posibles cargas electroestáticas.
      Cogeremos la placa base y miraremos que estén los anclajes de AMD para instalar la CPU. Una vez hecha esa comprovación colocaremos
      el <strong>Ryzen 7 9800X3D</strong> en el socket AM5 de la placa base y aseguramos los módulos <strong>DDR5</strong> en sus respectivos Slots.
      </p>
      <img src={ryzen7} className='ensamblaje' alt='Lola pensando como montarlo todo...' />
      
      <h2>3.- Instalación del Almacenamiento</h2>
      <p>Ya que nuestro almacenamiento es un M.2 y va conectado a la placa base, aprovecharemos también antes de instalart la placa en la torre
      a conectar nuestro <strong> Samsung 990 PRO 4TB</strong> en su ranura M.2 y lo aseguramos con su tornillo correspondiente. En la imagen de arriba vemos que ya lo
      tenemos instalado.</p>
      
      <h2>4.- Montaje de la Placa Base en la Torre</h2>
      <p>Una vez tenemos los componentes anteriores ya instalados en la placa es hora de fijar nuestra <strong> ASUS ROG STRIX X870E-E</strong> en la 
      <strong>Corsair 6500X RGB</strong> asegurando una correcta alineación con los separadores.</p>
      
      <h2>5.- Instalación de la Refrigeración Líquida</h2>
      <p>Una vez tenemos la placa correctamente montada en noestro cabinete, aplicamos la pasta térmica en el microprocesador, hay varias maneras de aplicar 
      la pasta, yo personalmente la distrubuyo en 5 puntos. Colocamos el bloque de refrigeración en la CPU, anclamos los tornillos y montamos el radiador 
      de 360mm en la parte superior de la caja. En este punto podemos aprovechar para instalar los demás ventiladores en el cabinete y hacer las conexiones a la placa
      de la líquida.</p>
      <img src={liquid} className='refrigeracion' alt='Instalación de refrigeración líquida' />
      
      <h2>6.- Instalación de la Tarjeta Gráfica</h2>
      <p>Tenemos todo practicamente conectado, ahora nos falta lo más importante,Insertamos la <strong>RTX 4080 Super</strong> en la ranura PCIe, tiene que hacer el "click",
       y aseguramos con tornillos para evitar movimientos.</p>
       <img src={graficaInstall} className='cableado' alt='Instalación de la gráfica' />
      
      <h2>7.- Conexión de la Fuente de Alimentación</h2>
      <p>Montamos la <strong>Thermaltake TOUGHPOWER PF3 1200W</strong> y conectamos los cables de alimentación a cada componente. El conector de 24 pines de la placa, 
      2 conetores mas de 8 pines en la placa, la gráfica necesita 3 de 8 pines y si tuvieramos algún componente más.</p>
      
      <h2>8.- Gestión del Cableado</h2>
      <p>Nos encargamos de organizar y ocultar los cables de manera eficiente, asegurando un flujo de aire óptimo dentro del gabinete. 
        Esto no solo mejora la estética interna del equipo, sino que también contribuye a una mejor disipación del calor, 
        reduciendo la acumulación de polvo y evitando posibles interferencias con otros componentes.</p>
        <p>Como se ve en la imagen es como no debe hacerse, jajaja, así suelo dejar yo mis PCs, luego aprieto bien ya está...</p>
      <img src={cableado} className='cableado' alt='Gestión del cableado' />
      
    
      <h2>9.- Pruebas y Configuración Inicial</h2>
      <p>Una vez ensamblado el equipo, realizamos una primera puesta en marcha para verificar que todos los componentes funcionen correctamente. 
        Accedemos a la BIOS/UEFI para comprobar y ajustar parámetros clave como la velocidad de los ventiladores, 
        el reconocimiento del almacenamiento y la configuración de la memoria RAM. 
        Después de estas pruebas iniciales, dejamos el equipo listo para la instalación del sistema operativo.</p>
      
      <div style={{ margin: '20px', fontSize: '22px' }}>
        <a className='App-link' href='/Testing' rel='noopener noreferrer'>Ir a Testeo del PC</a>
      </div>
    </div>
  );
};

export default Assembly;