// export default function BasicInfoForm({ register }) {
//   return (
//     <>
//       <input {...register("name")} className="input" placeholder="Full Name" />
//       <input
//         {...register("position")}
//         className="input"
//         placeholder="Position"
//       />
//       <input {...register("phone")} className="input" placeholder="Phone" />
//       <input {...register("github")} className="input" placeholder="GitHub" />

//       <textarea
//         {...register("objective")}
//         className="input"
//         placeholder="Career Objective"
//       />
//     </>
//   );
// }

import { useFieldArray } from "react-hook-form";

export default function BasicInfoForm({ register, control }) {
  const {
    fields: phoneFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "phones",
  });

  return (
    <>
      <h3 className="section-title">Basic Information</h3>

      <input {...register("name")} className="input" placeholder="Full Name" />

      <input
        {...register("position")}
        className="input"
        placeholder="Position"
      />

      <input
        {...register("email")}
        className="input"
        placeholder="Email"
        type="email"
      />

      <input {...register("address")} className="input" placeholder="Address" />

      {/* PHONE NUMBERS */}
      <div className="mt-3">
        <p className="font-semibold mb-1">Phone Numbers</p>

        {phoneFields.map((item, index) => (
          <div key={item.id} className="flex gap-2 mb-2">
            <input
              {...register(`phones.${index}.number`)}
              className="input flex-1"
              placeholder={`Phone ${index + 1}`}
            />

            {phoneFields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-sm"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ number: "" })}
          className="btn mt-1"
        >
          + Add Phone
        </button>
      </div>

      {/* LINKS */}
      <h3 className="section-title mt-4">Professional Links</h3>

      <input
        {...register("portfolio")}
        className="input"
        placeholder="Portfolio URL (https://...)"
      />

      <input
        {...register("github")}
        className="input"
        placeholder="GitHub URL"
      />

      <input
        {...register("linkedin")}
        className="input"
        placeholder="LinkedIn URL"
      />

      <textarea
        {...register("objective")}
        className="input"
        placeholder="Career Objective"
      />
    </>
  );
}
