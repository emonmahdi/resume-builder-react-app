// export default function TemplateTwo({ data }) {
//   return (
//     <>
//       {/* HEADER - Two columns */}
//       <div className="flex justify-between items-start border-black pb-3 mb-6">
//         <div>
//           <h1 className="text-3xl font-bold">{data.name}</h1>
//           <p className="text-xl">{data.position}</p>
//         </div>

//         {/* Top Right Info */}
//         <div className="text-right text-sm space-y-1 max-w-xs">
//           {/* Address */}
//           {data.address && <p>{data.address}</p>}

//           {/* Phones */}
//           {data.phones?.length > 0 && (
//             <p>{data.phones.map((p) => p.number).join(", ")}</p>
//           )}

//           {/* Email */}
//           {data.email && <p>{data.email}</p>}

//           {/* Links in one line */}
//           <div className="flex justify-end gap-3 flex-wrap">
//             {data.portfolio && (
//               <a
//                 href={
//                   data.portfolio.startsWith("http")
//                     ? data.portfolio
//                     : `https://${data.portfolio}`
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 Portfolio
//               </a>
//             )}

//             {data.github && (
//               <a
//                 href={
//                   data.github.startsWith("http")
//                     ? data.github
//                     : `https://${data.github}`
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 GitHub
//               </a>
//             )}

//             {data.linkedin && (
//               <a
//                 href={
//                   data.linkedin.startsWith("http")
//                     ? data.linkedin
//                     : `https://${data.linkedin}`
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 LinkedIn
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* CAREER OBJECTIVE */}
//       <Section title="Career Objective">{data.objective}</Section>

//       {/* EXPERIENCE SECTION */}
//       {/* <Section title="Experience">
//           {data.experience?.map((exp, i) => (
//             <div key={i} className="mb-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-semibold text-lg">{exp.position}</h3>
//                 <span className="italic text-sm text-gray-600">
//                   {exp.startDate} - {exp.endDate || "Present"}
//                 </span>
//               </div>
//               <p className="text-sm font-medium mb-1">{exp.company}</p>
//               <ul className="list-disc list-inside text-sm">
//                 {exp.bullets?.map((b, idx) => (
//                   <li key={idx}>{b}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </Section> */}
//       <section className="mt-4">
//         <h2 className="resume-title">Experience</h2>

//         {data.experience?.map((exp, i) => (
//           <div key={i} className="mb-4">
//             <p className="font-semibold">
//               {exp.position} – {exp.company}
//             </p>
//             <p className="text-sm italic">
//               {exp.startDate} – {exp.endDate}
//             </p>
//             <ul className="list-disc ml-5 text-sm">
//               {exp.r1 && <li>{exp.r1}</li>}
//               {exp.r2 && <li>{exp.r2}</li>}
//               {exp.r3 && <li>{exp.r3}</li>}
//               {exp.r4 && <li>{exp.r4}</li>}
//             </ul>
//           </div>
//         ))}
//       </section>

//       {/* TECH SKILLS */}
//       <Section title="Tech Skills">
//         <p>
//           <b>Frontend:</b> {data.frontend}
//         </p>
//         <p>
//           <b>Backend:</b> {data.backend}
//         </p>
//         <p>
//           <b>Database:</b> {data.database}
//         </p>
//         <p>
//           <b>Tools:</b> {data.tools}
//         </p>
//       </Section>

//       {/* PROJECTS */}
//       <Section title="Projects">
//         {data.projects?.map((p, i) => (
//           <div key={i} className="mb-3">
//             <strong>{p.name}</strong>
//             <p className="italic text-sm">{p.tech}</p>
//             <ul className="list-disc ml-5 text-sm">
//               <li>{p.b1}</li>
//               <li>{p.b2}</li>
//               <li>{p.b3}</li>
//             </ul>
//           </div>
//         ))}
//       </Section>

//       {/* EDUCATION */}
//       <Section title="Education">{data.education}</Section>

//       {/* COURSES */}
//       <Section title="Courses">{data.course}</Section>
//     </>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <section className="mt-6">
//       <h2 className="resume-title pb-2 border-b-2 border-black">{title}</h2>
//       {children}
//     </section>
//   );
// }



export default function TemplateTwo({ data }) {
    return (
      <>
        {/* HEADER */}
        <div
          className="flex justify-between items-start pb-3 mb-6" 
        >
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
              {data.name}
            </h1>
            <p style={{ fontSize: "18px" }}>{data.position}</p>
          </div>
  
          {/* RIGHT INFO */}
          <div
            className="text-right text-sm space-y-1"
            style={{ maxWidth: "260px" }}
          >
            {data.address && <p>{data.address}</p>}
  
            {data.phones?.length > 0 && (
              <p>{data.phones.map(p => p.number).join(", ")}</p>
            )}
  
            {data.email && <p>{data.email}</p>}
  
            {/* LINKS INLINE */}
            <div className="flex justify-end gap-3 flex-wrap mt-1">
              {data.portfolio && (
                <a
                  href={normalizeUrl(data.portfolio)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Portfolio
                </a>
              )}
  
              {data.github && (
                <a
                  href={normalizeUrl(data.github)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  GitHub
                </a>
              )}
  
              {data.linkedin && (
                <a
                  href={normalizeUrl(data.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
  
        {/* OBJECTIVE */}
        <Section title="Career Objective">
          <p>{data.objective}</p>
        </Section>
  
        {/* EXPERIENCE */}
        <section className="mt-4">
          <SectionTitle title="Experience" />
  
          {data.experience?.map((exp, i) => (
            <div key={i} className="mb-4">
              <p style={{ fontWeight: "600" }}>
                {exp.position} – {exp.company}
              </p>
              <p style={{ fontSize: "13px", fontStyle: "italic" }}>
                {exp.startDate} – {exp.endDate || "Present"}
              </p>
              <ul style={{ marginLeft: "18px", fontSize: "14px" }}>
                {exp.r1 && <li>{exp.r1}</li>}
                {exp.r2 && <li>{exp.r2}</li>}
                {exp.r3 && <li>{exp.r3}</li>}
                {exp.r4 && <li>{exp.r4}</li>}
              </ul>
            </div>
          ))}
        </section>
  
        {/* SKILLS */}
        <Section title="Tech Skills">
          <p><b>Frontend:</b> {data.frontend}</p>
          <p><b>Backend:</b> {data.backend}</p>
          <p><b>Database:</b> {data.database}</p>
          <p><b>Tools:</b> {data.tools}</p>
        </Section>
  
        {/* PROJECTS */}
        <Section title="Projects">
          {data.projects?.map((p, i) => (
            <div key={i} className="mb-3">
              <strong>{p.name}</strong>
              <p style={{ fontSize: "13px", fontStyle: "italic" }}>
                {p.tech}
              </p>
              <ul style={{ marginLeft: "18px", fontSize: "14px" }}>
                {p.b1 && <li>{p.b1}</li>}
                {p.b2 && <li>{p.b2}</li>}
                {p.b3 && <li>{p.b3}</li>}
              </ul>
            </div>
          ))}
        </Section>
  
        {/* EDUCATION */}
        <Section title="Education">
          <p>{data.education}</p>
        </Section>
  
        {/* COURSES */}
        <Section title="Courses">
          <p>{data.course}</p>
        </Section>
      </>
    );
  }
  
  /* ---------- HELPERS ---------- */
  
  function Section({ title, children }) {
    return (
      <section className="mt-6">
        <SectionTitle title={title} />
        {children}
      </section>
    );
  }
  
  function SectionTitle({ title }) {
    return (
      <h2
        style={{
          fontSize: "17px",
          fontWeight: "600",
          borderBottom: "2px solid #333",
          paddingBottom: "6px",
          marginBottom: "4px",
        }}
      >
        {title}
      </h2>
    );
  }
  
  function normalizeUrl(url) {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  }
  
  const linkStyle = {
    color: "#005891",
    textDecoration: "underline",
    fontSize: "13px",
    fontWeight: 'bold'
  };
  