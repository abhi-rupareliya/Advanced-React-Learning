import * as Yup from "yup";
import { User } from "../../types/userType";

// Function to create validation schema dynamically
export const createValidationSchema = (users: User[]) => {
  const emailExists = (email: string) => {
    return users.some((user: User) => user.email === email);
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
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  });
};
