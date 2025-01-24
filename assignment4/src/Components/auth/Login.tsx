import { Form, Formik } from "formik";
import { loginValidationSchema } from "../../utils/form-validators/loginValidators";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/userType";
import { login } from "../../Redux/userSlice";
import CryptoJS from "crypto-js";
import { StateType } from "../../types/storeType";
import { LoginFormType } from "../../types/FormDataTypes";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: StateType) => state.user.users);

  const encryptPassword = (password: string): string => {
    return CryptoJS.SHA256(password).toString();
  };

  const handleSubmit = (values: LoginFormType) => {
    const password = encryptPassword(values.password);

    const userExists = users.filter((user: User) => {
      return user.email === values.email && user.password === password;
    });

    if (userExists.length > 0) {
      alert("Login Successful");
      dispatch(login(userExists[0]));
      navigate("/", { replace: true });
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className={styles.component_wrapper}>
      <div className={styles.component_main}>
        <h2 className={styles.component_heading}>Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="email" id="email" lable="Email" type="email" />

            <Input
              name="password"
              id="password"
              lable="Password"
              type="password"
            />
            <Button type="submit" width="full" text="Login" />
          </Form>
        </Formik>
        <div className={styles.linkContainer}>
          <Link
            className={styles.link}
            replace={true}
            to="/auth/signup"
          >
            Not a user? Create an account to continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
