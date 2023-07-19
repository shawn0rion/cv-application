import React from "react";
import JsPDF from "jspdf";

export default function DownloadPdf() {
  const generatePDF = () => {
    const cv = new JsPDF("portrait", "px", "a4");
    cv.html(document.querySelector("#cv")).then(() => {
      cv.save("your-cv.pdf");
    });
  };

  return <button onClick={generatePDF}>Download the PDF!</button>;
}
