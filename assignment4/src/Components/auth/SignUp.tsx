import { Formik, Form } from "formik";
import CryptoJS from "crypto-js";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/userSlice";
import { createValidationSchema } from "../../utils/form-validators/signupValidators";
import { User } from "../../types/userType";
import { SignupFormType } from "../../types/FormDataTypes";
import { StateType } from "../../types/storeType";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: StateType) => state.user.users);

  const encryptPassword = (password: string): string => {
    return CryptoJS.SHA256(password).toString();
  };

  const validationSchema = createValidationSchema(users);

  const handleSubmit = (values: SignupFormType) => {
    const encryptedPassword = encryptPassword(values.password);

    const newUser: User = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobileNumber: values.mobileNumber,
      password: encryptedPassword,
    };

    dispatch(signup(newUser));
    toast.success("acccount created successfully!");
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.component_wrapper}>
      <div className={styles.component_main}>
        <h2 className={styles.component_heading}>Signup</h2>
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

            <Input
              name="lastName"
              id="lastName"
              lable="Last Name"
              type="text"
            />

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

            <Button type="submit" width="full" text="Create Account" />
          </Form>
        </Formik>
        <div className={styles.linkContainer}>
          <Link className={styles.link} replace={true} to="/auth/login">
            already a user? login to continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
