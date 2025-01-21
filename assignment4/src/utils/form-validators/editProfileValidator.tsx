import * as Yup from "yup";
import { User } from "../../types/userType";

export const createValidationSchema = (users: User[], currentEmail: string) => {
  const emailExists = (email: string) => {
    return users.some(
      (user: User) => user.email === email && user.email !== currentEmail
    );
  };

  return Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .test(
        "email-unique",
        "Email already exists",
        (value) => !emailExists(value || "")
      ),
    mobileNumber: Yup.string().required("Mobile number is required"),
  });
};
