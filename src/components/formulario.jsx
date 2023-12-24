import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Form({ onSubmit, inputs, initialValues }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(initialValues);

  const handleSubmitForm = async (data) => {
    setFormSubmitted(true);
    await onSubmit(data);
    setFormSubmitted(false);
  };

  useEffect(() => {
    // Reiniciar el formulario cuando cambien los valores iniciales
    reset(initialValues);
  }, [initialValues, reset]);

  return (
    <div className="overflow-y-auto max-h-[80vh]">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        noValidate
        className="space-y-4"
      >
        {inputs.map((input) => (
          <div key={input.name}>
            <label className="font-bold text-sm text-gray-600">
              {input.label}
            </label>
            {input.type === "select" ? (
              <select
                {...register(input.name, { required: input.required })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                defaultValue={input.defaultValue}
              >
                {input.options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="capitalize"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                {...register(input.name, {
                  required: input.required,
                  pattern: input.pattern,
                  min: input.min, // Valor mínimo
                  max: input.max, // Valor máximo
                })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type={input.type}
                placeholder={input.placeholder}
              />
            )}
            {errors[input.name] && (
              <div
                className="p-4 mb-4 text-sm  rounded-lg bg-red-100 text-red-800 mt-2"
                role="alert"
              >
                <span className="font-medium">
                  {errors[input.name].message}
                </span>
              </div>
            )}
          </div>
        ))}
        <input
          type="submit"
          value={formSubmitted ? "Enviando........." : "enviar"}
          disabled={formSubmitted}
          className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-white py-2 px-4 text-sm font-medium"
        />
      </form>
    </div>
  );
}

export default Form;
