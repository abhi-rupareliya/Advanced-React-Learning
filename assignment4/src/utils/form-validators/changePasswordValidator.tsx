import * as Yup from "yup";
import { User } from "../../types/userType";

export const createValidationSchema = () => {


  return Yup.object({
    currentPassword: Yup.string().required("Password is required"),
    newPassword: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });
};
