import React from 'react';

const Testing = () => {
  return (
    <div className='pages'>
      <h1>Testeo del PC Gaming</h1>
      
      <h2>1.- Comprobación de Encendido</h2>
      <p>Antes de cerrar el gabinete, realizamos una prueba rápida conectando la fuente de alimentación y encendiendo el PC.
      Verificamos que los ventiladores giren, la iluminación funcione y no haya errores visibles.</p>

      <h2>2.- Acceso a la BIOS</h2>
      <p>Entramos en la BIOS presionando <strong>DEL</strong> o <strong>F2</strong> al arrancar. Revisamos:
        <ul style={{ marginLeft: "100px" }}>
          <li>✔️ Temperaturas correctas de CPU y GPU.</li>
          <li>✔️ La RAM es detectada a su velocidad correcta.</li>
          <li>✔️ El almacenamiento M.2 o SSD aparece en la lista de dispositivos.</li>
          <li>✔️ Configuración de arranque adecuada.</li>
        </ul>
      </p>

      <h2>3.- Instalación del Sistema Operativo</h2>
      <p>Desde un USB booteable, instalamos <strong>Windows 11</strong> o la distribución de Linux elegida.</p>

      <h2>4.- Instalación de Drivers</h2>
      <p>Una vez iniciado el sistema, descargamos e instalamos los drivers más recientes de:
        <ul style={{ marginLeft: "100px" }}>
          <li>🔹 Tarjeta madre (chipset, LAN, audio).</li>
          <li>🔹 Tarjeta gráfica (NVIDIA/AMD).</li>
          <li>🔹 Dispositivos adicionales (teclado, mouse, etc.).</li>
        </ul>
      </p>

      <h2>5.- Pruebas de Rendimiento</h2>
      <p>Para asegurarnos de que todo funciona correctamente, ejecutamos:
        <ul style={{ marginLeft: "100px" }}>
          <li>⚡ <strong>CPU-Z</strong> y <strong>HWMonitor</strong> para ver temperaturas y voltajes.</li>
          <li>⚡ <strong>CrystalDiskMark</strong> para probar la velocidad del SSD.</li>
          <li>⚡ <strong>Cinebench</strong> para evaluar el rendimiento del procesador.</li>
          <li>⚡ <strong>3DMark</strong> para medir el rendimiento de la GPU.</li>
          <li>⚡ <strong>MemTest86</strong> para comprobar la estabilidad de la RAM.</li>
        </ul>
      </p>
      
      <h2>6.- Prueba en Juegos</h2>
      <p>Ejecutamos juegos exigentes como <strong>Cyberpunk 2077</strong> o <strong>Red Dead Redemption 2</strong> para verificar el rendimiento real de la GPU y CPU.</p>

      <h2>7.- Monitoreo y Ajustes Finales</h2>
      <p>Si las temperaturas o el rendimiento no son óptimos, ajustamos la curva de ventiladores en la BIOS o con software como <strong>MSI Afterburner</strong>.</p>

      <div style={{ margin: '20px', fontSize: '22px' }}>
        <a className='App-link' href='/Pcgaming' rel='noopener noreferrer'>Volver al Montaje del PC</a>
      </div>
    </div>
  );
};

export default Testing;