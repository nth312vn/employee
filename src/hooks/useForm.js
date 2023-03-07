import { useState } from "react";

const useForm = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    const name = event.target.name;
    const fieldValue = event.target.value;
    setValue({
      ...value,
      [name]: fieldValue,
    });
  };
  const clearFrom = () => {
    setValue(initialValue);
  };
  const setField = (name, fieldValue) => {
    setValue({
      ...fieldValue,
      [name]: value,
    });
  };
  const handleValidate = () => {
    if (validations) {
      const resultValidate = Object.entries(validations).map(
        ([key, validation]) => {
          return {
            key: validation(value[key], value),
          };
        }
      );
      setError(resultValidate);
      return resultValidate;
    }
  };
  const handleSubmit = (event, onSubmit) => {
    event.preventDefault();
    const result = handleValidate();
    console.log(result);
    if (result && result.some((item) => item.key)) return;

    onSubmit(value);
  };
  const getValue = (name) => {
    return value[name];
  };
  return {
    value,
    error,
    handleChange,
    clearFrom,
    setField,
    handleSubmit,
    getValue,
  };
};
export default useForm;
