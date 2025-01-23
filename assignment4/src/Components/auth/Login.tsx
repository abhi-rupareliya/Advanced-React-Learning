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
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-1/3 p-8 bg-white rounded-lg border shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
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
        <div className="mt-5 pl-1">
          <Link
            className="text-blue-600 hover:underline "
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
