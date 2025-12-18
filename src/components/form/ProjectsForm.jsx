export default function ProjectsForm({ register }) {
  return (
    <>
      <h3 className="section-title">Projects</h3>

      {[0, 1].map((i) => (
        <div key={i} className="border p-4 rounded mb-4">
          <input
            {...register(`projects.${i}.name`)}
            className="input"
            placeholder={`Project ${i + 1} Name`}
          />
          <input
            {...register(`projects.${i}.tech`)}
            className="input"
            placeholder="Tech Used"
          />
          <input
            {...register(`projects.${i}.b1`)}
            className="input"
            placeholder="Bullet 1"
          />
          <input
            {...register(`projects.${i}.b2`)}
            className="input"
            placeholder="Bullet 2"
          />
          <input
            {...register(`projects.${i}.b3`)}
            className="input"
            placeholder="Bullet 3"
          />
        </div>
      ))}
    </>
  );
}
