import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const exportToExcel = () => {
  const invoiceData = [
      ["Producto", "Cantidad", "Precio Unitario", "Total"],
      ["Procesador AMD Ryzen 7", 1, 300, 300],
      ["Tarjeta Gráfica RTX 4070", 1, 600, 600],
      ["Memoria RAM 16GB", 2, 80, 160],
      ["Total", "", "", 1060], 
  ];

  // Crear un nuevo libro y hoja de cálculo
  const ws = XLSX.utils.aoa_to_sheet(invoiceData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Factura");

  // Generar archivo y descargarlo
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  saveAs(data, "Factura_PC_Gaming.xlsx");
};

const InvoiceDownload = () => {
  return (
      <button onClick={exportToExcel} className="px-4 py-2 bg-blue-500 text-white rounded">
          Descargar Factura en Excel
      </button>
  );
};

export default InvoiceDownload;