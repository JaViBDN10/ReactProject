import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
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
  
  const handleDownload = () => {
  const invoiceData = [
    ["Producto", "Cantidad", "Precio Unitario", "Subtotal", "IVA (21%)", "Total con IVA"],
    ["Procesador AMD Ryzen 7", 1, 300, "=B2*C2", "=D2*0.21", "=D2+E2"],
    ["Tarjeta Gráfica RTX 4070", 1, 600, "=B3*C3", "=D3*0.21", "=D3+E3"],
    ["Memoria RAM 16GB", 2, 80, "=B4*C4", "=D4*0.21", "=D4+E4"],
    ["Total", "", "", "=SUM(D2:D4)", "=SUM(E2:E4)", "=SUM(F2:F4)"], 
  ];

  const ws = XLSX.utils.aoa_to_sheet(invoiceData);
  
  // Aplicar fórmulas a las celdas
  ws["D2"].f = "B2*C2";
  ws["E2"].f = "D2*0.21";
  ws["F2"].f = "D2+E2";

  ws["D3"].f = "B3*C3";
  ws["E3"].f = "D3*0.21";
  ws["F3"].f = "D3+E3";

  ws["D4"].f = "B4*C4";
  ws["E4"].f = "D4*0.21";
  ws["F4"].f = "D4+E4";

  ws["D5"].f = "SUM(D2:D4)";
  ws["E5"].f = "SUM(E2:E4)";
  ws["F5"].f = "SUM(F2:F4)";

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Factura");

  // Generar archivo y descargarlo
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  saveAs(data, "Factura_PC_Gaming.xlsx");
  };
  return (
    <>
    <div className="pages">
    <button onClick={handleDownload} className="px-4 py-2 bg-blue-500 text-white rounded">
          Descargar Factura en Excel
      </button>
      <h1 className="h1pages">Detalles de los componentes</h1>
      <button onClick={() => setIsOpenGrafica(true)}>Tarjeta gráfica: Nvidia RTX 4080 Super 16Gb</button>
      <button onClick={() => setIsOpenCPU(true)}>Microprocesador (CPU): AMD Ryzen 7 9800X3D</button>
      <button onClick={() => setIsOpenPlaca(true)}>Placa Base: ASUS ROG STRIX X870E-E GAMING WIFI</button>
      <button onClick={() => setIsOpenMemoria(true)}>Memorias: Kingston FURY Beast RGB DDR5 5600MHz 128GB (4x32GB) CL40</button>
      <button onClick={() => setIsOpenRefrigeracion(true)}>Refrigeración: ASUS ROG Ryujin III 360 ARGB Extreme Kit de Refrigeración Líquida (360mm)</button>
      <button onClick={() => setIsOpenTorre(true)}>Caja/Torre: Corsair 6500X RGB Semitorre ATX Doble Cristal Templado USB-C Blanca</button>
      <button onClick={() => setIsOpenFuente(true)}>Fuente de Alimentación: Thermaltake TOUGHPOWER PF3 1200W 80 Plus Platinum Full Modular</button>
      <button onClick={() => setIsOpenAlmacenamiento(true)}>Almacenamiento: Samsung 990 PRO 4TB SSD PCIe 4.0 NVMe M.2</button>

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
          <p>La <strong>RTX 4080 Super</strong> sería compatible con cualquier sistema, tanto AMD como Intel, lo único que tenemos que tener en cuenta para
            que sea compatible con nuestro sistema es el conector, en nuestro caso <strong>PCI Express 4.0</strong>, compatible con nuestra placa base y 
            hoy por hoy con todas las placas bases de gama alta sobretodo dedicadas al gaming.
          </p>
          <span><strong>Memoria:</strong> 16GB GDDR6X</span>
          <span><strong>Núcleos CUDA:</strong> 10240</span>
          <span><strong>Velocidad de reloj:</strong> 2.55 GHz</span>
          <span><strong>Consumo:</strong> 320W</span>
          <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio: 1473,56€</strong>
          </p>
          <a style={{ color:" #007bff" }} href="https://www.pccomponentes.com/asus-proart-geforce-rtx-4080-super-16gb-oc-edition-gddr6x-dlss3" target="_blank" rel="noopener noreferrer">
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
          <p>Hemos decidido montar un sitema de AMD, AMD5 para ser más concretos, por ello nuestra CPU tenía que ser el <strong>AMD Ryzen 7 9800X3D</strong>. Para Gaming no
            es tan importante el número de nucleos sino que sean rápidos, es por eso que hemos elegido un Ryzen 7 (8 nucleos) en lugar 
            de un Ryzen 9 (12 nucleos). Gracias a su tecnología <strong>3D V-Cache</strong>, que aumenta significativamente la cantidad de caché L3 (96MB)
            reduce la dependencia de la RAM, lo que acelera el acceso a datos en juegos. Todo esto lo convierte en la mejor elección para
            nuestro sistema.
          </p>
          
          <span><strong>Número de núcleos:</strong> 8</span>
          <span><strong>Número de hilos:</strong> 16</span>
          <span><strong>Frecuencia base:</strong> 3.8 GHz</span>
          <span><strong>Frecuencia turbo:</strong> 5.2 GHz</span>
          <span><strong>Consumo:</strong> 120W</span>
          <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio: 569,99€</strong>
          </p>
          <a style={{ color:" #007bff" }} href="https://www.pccomponentes.com/procesador-amd-ryzen-7-9800x3d-47-52ghz" target="_blank" rel="noopener noreferrer">
              Ver más detalles del Ryzen 7 9800X3D
          </a>
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
            <p>
              Para complementar nuestro procesador AMD Ryzen 7 9800X3D, hemos elegido la 
              <strong> ASUS ROG STRIX X870E-E GAMING WIFI</strong>. Esta placa base ofrece una 
              excelente estabilidad, compatibilidad con memorias DDR5 y un VRM de alta calidad 
              que permite un rendimiento óptimo en gaming y tareas exigentes. Además, cuenta con 
              soporte para PCIe 5.0, lo que garantiza la máxima velocidad en almacenamiento y tarjetas gráficas. 
              Su conectividad avanzada con WiFi 7 y múltiples puertos USB hace que sea una opción 
              ideal para cualquier setup gaming de alto rendimiento.
            </p>
            
            <span><strong>Socket:</strong> AM5</span>
            <span><strong>Chipset:</strong> AMD X870E</span>
            <span><strong>Memoria RAM:</strong> DDR5, hasta 192GB</span>
            <span><strong>PCIe:</strong> PCIe 5.0 para GPU y SSD</span>
            <span><strong>Conectividad:</strong> WiFi 7, Bluetooth 5.3</span>
            <span><strong>Puertos USB:</strong> USB 4.0, USB-C</span>
            <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio: 634,87€</strong>
          </p>
            
            <a style={{ color:" #007bff" }}
              href="https://www.pccomponentes.com/placa-base-asus-rog-strix-x870e-e-gaming-wifi"
              target="_blank"
              rel="noopener noreferrer"> Ver más detalles de la ASUS ROG STRIX X870E-E GAMING WIFI
            </a>
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
          <p>
            Para garantizar el mejor rendimiento en nuestro sistema, hemos optado por la 
            <strong> Kingston FURY Beast RGB DDR5</strong>. Esta memoria RAM DDR5 ofrece 
            velocidades ultrarrápidas de <strong>5600MHz</strong>, proporcionando una 
            mayor eficiencia energética y menor latencia en comparación con DDR4. Su 
            diseño con <strong>iluminación RGB personalizable</strong> aporta un toque 
            estético increíble a nuestro setup, mientras que su compatibilidad con 
            perfiles XMP 3.0 facilita el overclocking automático sin complicaciones.
          </p>

          <span><strong>Capacidad:</strong> 128GB (4x32GB)</span>
          <span><strong>Tipo:</strong> DDR5</span>
          <span><strong>Velocidad:</strong> 5600MHz</span>
          <span><strong>Latencia:</strong> CL40</span>
          <span><strong>Voltaje:</strong> 1.25V</span>
          <span><strong>Iluminación RGB:</strong> Sí, compatible con software de personalización</span>
          <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio:478,24€9</strong>
          </p>

          <a style={{ color:" #007bff" }}
            href="https://www.pccomponentes.com/kingston-fury-beast-rgb-ddr5-5600mhz-128gb-4x32gb-cl40"
            target="_blank"
            rel="noopener noreferrer">Ver más detalles de la Kingston FURY Beast RGB DDR5 5600MHz 128GB
          </a>
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
          <p>
            Para mantener nuestro sistema a temperaturas óptimas, hemos elegido el 
            <strong> ASUS ROG Ryujin III 360 ARGB Extreme</strong>, una de las mejores 
            soluciones de refrigeración líquida del mercado. Este sistema AIO de 360mm 
            no solo ofrece una disipación de calor excepcional gracias a su 
            <strong>radiador de triple ventilador</strong>, sino que también incluye 
            una <strong>pantalla LCD de 3.5”</strong> personalizable para monitorizar 
            temperaturas en tiempo real y mostrar gráficos personalizados.
          </p>

          <span><strong>Tipo:</strong> Refrigeración líquida (AIO)</span>
          <span><strong>Tamaño del radiador:</strong> 360mm</span>
          <span><strong>Ventiladores:</strong> 3x 120mm ROG ARGB</span>
          <span><strong>Pantalla LCD:</strong> 3.5” personalizable</span>
          <span><strong>Compatibilidad:</strong> AMD AM5/AM4, Intel LGA1700/1200/115x</span>
          <span><strong>Iluminación RGB:</strong> Sí, compatible con Aura Sync</span>
          <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio: 496,00€</strong>
          </p>

          <a
            style={{ color:" #007bff" }}
            href="https://www.pccomponentes.com/asus-rog-ryujin-iii-360-argb-extreme-kit-refrigeracion-liquida-360mm-negro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más detalles del ASUS ROG Ryujin III 360 ARGB Extreme
          </a>
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
          <p>
              Para alojar nuestro sistema hemos elegido la <strong> Corsair 6500X RGB</strong>, 
              una caja semitorre con un diseño premium y elegante en color blanco. Su 
              <strong>doble panel de cristal templado</strong> permite mostrar los componentes 
              con una estética limpia y moderna, mientras que su sistema de 
              <strong>iluminación RGB integrada</strong> añade un toque personalizable a la 
              build. Además, cuenta con una excelente gestión del flujo de aire y compatibilidad 
              con refrigeración líquida.
            </p>

            <span><strong>Formato:</strong> Semitorre ATX</span>
            <span><strong>Material:</strong> Acero y cristal templado</span>
            <span><strong>Panel lateral:</strong> Doble cristal templado</span>
            <span><strong>Iluminación:</strong> RGB integrada</span>
            <span><strong>Puertos frontales:</strong> 2x USB 3.1, 1x USB-C, Audio</span>
            <span><strong>Compatibilidad:</strong> ATX, Micro-ATX, Mini-ITX</span>
            <span><strong>Gestión del cableado:</strong> Sí, optimizada</span>
            <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio: 243,65€</strong>
          </p>

            <a
              style={{ color:" #007bff" }}
              href="https://www.pccomponentes.com/corsair-6500x-rgb-semitorre-atx-doble-cristal-templado-usb-c-blanca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más detalles de la Corsair 6500X RGB Blanca
            </a>
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
          <p>
              Para alimentar tu sistema con total fiabilidad y eficiencia, la <strong> Thermaltake TOUGHPOWER PF3 1200W</strong> es una fuente 
              de alimentación de alta gama que garantiza un rendimiento excepcional. Con una certificación <strong>80 Plus Platinum</strong>, esta fuente ofrece 
              una eficiencia energética superior, lo que se traduce en menor consumo y menor generación de calor. Su diseño <strong>full modular</strong> facilita una 
              instalación más ordenada, permitiendo conectar solo los cables que realmente necesitas para un flujo de aire optimizado. 
              Además, su potente capacidad de <strong>1200W</strong> asegura que tu PC tendrá energía suficiente incluso en configuraciones de alto rendimiento.
          </p>

          <span><strong>Potencia:</strong> 1200W</span>
          <span><strong>Certificación:</strong> 80 Plus Platinum</span>
          <span><strong>Tipo de cables:</strong> Full Modular</span>
          <span><strong>Ventilador:</strong> Ventilador de 140mm con modo de bajo ruido</span>
          <span><strong>Protección:</strong> OVP, UVP, OCP, SCP, OTP</span>
          <span><strong>Conectores:</strong> 24-pin ATX, 4+4-pin CPU, 6+2 PCI-E, SATA, Molex</span>
          <span><strong>Garantía:</strong> 10 años</span>
          <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio: 299,31€</strong>
          </p>

          <a
            style={{ color:" #007bff" }}
            href="https://www.pccomponentes.com/thermaltake-toughpower-pf3-1200w-80-plus-platinum-full-modular"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más detalles de la Thermaltake TOUGHPOWER PF3 1200W
          </a>
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
          <p>
              El <strong> Samsung 990 PRO 4TB SSD</strong> es la solución ideal para aquellos que buscan un rendimiento de almacenamiento sobresaliente. 
              Equipado con la tecnología <strong>PCIe 4.0</strong> y <strong>NVMe M.2</strong>, este SSD ofrece velocidades de lectura y escritura ultrarrápidas, 
              llevando tu experiencia de uso y carga de datos a un nuevo nivel. Con una capacidad de <strong>4TB</strong>, tendrás más que suficiente espacio para
               almacenar tus archivos más pesados, juegos, o proyectos profesionales sin sacrificar velocidad ni rendimiento. Además, su alta durabilidad y fiabilidad 
               hacen de este SSD una opción confiable para los usuarios más exigentes.
          </p>

          <span><strong>Capacidad:</strong> 4TB</span>
          <span><strong>Interfaz:</strong> PCIe 4.0 NVMe M.2</span>
          <span><strong>Velocidades de lectura:</strong> Hasta 7,450 MB/s</span>
          <span><strong>Velocidades de escritura:</strong> Hasta 6,900 MB/s</span>
          <span><strong>Resistencia:</strong> Hasta 2,400 TBW (Terabytes escritos)</span>
          <span><strong>Garantía:</strong> 5 años</span>
          <span><strong>Controlador:</strong> El controlador Elpis de Samsung</span>
          <p style={{ fontSize: "1.5em", color:" #ff4d4d", fontWeight: "bold", margintop: "10px"}}>
              <strong>Precio: 329,95€</strong>
          </p>

          <a
            style={{ color:" #007bff" }}
            href="https://www.pccomponentes.com/samsung-990-pro-4tb-ssd-pcie-40-nvme-m2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más detalles del Samsung 990 PRO 4TB SSD
          </a>
          <button onClick={() => setIsOpenAlmacenamiento(false)}>Cerrar</button>
        </div>

      </Modal>
    </div>
    <div class="price-container">
      <h1>Precio total del montaje incluidos periféricos: 6472,5€</h1>
    </div>
    <div style={{ margin:"20px" , fontSize:"22px"}}><a className="App-link" href="/Assembly" rel="noopener noreferrer">Ir al Montaje</a></div>
    </>
  );
};

export default Details;
