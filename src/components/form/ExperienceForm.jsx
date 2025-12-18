import { useFieldArray } from "react-hook-form";

export default function ExperienceForm({ control, register }) {
     
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });
  
  

  return (
    <>
      <h3 className="section-title">Experience</h3>

      {fields.map((item, index) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded p-4 mb-4"
        >
          {/* POSITION */}
          <input
            {...register(`experience.${index}.position`)}
            className="input"
            placeholder="Position Name"
          />

          {/* COMPANY + DATE */}
          <input
            {...register(`experience.${index}.company`)}
            className="input"
            placeholder="Company Name"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              {...register(`experience.${index}.startDate`)}
              className="input"
              placeholder="Start Date (e.g. Jan 2023)"
            />
            <input
              {...register(`experience.${index}.endDate`)}
              className="input"
              placeholder="End Date (e.g. Present)"
            />
          </div>

          {/* RESPONSIBILITIES */}
          <p className="text-sm font-semibold mt-3 mb-1">
            Responsibilities
          </p>

          <input
            {...register(`experience.${index}.r1`)}
            className="input"
            placeholder="Responsibility 1"
          />
          <input
            {...register(`experience.${index}.r2`)}
            className="input"
            placeholder="Responsibility 2"
          />
          <input
            {...register(`experience.${index}.r3`)}
            className="input"
            placeholder="Responsibility 3"
          />
          <input
            {...register(`experience.${index}.r4`)}
            className="input"
            placeholder="Responsibility 4"
          />

          {/* REMOVE BUTTON */}
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-2 text-sm" 
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}

      {/* ADD EXPERIENCE BUTTON */}
      <button
        type="button"
        onClick={() =>
          append({
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            r1: "",
            r2: "",
            r3: "",
            r4: "",
          })
        }
        className="btn mt-2"
      >
        + Add Another Experience
      </button>
    </>
  );
}
