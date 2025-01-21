import { Formik, Form } from "formik";
import CryptoJS from "crypto-js";
import { Input } from "./Ui/Input";
import { Button } from "./Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Redux/userSlice";
import { createValidationSchema } from "../utils/form-validators/signupValidators";
import { User } from "../types/userType";

const Signup = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);

  const encryptPassword = (password: string): string => {
    return CryptoJS.SHA256(password).toString();
  };

  const validationSchema = createValidationSchema(users);

  const handleSubmit = (values: any) => {
    const encryptedPassword = encryptPassword(values.password);

    const newUser: User = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobileNumber: values.mobileNumber,
      password: encryptedPassword,
    };

    dispatch(signup(newUser));
    alert("User signed up successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg border">
      <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input
            name="firstName"
            id="firstName"
            lable="First Name"
            type="text"
          />

          <Input name="lastName" id="lastName" lable="Last Name" type="text" />

          <Input name="email" id="email" lable="Email" type="email" />

          <Input
            name="mobileNumber"
            id="mobileNumber"
            lable="Mobile Number"
            type="text"
          />
          <Input
            name="password"
            id="password"
            lable="Password"
            type="password"
          />
          <Input
            name="confirmPassword"
            id="confirmPassword"
            lable="Confirm Password"
            type="password"
          />

          <Button type="submit" width="fit-content" text="Submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
