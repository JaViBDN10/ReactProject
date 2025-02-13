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
      <p>Colocamos con cuidado el <strong>Ryzen 7 9800X3D</strong> en el socket AM5 de la placa base y aseguramos los módulos <strong>DDR5</strong>.</p>
      
      <h2>3.- Montaje de la Placa Base en la Torre</h2>
      <p>Fijamos la <strong>ASUS ROG STRIX X870E-E</strong> en la <strong>Corsair 6500X RGB</strong> asegurando una correcta alineación con los separadores.</p>
      
      <h2>4.- Instalación de la Refrigeración Líquida</h2>
      <p>Colocamos el bloque de refrigeración en la CPU y montamos el radiador en la parte superior de la caja.</p>
      <img src={refrigeracion} className='refrigeracion' alt='Instalación de refrigeración líquida' />
      
      <h2>5.- Instalación de la Tarjeta Gráfica</h2>
      <p>Insertamos la <strong>RTX 4080 Super</strong> en la ranura PCIe y aseguramos con tornillos para evitar movimientos.</p>
      
      <h2>6.- Conexión de la Fuente de Alimentación</h2>
      <p>Montamos la <strong>Thermaltake TOUGHPOWER PF3 1200W</strong> y conectamos los cables de alimentación a cada componente.</p>
      
      <h2>7.- Gestión del Cableado</h2>
      <p>Organizamos y ocultamos los cables para mejorar el flujo de aire y la estética interna.</p>
      <img src={cableado} className='cableado' alt='Gestión del cableado' />
      
      <h2>8.- Instalación del Almacenamiento</h2>
      <p>Montamos el <strong>Samsung 990 PRO 4TB</strong> en su ranura M.2 y aseguramos con su tornillo correspondiente.</p>
      
      <h2>9.- Pruebas y Configuración Inicial</h2>
      <p>Encendemos el PC, revisamos la BIOS y configuramos los parámetros necesarios antes de instalar el sistema operativo.</p>
      
      <div style={{ margin: '20px', fontSize: '22px' }}>
        <a className='App-link' href='/Testing' rel='noopener noreferrer'>Ir a Testeo del PC</a>
      </div>
    </div>
  );
};

export default Assembly;