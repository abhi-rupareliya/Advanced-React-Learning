import { Formik, Form } from "formik";
import CryptoJS from "crypto-js";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../Redux/userSlice";
import { createValidationSchema } from "../../utils/form-validators/changePasswordValidator";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StateType } from "../../types/storeType";
import { ChangePasswordFormType } from "../../types/FormDataTypes";
import styles from "./auth.module.scss";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: StateType) => state.user.user);

  const encryptPassword = (password: string): string => {
    return CryptoJS.SHA256(password).toString();
  };

  useEffect(() => {
    if (!user) {
      alert("Login to continue");
      navigate("/auth/login");
    }
  }, [user, navigate]);

  const validationSchema = createValidationSchema();

  const handleSubmit = (values: ChangePasswordFormType) => {
    const { currentPassword, newPassword } = values;

    if (encryptPassword(currentPassword) !== user.password) {
      alert("Incorrect credentials");
      return;
    }

    dispatch(changePassword(encryptPassword(newPassword)));
    alert("Password Changed successfully!");
  };

  return (
    <div className={styles.component_wrapper}>
      <div className={styles.component_main}>
        <h2 className={styles.component_heading}>Change Password</h2>
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input
              name="currentPassword"
              id="currentPassword"
              lable="currentPassword"
              type="password"
            />

            <Input
              name="newPassword"
              id="newPassword"
              lable="New Password"
              type="password"
            />
            <Input
              name="confirmPassword"
              id="confirmPassword"
              lable="Confirm Password"
              type="password"
            />

            <Button type="submit" width="full" text="Submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
