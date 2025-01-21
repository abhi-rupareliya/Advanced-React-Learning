import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});
