import React from 'react';
import cerdito from '../img/piggy.png';
import rtx4080 from '../img/4080.png';
import ryzen9700x from '../img/9700x.png';
import x870 from '../img/x870.png';

const Pcgaming = () => {
  return (
    <div className='pages'>
      <h1>Elección del PC Gaming</h1>
      <p>Hemos acabado el ciclo de ASIX, hemos sufrido mucho y por lo tanto nos merecemos un capricho, es por ello que hemos decidido romper nuestra
        PiggyBank y hacernos un regalo a nosotros mismos.</p>
      <img src={cerdito} className="cerdito" alt="Cerdito" />
      <p>Como todo buen PC Gaming, su buque insignia será la tarjeta gráfica (GPU), pero no podemos olvidarnos de todos los demás componentes ya que
        una mala elección del resto podría provocarnos un cuello de botella a la hora de gestionar los fotogramas generados por nuestra GPU.</p>
      <p>Vamos a ir eligiendo los componentes.</p>

      <h2>1.- Tarjeta gráfica: Nvidia RTX 4080 Super</h2>
      <p>La RTX 4080 Super cuenta con 16 GB GDDR6X de VRAM, es la segunda gráfica más potente de la serie actual (4000 series), sólo por debajo de la RTX 4090.</p>
      <img src={rtx4080} className="RTX4080" alt="RTX 4080" />
      <p>Hemos escogido esta y no la 4090 por el simple hecho de que es la que tengo yo realmente y le tengo cariño 😊. El rendimiento es un 10-15% inferior a la 4090
        y el precio es prácticamente la mitad. Este proyecto no tiene límite de presupuesto y no tendría mucho sentido, pero en un proyecto real la adquisición de la
        4090 no tendría mucho sentido.</p>

      <h2>2.- Microprocesador (CPU): AMD Ryzen 7 9700x</h2>
      
      <p>El Ryzen 7 9800X3D hoy por hoy es el mejor procesador para gaming debido a varias características clave:</p>
      <img src={ryzen9700x} className="ryzen9700x" alt="ryzen 7 9700x" />
      <ul>
        <li>Arquitectura Zen 5 y 3D V-Cache de segunda generación</li>
        <li>Rendimiento superior en juegos</li>
        <li>Eficiencia energética y gestión térmica</li>
      </ul>
      <p>Estas características, que las detallaremos más adelante, hacen que esta CPU no tenga rival en el Gaming.</p>
      <p>Como hemos escogido el procesador AMD, nuestros siguientes componentes deberán adaptarse a esta tecnología, por lo cual nuestra placa base y nuestra memoria RAM 
        tendrán que ser compatibles con AMD5.</p>

      <h2>3.- Placa Base: ASUS ROG STRIX X870E-E GAMING WIFI</h2>
      <p>La ROG Strix X870E-E Gaming WiFi está diseñada para aprovechar todo el potencial de los procesadores AMD Ryzen™ Serie 9000. </p>
      <img src={x870} className="x870" alt="rROG Strix X870E-E Gaming WiFi" />
      <p>También es compatible con memorias DDR5, 
        dispone de puertos USB4® Tipo-C y WiFi 7 y con Ethernet Realtek de 5 Gb.</p>
      <p>Con esta placa tenemos más que suficiente para conectar cualquier dispositivo actual y con amplio “espacio” para futuras ampliaciones.</p>

    </div>
  );
};

export default Pcgaming;
