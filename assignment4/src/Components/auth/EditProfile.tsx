import { Formik, Form } from "formik";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { createValidationSchema } from "../../utils/form-validators/editProfileValidator";
import { editProfile } from "../../Redux/userSlice";
import { StateType } from "../../types/storeType";
import { EditProfileFormType } from "../../types/FormDataTypes";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: StateType) => state.user.users);
  const user = useSelector((state: StateType) => state.user.user);

  if (!user) {
    return <div>Loading...</div>;
  }

  const validationSchema = createValidationSchema(users, user.email);

  const handleSubmit = (values: EditProfileFormType) => {
    dispatch(editProfile({ ...user, ...values }));
    navigate("/", { replace: true });
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg border">
      <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>
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

          <Input name="lastName" id="lastName" lable="Last Name" type="text" />

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
  );
};

export default EditProfile;
