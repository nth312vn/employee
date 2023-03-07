import { loginField } from "../../constants/login";

export const validationLogin = () => {
  const { user, password } = loginField;
  return {
    [user]: (newValue) => {
      if (!newValue) {
        throw new Error("Missing user field is required");
      }
    },
    [password]: (newValue) => {
      if (!newValue) {
        throw new Error("Missing password field is required");
      }
    },
  };
};
