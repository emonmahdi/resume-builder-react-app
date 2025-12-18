// import { useForm } from "react-hook-form";
// import BasicInfoForm from "./components/form/BasicInfoForm";
// import ProjectsForm from "./components/form/ProjectsForm";
// import EducationForm from "./components/form/EducationForm";
// import SkillsForm from "./components/form/SkillsForm";
// import CoursesForm from "./components/form/CoursesForm";
// import ResumePreview from "./components/resume/ResumePreview";
// import { downloadPdf } from "./utils/downloadPdf";
// import ExperienceForm from "./components/form/ExperienceForm";

// export default function App() {
//   const { register, watch } = useForm({
//     defaultValues: { projects: [{}, {}] },
//   });

//   const data = watch();

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4">Resume Form</h2>

//         <BasicInfoForm register={register} />
//         <ExperienceForm register={register} control={control} />
//         <ProjectsForm register={register} />
//         <EducationForm register={register} />
//         <SkillsForm register={register} />
//         <CoursesForm register={register} />

//         <button onClick={downloadPdf} className="btn w-full mt-4">
//           Download Resume (PDF)
//         </button>
//       </div>

//       <ResumePreview data={data} />
//     </div>
//   );
// }

import { useForm } from "react-hook-form";
import BasicInfoForm from "./components/form/BasicInfoForm";
import ProjectsForm from "./components/form/ProjectsForm";
import EducationForm from "./components/form/EducationForm";
import SkillsForm from "./components/form/SkillsForm";
import CoursesForm from "./components/form/CoursesForm";
import ExperienceForm from "./components/form/ExperienceForm";
import ResumePreview from "./components/resume/ResumePreview";
import { downloadPdf } from "./utils/downloadPdf";

export default function App() {
  const { register, control, watch } = useForm({
    defaultValues: {
      phones: [{ number: "" }],
      projects: [{}, {}],
      experience: [
        {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          r1: "",
          r2: "",
          r3: "",
          r4: "",
        },
      ],
    },
  });

  const data = watch();

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Resume Form</h2>

        <BasicInfoForm register={register} control={control} />

        {/* ✅ FIXED */}
        <ExperienceForm register={register} control={control} />

        <ProjectsForm register={register} />
        <EducationForm register={register} />
        <SkillsForm register={register} />
        <CoursesForm register={register} />

        <button onClick={downloadPdf} className="btn w-full mt-4">
          Download Resume (PDF)
        </button>
      </div>

      <ResumePreview data={data} />
    </div>
  );
}
