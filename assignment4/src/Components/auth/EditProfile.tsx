import { Formik, Form } from "formik";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { createValidationSchema } from "../../utils/form-validators/editProfileValidator";
import { editProfile } from "../../Redux/userSlice";
import { StateType } from "../../types/storeType";
import { EditProfileFormType } from "../../types/FormDataTypes";
import { useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";
import toast from "react-hot-toast";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: StateType) => state.user.users);
  const user = useSelector((state: StateType) => state.user.user);

  const validationSchema = createValidationSchema(users, user.email);

  const handleSubmit = (values: EditProfileFormType) => {
    dispatch(editProfile({ ...user, ...values }));
    toast.success("profile updated successfully")
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.component_wrapper}>
      <div className={styles.component_main}>
        <h2 className={styles.component_heading}>Edit Profile</h2>
        <Formik
          initialValues={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            mobileNumber: user.mobileNumber,
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

            <Button type="submit" width="full" text="Save Changes" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
