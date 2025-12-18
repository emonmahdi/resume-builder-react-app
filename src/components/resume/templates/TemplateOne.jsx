export default function TemplateOne({ data }) {
  return (
    <>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-lg">{data.position}</p>
      <p>{data.phone}</p>
      <p>{data.github}</p>

      <Section title="Career Objective">{data.objective}</Section>

      <Section title="Projects">
        {data.projects?.map((p, i) => (
          <div key={i} className="mb-3">
            <strong>{p.name}</strong>
            <p className="italic text-sm">{p.tech}</p>
            <ul className="list-disc ml-5 text-sm">
              <li>{p.b1}</li>
              <li>{p.b2}</li>
              <li>{p.b3}</li>
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Education">{data.education}</Section>

      <Section title="Tech Skills">
        <p>
          <b>Frontend:</b> {data.frontend}
        </p>
        <p>
          <b>Backend:</b> {data.backend}
        </p>
        <p>
          <b>Database:</b> {data.database}
        </p>
        <p>
          <b>Tools:</b> {data.tools}
        </p>
      </Section>

      <Section title="Courses">{data.course}</Section>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-4">
      <h2 className="resume-title pb-2">{title}</h2>
      {children}
    </section>
  );
}
