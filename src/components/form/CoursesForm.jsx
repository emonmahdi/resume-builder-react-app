export default function CoursesForm({ register }) {
  return (
    <>
      <h3 className="section-title">Courses</h3>
      <input {...register("course")} className="input" placeholder="Courses" />
    </>
  );
}
