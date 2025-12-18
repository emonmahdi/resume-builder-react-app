export default function EducationForm({ register }) {
  return (
    <>
      <h3 className="section-title">Education</h3>
      <input
        {...register("education")}
        className="input"
        placeholder="BSc in CSE - University Name (Year)"
      />
    </>
  );
}
