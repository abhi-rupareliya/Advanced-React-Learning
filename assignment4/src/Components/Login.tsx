import { Form, Formik } from "formik";
import { loginValidationSchema } from "../utils/form-validators/loginValidators";
import { Input } from "./Ui/Input";
import { Button } from "./Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../types/userType";
import { login } from "../Redux/userSlice";
import CryptoJS from "crypto-js";

function Login() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);

  const encryptPassword = (password: string): string => {
    return CryptoJS.SHA256(password).toString()
  };

  const handleSubmit = (values: any) => {
    const password = encryptPassword(values.password);
    
    const userExists = users.filter((user: User) => {
      console.log("compare",user,password)
      return user.email === values.email && user.password === password;
    });

    if (userExists.length > 0) {
      alert("Login Successful");
      dispatch(login(userExists[0]));
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg border">
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
          <Button type="submit" width="fit-content" text="Submit" />
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
