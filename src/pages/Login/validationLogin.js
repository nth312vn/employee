import { loginField } from "../../constants/login";

export const validationLogin = () => {
  const { user, password } = loginField;
  return {
    [user]: (newValue) => {
      if (!newValue) {
        return "This field is required";
      }
    },
    [password]: (newValue) => {
      if (!newValue) {
        return "This field is required";
      }
    },
  };
};
