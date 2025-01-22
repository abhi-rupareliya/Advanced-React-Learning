import * as Yup from "yup";

export const createValidationSchema = () => {
  return Yup.object({
    currentPassword: Yup.string()
      .required("Password is required"),

    newPassword: Yup.string()
      .required("New password is required")
      .min(6, "Password must be at least 6 characters")
      .notOneOf([Yup.ref("currentPassword")], "New password must be different from current password"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });
};
