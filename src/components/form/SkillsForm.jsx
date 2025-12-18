export default function SkillsForm({ register }) {
  return (
    <>
      <h3 className="section-title">Tech Skills</h3>
      <input
        {...register("frontend")}
        className="input"
        placeholder="Frontend Skills"
      />
      <input
        {...register("backend")}
        className="input"
        placeholder="Backend Skills"
      />
      <input
        {...register("database")}
        className="input"
        placeholder="Database Skills"
      />
      <input {...register("tools")} className="input" placeholder="Tools" />
    </>
  );
}
