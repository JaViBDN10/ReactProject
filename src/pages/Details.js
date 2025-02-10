import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Necesario para accesibilidad

const Details = () => {
  const [IsOpenGrafica, setIsOpenGrafica] = useState(false);
  const [IsOpenCPU, setIsOpenCPU] = useState(false);

  return (
    <div className="pages">
      <h1 className="h1pages">Detalles de los componentes</h1>
      <button onClick={() => setIsOpenGrafica(true)}>Tarjeta gráfica: Nvidia RTX 4080 Super</button>
      <button onClick={() => setIsOpenCPU(true)}>Microprocesador (CPU): AMD Ryzen 7 9800X3D</button>

      {/* Modal */}
      <Modal
        isOpen={IsOpenGrafica}
        onRequestClose={() => setIsOpenGrafica(false)}
        contentLabel="Detalles de la Tarjeta Gráfica"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            width: "800px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          },
        }}
      >
        <div className='pages'>
          <h1>Nvidia RTX 4080 Super</h1>
          <p><strong>Memoria:</strong> 16GB GDDR6X</p>
          <p><strong>Núcleos CUDA:</strong> 10240</p>
          <p><strong>Velocidad de reloj:</strong> 2.55 GHz</p>
          <p><strong>Consumo:</strong> 320W</p>
          <button onClick={() => setIsOpenGrafica(false)}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
};

export default Details;
