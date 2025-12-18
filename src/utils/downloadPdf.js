// import html2pdf from "html2pdf.js";

// export const downloadPdf = () => {
//   const element = document.getElementById("resume");

//   const opt = {
//     margin: 0,
//     filename: "resume.pdf",
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 3, useCORS: true, letterRendering: true },
//     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//   };

//   html2pdf().set(opt).from(element).save();
// };

import html2pdf from "html2pdf.js";

export const downloadPdf = () => {
  const element = document.getElementById("resume");

  if (!element) return;

  const opt = {
    margin: 0,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2, // 🔴 do NOT use 3+
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: element.scrollWidth,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: { mode: ["avoid-all"] }, // 🔥 KEY LINE
  };

  html2pdf().set(opt).from(element).save();
};
