import React, { useState } from "react";
import Modal from "react-modal";
import rtx4080 from '../img/4080.png';
import ryzen9700x from '../img/9700x.png';
import x870 from '../img/x870.png';
import asusRogRyujin from '../img/asus-rog-ryujin.png';
import kingstonFury from '../img/kingston-fury.png';
import corsair6500x from '../img/corsair-6500x.png';
import Thermaltake1200w from '../img/thermaltake1200w.png';
import samsung990 from '../img/samsung-990.png';

Modal.setAppElement("#root"); // Necesario para accesibilidad

const Details = () => {
  const [IsOpenGrafica, setIsOpenGrafica] = useState(false);
  const [IsOpenCPU, setIsOpenCPU] = useState(false);
  const [IsOpenPlaca, setIsOpenPlaca] = useState(false);
  const [IsOpenMemoria, setIsOpenMemoria] = useState(false);
  const [IsOpenRefrigeracion, setIsOpenRefrigeracion] = useState(false);
  const [IsOpenTorre, setIsOpenTorre] = useState(false);
  const [IsOpenFuente, setIsOpenFuente] = useState(false);
  const [IsOpenAlmacenamiento, setIsOpenAlmacenamiento] = useState(false);

  return (
    <div className="pages">
      <h1 className="h1pages">Detalles de los componentes</h1>
      <button onClick={() => setIsOpenGrafica(true)}>Tarjeta gráfica: Nvidia RTX 4080 Super 16Gb</button>
      <button onClick={() => setIsOpenCPU(true)}>Microprocesador (CPU): AMD Ryzen 7 9800X3D</button>
      <button onClick={() => setIsOpenPlaca(true)}>Placa Base: ASUS ROG STRIX X870E-E GAMING WIFI</button>
      <button onClick={() => setIsOpenMemoria(true)}>Memorias: Kingston FURY Beast RGB DDR5 5600MHz 128GB (4x32GB) CL40</button>
      <button onClick={() => setIsOpenRefrigeracion(true)}>Refrigeración: ASUS ROG Ryujin III 360 ARGB Extreme Kit de Refrigeración Líquida (360mm)</button>
      <button onClick={() => setIsOpenTorre(true)}>Caja/Torre: Corsair 6500X RGB Semitorre ATX Doble Cristal Templado USB-C Blanca</button>
      <button onClick={() => setIsOpenFuente(true)}>Fuente de Alimentación: Thermaltake TOUGHPOWER PF3 1200W 80 Plus Platinum Full Modular</button>
      <button onClick={() => setIsOpenAlmacenamiento(true)}>Almacenamiento: Samsung 990 PRO 4TB SSD PCIe 4.0 NVMe M.2</button>
      <button onClick={() => setIsOpenCPU(true)}>Microprocesador (CPU): AMD Ryzen 7 9800X3D</button>

      {/* Modal para Tarjeta Gráfica */}
      <Modal
        isOpen={IsOpenGrafica}
        onRequestClose={() => setIsOpenGrafica(false)}
        contentLabel="Detalles de la Tarjeta Gráfica"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={rtx4080} className="RTX4080" alt="RTX 4080 SUPER" />
            <h1>Nvidia RTX 4080 Super 16Gb</h1>
          </div>
          <p>La tarjeta gráfica sería compatible con cualquier sistema, tanto AMD como Intel, lo único que tenemos que tener en cuenta para
            que sea compatible con nuestro sistema es el conector, en nuestro caso PCIExpress 16x, compatible con nuestra placa base y 
            hoy por hoy con todas las placas bases de gama alta sobretodo dedicadas al gaming.
          </p>
          <span><strong>Memoria:</strong> 16GB GDDR6X</span>
          <span><strong>Núcleos CUDA:</strong> 10240</span>
          <span><strong>Velocidad de reloj:</strong> 2.55 GHz</span>
          <span><strong>Consumo:</strong> 320W</span>
          <a style={{ textAlign:"right" }} href="https://www.pccomponentes.com/asus-proart-geforce-rtx-4080-super-16gb-oc-edition-gddr6x-dlss3" target="_blank" rel="noopener noreferrer">
              Ver más detalles de la RTX 4080 Super
          </a>

          <button onClick={() => setIsOpenGrafica(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para Microprocesador */}
      <Modal
        isOpen={IsOpenCPU}
        onRequestClose={() => setIsOpenCPU(false)}
        contentLabel="Detalles del Microprocesador"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={ryzen9700x} className="ryzen9700x" alt="AMD Ryzen 7 9800X3D" />
            <h1>AMD Ryzen 7 9800X3D</h1>
          </div>
          <p><strong>Número de núcleos:</strong> 8</p>
          <p><strong>Número de hilos:</strong> 16</p>
          <p><strong>Frecuencia base:</strong> 3.8 GHz</p>
          <p><strong>Frecuencia turbo:</strong> 5.2 GHz</p>
          <p><strong>Consumo:</strong> 120W</p>
          <button onClick={() => setIsOpenCPU(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para la placa */}
      <Modal
        isOpen={IsOpenPlaca}
        onRequestClose={() => setIsOpenPlaca(false)}
        contentLabel="Detalles de la placa base"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={x870} className="x870" alt="ROG Strix X870E-E Gaming WiFi" />
            <h1>ASUS ROG STRIX X870E-E GAMING WIFI</h1>
          </div>
          
          <button onClick={() => setIsOpenPlaca(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para la memoria */}
      <Modal
        isOpen={IsOpenMemoria}
        onRequestClose={() => setIsOpenMemoria(false)}
        contentLabel="Detalles de la memoria"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={kingstonFury} className="kingstonFury" alt="Kingston FURY Beast RGB DDR5 5600MHz 128GB 4x32GB CL40" />
            <h1>Kingston FURY Beast RGB DDR5 5600MHz 128GB (4x32GB) CL40</h1>
          </div>
          
          <button onClick={() => setIsOpenMemoria(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para la refrigeracion */}
      <Modal
        isOpen={IsOpenRefrigeracion}
        onRequestClose={() => setIsOpenRefrigeracion(false)}
        contentLabel="Detalles de la memoria"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={asusRogRyujin} className="asusRogRyujin" alt="ASUS ROG Ryujin III 360 ARGB Extreme Kit Refrigeración Líquida 360mm" />
            <h1>ASUS ROG Ryujin III 360 ARGB Extreme Kit de Refrigeración Líquida (360mm)</h1>
          </div>
          
          <button onClick={() => setIsOpenRefrigeracion(false)}>Cerrar</button>
        </div>
      </Modal>
      
      {/* Modal para la refrigeracion */}
      <Modal
        isOpen={IsOpenTorre}
        onRequestClose={() => setIsOpenTorre(false)}
        contentLabel="Detalles de la memoria"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={corsair6500x} className="corsair6500x" alt="Corsair 6500X RGB Semitorre ATX Doble Cristal Templado USB-C Blanca" />
            <h1>Corsair 6500X RGB Semitorre ATX Doble Cristal Templado USB-C Blanca</h1>
          </div>
          
          <button onClick={() => setIsOpenTorre(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para la fuente */}
      <Modal
        isOpen={IsOpenFuente}
        onRequestClose={() => setIsOpenFuente(false)}
        contentLabel="Detalles de la memoria"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={Thermaltake1200w} className="Thermaltake1200w" alt="Thermaltake TOUGHPOWER PF3 1200W 80 Plus Platinum Full Modular" />
            <h1>Thermaltake TOUGHPOWER PF3 1200W 80 Plus Platinum Full Modular</h1>
          </div>
          
          <button onClick={() => setIsOpenFuente(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para la fuente */}
      <Modal
        isOpen={IsOpenAlmacenamiento}
        onRequestClose={() => setIsOpenAlmacenamiento(false)}
        contentLabel="Detalles de la memoria"
      >
        <div className="pages">
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "20% 80%", 
            alignItems: "center", 
            justifyItems: "center", 
            width: "100%", 
            height: "100%", 
            gap: "20px" 
          }}>
            <img style={{ width: "200px", height: "200px" }} src={samsung990} className="samsung990" alt="Samsung 990 PRO 4TB SSD PCIe 4.0 NVMe M.2" />
            <h1>Samsung 990 PRO 4TB SSD PCIe 4.0 NVMe M.2</h1>
          </div>
          
          <button onClick={() => setIsOpenAlmacenamiento(false)}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
};

export default Details;

