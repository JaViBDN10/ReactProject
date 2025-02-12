import React from 'react';
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

const Components = () => {
  return (
    <div className='pages'>
      <h2>1.- Tarjeta gráfica: Nvidia RTX 4080 Super 16Gb</h2>
      <p>La <strong>RTX 4080 Super</strong> cuenta con 16 GB GDDR6X de VRAM, es la segunda gráfica más potente de la serie actual (4000 series), sólo por debajo de la RTX 4090.</p>
      <img src={rtx4080} className="RTX4080" alt="RTX 4080" />
      <p>Hemos escogido esta y no la 4090 por el simple hecho de que es la que tengo yo realmente y le tengo cariño 😊. El rendimiento es un 10-15% inferior a la 4090
        y el precio es prácticamente la mitad. Este proyecto no tiene límite de presupuesto y no tendría mucho sentido, pero en un proyecto real la adquisición de la
        4090 no tendría mucho sentido.</p>

      <h2>2.- Microprocesador (CPU): AMD Ryzen 7 9800X3D</h2>
      
      <p>El <strong>Ryzen 7 9800X3D</strong> hoy por hoy es el mejor procesador para gaming debido a varias características clave:</p>
      <img src={ryzen9700x} className="ryzen9700x" alt="AMD Ryzen 7 9800X3D" />
      <ul>
        <li>Arquitectura Zen 5 y 3D V-Cache de segunda generación</li>
        <li>Rendimiento superior en juegos</li>
        <li>Eficiencia energética y gestión térmica</li>
      </ul>
      <p>Estas características, que las detallaremos más adelante, hacen que esta CPU no tenga rival en el Gaming.</p>
      <p>Como hemos escogido el procesador AMD, nuestros siguientes componentes deberán adaptarse a esta tecnología, por lo cual nuestra placa base y nuestra memoria RAM 
        tendrán que ser compatibles con <strong>AMD5</strong>.</p>

      <h2>3.- Placa Base: ASUS ROG STRIX X870E-E GAMING WIFI</h2>
      <p>La <strong>ROG Strix X870E-E Gaming WiFi</strong> está diseñada para aprovechar todo el potencial de los procesadores AMD Ryzen™ Serie 9000. </p>
      <img src={x870} className="x870" alt="ROG Strix X870E-E Gaming WiFi" />
      <p>También es compatible con memorias DDR5, 
        dispone de puertos USB4® Tipo-C y WiFi 7 y con Ethernet Realtek de 5 Gb.</p>
      <p>Con esta placa tenemos más que suficiente para conectar cualquier dispositivo actual y con amplio “espacio” para futuras ampliaciones.</p>

      <h2>4.- Memorias: Kingston FURY Beast RGB DDR5 5600MHz 128GB (4x32GB) CL40</h2>
      <p>Para las memorias, escogeremos unas <strong>Kingston</strong>, una marca de gran reputación. Serán <strong>DDR5</strong> para mantener la compatibilidad con nuestro sistema.</p>
      <img src={kingstonFury} className="kingstonFury" alt="Kingston FURY Beast RGB DDR5 5600MHz 128GB 4x32GB CL40" />
      <p>Estas memorias operan a 5600MHz, llenaremos los <strong>4 slots con módulos de 32GB</strong> cada uno. Por supuesto, como en todo PC Gaming que se precie, tendrán iluminación RGB multicolor.</p>

      <h2>5.- Refrigeración: ASUS ROG Ryujin III 360 ARGB Extreme Kit de Refrigeración Líquida (360mm)</h2>
      <p>Con la refrigeración no nos podemos quedar atrás, necesitamos que todos nuestros componentes estén lo más fríos posible, especialmente la CPU.</p>
      <img src={asusRogRyujin} className="asusRogRyujin" alt="ASUS ROG Ryujin III 360 ARGB Extreme Kit Refrigeración Líquida 360mm" />
      <p>Por ello, hemos optado por una refrigeración líquida de 360mm de alta gama. ASUS nos brinda esta bestia con la bomba <strong>Emma Gen8 V2</strong> y ventiladores <strong>ROG ARGB magnéticos mejorados</strong>.</p>
      <p>Además, cuenta con una pantalla LCD mejorada con resolución de 480p y una frecuencia de actualización de 60 Hz, en la que podremos personalizar nuestro PC con videos o imágenes.</p>

      <h2>6.- Caja/Torre: Corsair 6500X RGB Semitorre ATX Doble Cristal Templado USB-C Blanca</h2>
      <p>Necesitamos una torre amplia y con una buena ventilación. La <strong>CORSAIR iCUE LINK 6500X RGB</strong>, de media torre y doble cámara, exhibe su sistema a través de dos paneles de vidrio templado.</p>
      <img src={corsair6500x} className="corsair6500x" alt="Corsair 6500X RGB Semitorre ATX Doble Cristal Templado USB-C Blanca" />
      <p>Incluye tres ventiladores <strong>RX120 RGB</strong> preinstalados y un concentrador de sistema <strong>iCUE LINK</strong> para facilitar la configuración.</p>
      <p>Cuenta con espacio para hasta <strong>10 ventiladores de 120mm</strong> o <strong>7 ventiladores de 140mm</strong>, asegurando una refrigeración óptima. Su segunda cámara permite una construcción limpia y ordenada.</p>
      <p>Además, ofrece una <strong>conectividad moderna</strong> con un panel frontal que incluye <strong>USB 3.2 Gen-2 Type-C</strong>, proporcionando un acceso rápido y cómodo a los dispositivos.</p>

      <h2>7.- Fuente de Alimentación: Thermaltake TOUGHPOWER PF3 1200W 80 Plus Platinum Full Modular</h2>
      <p>Necesitamos una buena fuente de alimentación, ya que solo nuestra gráfica tiene un consumo medio de <strong>300W</strong> y picos de hasta <strong>450W</strong>. Además, las nuevas gráficas de la serie <strong>5000</strong> podrían llegar a consumir hasta <strong>600W</strong>. Por ello, y pensando en futuras ampliaciones, hemos decidido montar esta <strong>Thermaltake de 1200W</strong>.</p>
      <img src={Thermaltake1200w} className="Thermaltake1200w" alt="Thermaltake TOUGHPOWER PF3 1200W 80 Plus Platinum Full Modular" />
      <p>Viene equipada de fábrica con conectores <strong>PCIe Gen 5</strong>, por lo que está diseñada para su uso con la actual generación de tarjetas gráficas.</p>
      <p>Preparada para <strong>PCIe Gen 5.0</strong>, la <strong>Toughpower PF3</strong> cuenta con un conector de <strong>16 patillas</strong> para un rendimiento potente y seguro. Esto permite alimentar de forma fiable tarjetas gráficas de última generación sin necesidad de cables adaptadores.</p>

      <h2>8.- Almacenamiento: Samsung 990 PRO 4TB SSD PCIe 4.0 NVMe M.2</h2>
      <p>Para el almacenamiento, elegiremos por supuesto un <strong>M.2</strong>. En este caso, el <strong>Samsung 990 PRO de 4TB</strong>.</p>
      <img src={samsung990} className="samsung990" alt="Samsung 990 PRO 4TB SSD PCIe 4.0 NVMe M.2" />
      <p>Cuenta con velocidades de lectura y escritura de <strong>7000MB/s</strong> y una eficiente regulación térmica del controlador Samsung, ofreciendo una alta eficiencia energética sin sacrificar el rendimiento.</p>
      <p>Con este disco no tendremos ningún problema para tareas exigentes como el <strong>procesamiento de vídeo en 4K</strong>, <strong>gráficos en 3D</strong> y <strong>juegos de alta exigencia</strong>.</p>

      <h2>9.- Monitor: ASUS ROG Swift OLED PG32UCDP 32" WOLED UltraHD 4K 240Hz G-Sync Compatible USB-C</h2>
      <p>Después del súper PC que estamos montando, necesitamos un buen monitor <strong>4K</strong> para disfrutar al máximo de nuestras sesiones infinitas de gaming.</p>
      <img src={asusRog32} className="asusRog32" alt="ASUS ROG Swift OLED PG32UCDP 32 WOLED UltraHD 4K 240Hz" />
      <p>Por ello, hemos apostado por el <strong>ASUS ROG Swift OLED PG32UCDP</strong>, un monitor OLED de tercera generación con resolución <strong>UltraHD 4K</strong> y una frecuencia de refresco de <strong>240Hz</strong>.</p>
      <p>Con esta pantalla, nadie podrá hacernos frente en juegos en línea, gracias a nuestra alta tasa de FPS, gran fluidez y calidad visual en cada partida.</p>

      <h2>10.- Teclado: Razer BlackWidow V4 Pro Gaming RGB</h2>
        <p>Ya casi por último, pero no menos importante son los dispositivos de entrada, teclado y ratón, para gaming es muy recompedable un teclado mecánico y una respuesta rápida de las teclas.</p>
        <img src={teclado} className="teclado" alt="Razer BlackWidow V4 Pro Teclado Gaming RGB" />
        <p>El Razer BlackWidow V4 Pro es un teclado mecánico gaming de alta gama que ofrece características excepcionales para una experiencia de juego inmersiva y cómoda.</p>

        <h2>11.- Razer Basilisk V3 Pro 35K</h2>
        <p>Una pieza imprescindible para todo gamer, el ratón tiene que ser una prolongación de nuestra mano, necesitamos que no haya latencia una precisión extrema.</p>
        <img src={ratonGaming} className="ratonGaming" alt="Razer Basilisk V3 Pro 35K" />
        <p>El <strong>Razer Basilisk V3 Pro 35K</strong> es un ratón gaming RGB ergonómico inalámbrico avanzado y personalizable. Con sensor y rueda de desplazamiento preciso y opciones de configuración detallada.</p>

    </div>
  );
};

export default Components;