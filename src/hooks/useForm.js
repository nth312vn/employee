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
      Object.entries(validations).forEach(([key, validation]) => {
        validation(value[key], value);
      });
    }
  };
  const handleSubmit = (event, onSubmit) => {
    try {
      event.preventDefault();
      handleValidate();
      setError(null);
      onSubmit(value);
    } catch (e) {
      setError(e);
    }
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
