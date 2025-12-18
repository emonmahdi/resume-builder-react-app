// import TemplateOne from "./templates/TemplateOne";

// export default function ResumePreview({ data }) {
//   return (
//     <div className="mt-10 flex justify-center">
//       <div
//         id="resume"
//         className="bg-white w-[210mm] min-h-[297mm] p-8 shadow-lg"
//       >
//         <TemplateOne data={data} />
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";

export default function ResumePreview({ data }) {
  const [template, setTemplate] = useState("one"); // default template

  return (
    <div className="mt-10 flex flex-col items-center space-y-4">
      {/* Buttons for template selection */}
      <div className="space-x-4">
        <button
          className={`btn px-4 py-2 rounded ${
            template === "one" ? "bg-black text-white" : "bg-black"
          }`}
          onClick={() => setTemplate("one")}
          type="button"
        >
          Template 1
        </button>

        <button
          className={`btn px-4 py-2 rounded ${
            template === "two" ? "bg-black text-white" : "bg-black"
          }`}
          onClick={() => setTemplate("two")}
          type="button"
        >
          Template 2
        </button>
      </div>

      {/* Resume preview container */}
      <div
        id="resume"
        className="w-[210mm] min-h-[297mm] p-8 shadow-lg"
        style={{ backgroundColor: "#fff" }}
      >
        {template === "one" && <TemplateOne data={data} />}
        {template === "two" && <TemplateTwo data={data} />}
      </div>
    </div>
  );
}
