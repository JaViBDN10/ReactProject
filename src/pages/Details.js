import * as XLSX from "xlsx";
import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import rtx4080 from '../img/4080.png';
import ryzen9700x from '../img/9700x.png';
import x870 from '../img/x870.png';
import asusRogRyujin from '../img/asus-rog-ryujin.png';
import kingstonFury from '../img/kingston-fury.png';
import corsair6500x from '../img/corsair-6500x.png';
import Thermaltake1200w from '../img/thermaltake1200w.png';
import samsung990 from '../img/samsung-990.png';
import asusRog32 from '../img/asus-rog-32.png';
import teclado from '../img/teclado.png';
import ratonGaming from '../img/raton-gaming.png';

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
  const [IsOpenMonitor, setIsOpenMonitor] = useState(false);
  const [IsOpenTeclado, setIsOpenTeclado] = useState(false);
  const [IsOpenRaton, setIsOpenRaton] = useState(false);
  const [GraphicUnits, setGraphicUnits]= useState(1);
  const [CPUUnits, setCPUUnits]= useState(1);
  const [PlacaUnits, setPlacaUnits]= useState(1);
  const [MemoriaUnits, setMemoriaUnits]= useState(4);
  const [RefrigeracionUnits, setRefrigeracionUnits]= useState(1);
  const [TorreUnits, setTorreUnits]= useState(1);
  const [FuenteUnits, setFuenteUnits]= useState(1);
  const [AlmacenamientoUnits, setAlmacenamientoUnits]= useState(1);
  const [MonitorUnits, setMonitorUnits]= useState(1);
  const [TecladoUnits, setTecladoUnits]= useState(1);
  const [RatonUnits, setRatonUnits]= useState(1);
  const [Total, setTotal]= useState(0);
  const precioGrafica=1473.56;
  const precioCPU=569.99;
  const precioPlaca=634.87;
  const precioMemoria=119.5;
  const precioRefrigeracion=496;
  const precioTorre=243.65;
  const precioFuente=299;
  const precioAlmacenamiento=329.95;
  const precioMonitor=1500;
  const precioTeclado=230;
  const precioRaton=160;
  
  const handleTotal = useCallback(() => {
    setTotal(precioGrafica * GraphicUnits +
      precioCPU * CPUUnits +
      precioPlaca * PlacaUnits +
      precioMemoria * MemoriaUnits +
      precioRefrigeracion * RefrigeracionUnits +
      precioTorre * TorreUnits +
      precioFuente * FuenteUnits +
      precioAlmacenamiento * AlmacenamientoUnits +
      precioMonitor * MonitorUnits +
      precioTeclado * TecladoUnits +
      precioRaton * RatonUnits
    );
  }, [GraphicUnits, CPUUnits, PlacaUnits, MemoriaUnits, RefrigeracionUnits, 
    TorreUnits, FuenteUnits, AlmacenamientoUnits, MonitorUnits, TecladoUnits, 
    RatonUnits]);
  
  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

  const handleGraphicUnits = (a) => {
    setGraphicUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleCPUUnits = (a) => {
    setCPUUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handlePlacaUnits = (a) => {
    setPlacaUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleMemoriaUnits = (a) => {
    setMemoriaUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleRefrigeracionUnits = (a) => {
    setRefrigeracionUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleTorreUnits = (a) => {
    setTorreUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleFuenteUnits = (a) => {
    setFuenteUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleAlmacenamientoUnits = (a) => {
    setAlmacenamientoUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleMonitorUnits = (a) => {
    setMonitorUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleTecladoUnits = (a) => {
    setTecladoUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  const handleRatonUnits = (a) => {
    setRatonUnits((prev) => (a === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };
  
  const handleDownload = () => {
    const invoiceData = [
      ["Producto", "Cantidad", "Precio Unitario", "Subtotal", "IVA (21%)", "Total con IVA"],
      ["Nvidia RTX 4080 Super 16GB", GraphicUnits, 1473.56, "=B2*C2", "=D2*0.21", "=D2+E2"],
      ["AMD Ryzen 7 9800X3D", CPUUnits, 569.99, "=B3*C3", "=D3*0.21", "=D3+E3"],
      ["ASUS ROG STRIX X870E-E GAMING", PlacaUnits, 634.87, "=B4*C4", "=D4*0.21", "=D4+E4"],
      ["Kingston FURY Beast RGB DDR5 5600MHz", MemoriaUnits, 119, "=B5*C5", "=D5*0.21", "=D5+E5"],
      ["ASUS ROG Ryujin III 360", RefrigeracionUnits, 496, "=B6*C6", "=D6*0.21", "=D6+E6"],
      ["Corsair 6500X RGB Semitorre ATX", TorreUnits, 243.65, "=B7*C7", "=D7*0.21", "=D7+E7"],
      ["Thermaltake TOUGHPOWER PF3 1200W", FuenteUnits, 299, "=B8*C8", "=D8*0.21", "=D8+E8"],
      ["Samsung 990 PRO 4TB SSD", AlmacenamientoUnits, 329.95, "=B9*C9", "=D9*0.21", "=D9+E9"],
      ["ASUS ROG Swift OLED PG32UCDP 32\"", MonitorUnits, 1500, "=B10*C10", "=D10*0.21", "=D10+E10"],
      ["Razer BlackWidow V4 Pro Gaming", TecladoUnits, 230, "=B11*C11", "=D11*0.21", "=D11+E11"],
      ["Razer Basilisk V3 Pro 35K", RatonUnits, 160, "=B12*C12", "=D12*0.21", "=D12+E12"],
      ["Subtotal", "", "", "=SUM(D2:D12)", "", ""],
      ["IVA (21%)", "", "", "", "=SUM(E2:E12)", ""],
      ["Total", "", "", "", "", "=D13+E14"]
    ];
  
    const ws = XLSX.utils.aoa_to_sheet(invoiceData);
  
    for (let i = 2; i <= 12; i++) {
      ws[`D${i}`] = { f: `B${i}*C${i}` };
      ws[`E${i}`] = { f: `D${i}*0.21` };
      ws[`F${i}`] = { f: `D${i}+E${i}` };
    }
  
    ws["D13"] = { f: "SUM(D2:D12)" };
    ws["E14"] = { f: "SUM(E2:E12)" };
    ws["F15"] = { f: "D13+E14" };
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Factura");
  
    XLSX.writeFile(wb, "Factura.xlsx");
  };
  return (
    <>
    <div className="pages">
      <h1 className="h1pages">Detalles de los componentes</h1>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenGrafica(true)}>
          Tarjeta gráfica: Nvidia RTX 4080 Super 16Gb
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{GraphicUnits}</button>
        <button onClick={() => handleGraphicUnits("+")} style={{ width:"40px", fontWeight:"bold" }}>+</button>
        <button onClick={() => handleGraphicUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenCPU(true)}>
        Microprocesador (CPU): AMD Ryzen 7 9800X3D
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{CPUUnits}</button>
        <button onClick={() => handleCPUUnits("+")} style={{ width:"40px", fontWeight:"bold" }}>+</button>
        <button onClick={() => handleCPUUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenPlaca(true)}>
        Placa Base: ASUS ROG STRIX X870E-E GAMING WIFI
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{PlacaUnits}</button>
        <button onClick={() => handlePlacaUnits("+")} style={{ width:"40px", fontWeight:"bold" }}>+</button>
        <button onClick={() => handlePlacaUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenMemoria(true)}>
        Memorias: Kingston FURY Beast RGB DDR5 5600MHz
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{MemoriaUnits}</button>
        <button onClick={() => handleMemoriaUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleMemoriaUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenRefrigeracion(true)}>
        Refrigeración: ASUS ROG Ryujin III 360 ARGB Extreme
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{RefrigeracionUnits}</button>
        <button onClick={() => handleRefrigeracionUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleRefrigeracionUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenTorre(true)}>
        Caja/Torre: Corsair 6500X RGB Semitorre ATX
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{TorreUnits}</button>
        <button onClick={() => handleTorreUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleTorreUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenFuente(true)}>
        Fuente de Alimentación: Thermaltake TOUGHPOWER PF3 1200W  
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{FuenteUnits}</button>
        <button onClick={() => handleFuenteUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleFuenteUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenAlmacenamiento(true)}>
        Almacenamiento: Samsung 990 PRO 4TB SSD
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{AlmacenamientoUnits}</button>
        <button onClick={() => handleAlmacenamientoUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleAlmacenamientoUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenMonitor(true)}>
        Monitor: ASUS ROG Swift OLED PG32UCDP 32"
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{MonitorUnits}</button>
        <button onClick={() => handleMonitorUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleMonitorUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenTeclado(true)}>
        Teclado: Razer BlackWidow V4 Pro Gaming RGB
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{TecladoUnits}</button>
        <button onClick={() => handleTecladoUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleTecladoUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>
      <div className="pages" style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent:"center"}}>
        <button onClick={() => setIsOpenRaton(true)}>
        Raton: Razer Basilisk V3 Pro 35K
        </button>
        <button style={{ backgroundColor:"white", color:"black", width:"40px", fontWeight:"bold"}}>{RatonUnits}</button>
        <button onClick={() => handleRatonUnits("+")} style={{ width:"40px", fontWeight:"bold"}}>+</button>
        <button onClick={() => handleRatonUnits("-")} style={{ width:"40px", fontWeight:"bold" }}>-</button>
      </div>

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

      {/* Modal para el monitor */}
      <Modal
        isOpen={IsOpenMonitor}
        onRequestClose={() => setIsOpenMonitor(false)}
        contentLabel="Detalles del Monitor"
      >
        <div className="pages">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "20% 80%",
              alignItems: "center",
              justifyItems: "center",
              width: "100%",
              height: "100%",
              gap: "20px",
            }}
          >
            <img
              style={{ width: "200px", height: "200px" }}
              src={asusRog32} 
              className="asusMonitor"
              alt="ASUS ROG Swift OLED PG32UCDP 32"
            />
            <h1>ASUS ROG Swift OLED PG32UCDP 32" WOLED UltraHD 4K 240Hz</h1>
          </div>

          <p>
            El <strong>ASUS ROG Swift OLED PG32UCDP</strong> es un monitor gaming de alta gama con 
            un impresionante panel <strong>WOLED UltraHD 4K</strong>, frecuencia de actualización de <strong>240Hz</strong> 
            y compatibilidad con <strong>G-Sync</strong>, diseñado para ofrecer imágenes fluidas y nítidas.
            Con su conectividad avanzada, incluyendo <strong>USB-C</strong>, es perfecto tanto para gaming como para uso profesional.
          </p>

          <span><strong>Tamaño:</strong> 32 pulgadas</span>
          <span><strong>Resolución:</strong> UltraHD 4K (3840 x 2160)</span>
          <span><strong>Tipo de panel:</strong> WOLED</span>
          <span><strong>Tasa de refresco:</strong> 240Hz</span>
          <span><strong>Compatibilidad:</strong> G-Sync Compatible</span>
          <span><strong>Brillo:</strong> 1000 nits (HDR)</span>
          <span><strong>Conectividad:</strong> HDMI 2.1, DisplayPort 1.4, USB-C</span>
          <span><strong>Tiempo de respuesta:</strong> 0.03 ms</span>

          <p
            style={{
              fontSize: "1.5em",
              color: "#ff4d4d",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            <strong>Precio: 1500€</strong>
          </p>

          <a
            style={{ color: "#007bff" }}
            href="https://www.pccomponentes.com/monitor-asus-rog-swift-oled-pg32ucdp-32-woled-ultrahd-4k-240hz-g-sync-compatible-usb-c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más detalles del ASUS ROG Swift OLED PG32UCDP
          </a>

          <button onClick={() => setIsOpenMonitor(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para el Teclado */}
      <Modal
        isOpen={IsOpenTeclado}
        onRequestClose={() => setIsOpenTeclado(false)}
        contentLabel="Detalles del Teclado"
      >
        <div className="pages">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "20% 80%",
              alignItems: "center",
              justifyItems: "center",
              width: "100%",
              height: "100%",
              gap: "20px",
            }}
          >
            <img
              style={{ width: "200px", height: "200px" }}
              src={teclado}  // Asegúrate de tener la imagen correspondiente
              className="razerTeclado"
              alt="Razer BlackWidow V4 Pro Gaming RGB"
            />
            <h1>Razer BlackWidow V4 Pro Gaming RGB</h1>
          </div>

          <p>
            El <strong>Razer BlackWidow V4 Pro</strong> es un teclado mecánico de alto rendimiento diseñado para gamers, con teclas mecánicas Razer Green para una respuesta táctil y sonora. Además, ofrece una iluminación RGB personalizable con el sistema Razer Chroma, garantizando una experiencia visual única. Con un diseño robusto y materiales de alta calidad, es ideal para sesiones largas de juego o trabajo.
          </p>

          <span><strong>Tipo de interruptores:</strong> Razer Green (mecánico, táctil)</span>
          <span><strong>Iluminación:</strong> Razer Chroma RGB</span>
          <span><strong>Conectividad:</strong> USB 2.0</span>
          <span><strong>Teclas adicionales:</strong> Teclas multimedia y controles dedicados</span>
          <span><strong>Reposamuñecas:</strong> Ergonómico y extraíble</span>
          <span><strong>Dimensiones:</strong> 455 mm x 187 mm x 40 mm</span>
          <span><strong>Peso:</strong> 1.5 kg</span>

          <p
            style={{
              fontSize: "1.5em",
              color: "#ff4d4d",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            <strong>Precio: 200€</strong>
          </p>

          <a
            style={{ color: "#007bff" }}
            href="https://www.pccomponentes.com/razer-blackwidow-v4-pro-teclado-gaming-rgb-green-switch-layout-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más detalles del Razer BlackWidow V4 Pro
          </a>

          <button onClick={() => setIsOpenTeclado(false)}>Cerrar</button>
        </div>
      </Modal>

      {/* Modal para el Ratón */}
      <Modal
        isOpen={IsOpenRaton}
        onRequestClose={() => setIsOpenRaton(false)}
        contentLabel="Detalles del Ratón"
      >
        <div className="pages">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "20% 80%",
              alignItems: "center",
              justifyItems: "center",
              width: "100%",
              height: "100%",
              gap: "20px",
            }}
          >
            <img
              style={{ width: "200px", height: "200px" }}
              src={ratonGaming}  // Asegúrate de tener la imagen correspondiente
              className="razerRaton"
              alt="Razer Basilisk V3 Pro 35K"
            />
            <h1>Razer Basilisk V3 Pro 35K</h1>
          </div>

          <p>
            El <strong>Razer Basilisk V3 Pro</strong> es un ratón gaming de alto rendimiento diseñado para jugadores que buscan precisión y personalización. Con un sensor óptico de 35,000 DPI, permite un control excepcional en juegos de alta velocidad. Además, cuenta con iluminación RGB personalizable Razer Chroma y una serie de botones programables que se adaptan a las necesidades del jugador.
          </p>

          <span><strong>Sensor:</strong> Razer Focus+ Optical Sensor (35K DPI)</span>
          <span><strong>Iluminación:</strong> Razer Chroma RGB</span>
          <span><strong>Botones:</strong> 11 botones programables</span>
          <span><strong>Conectividad:</strong> Inalámbrico (Razer HyperSpeed Wireless) y cableado</span>
          <span><strong>Ergonomía:</strong> Diseño ergonómico con agarre lateral</span>
          <span><strong>Pesos ajustables:</strong> Sí, con 3 pesas intercambiables</span>
          <span><strong>Tiempo de respuesta:</strong> 0.2 ms</span>

          <p
            style={{
              fontSize: "1.5em",
              color: "#ff4d4d",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            <strong>Precio: 130€</strong>
          </p>

          <a
            style={{ color: "#007bff" }}
            href="https://www.pccomponentes.com/search/?query=Razer%20Basilisk%20V3%20Pro%2035K&&page=1&or-relevance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más detalles del Razer Basilisk V3 Pro
          </a>

          <button onClick={() => setIsOpenRaton(false)}>Cerrar</button>
        </div>
      </Modal>


    </div>
    
    <div class="price-container">
      <h1>Precio total del montaje sin IVA: {Total.toFixed(2)} €</h1>
      
    </div>
    <button class="invoiceButton" onClick={handleDownload}>Descargar Factura en Excel</button>
    <div style={{ margin:"20px" , fontSize:"22px"}}><a className="App-link" href="/Assembly" rel="noopener noreferrer">Ir al Montaje</a></div>
    </>
  );
};

export default Details;
