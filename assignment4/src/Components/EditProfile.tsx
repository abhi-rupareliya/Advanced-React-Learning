import { Formik, Form } from "formik";
import { Input } from "./Ui/Input";
import { Button } from "./Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { createValidationSchema } from "../utils/form-validators/editProfileValidator";
import { editProfile } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (!user) {
      alert("Login to continue");
      navigate("/auth/login");
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const validationSchema = createValidationSchema(users, user.email);

  const handleSubmit = (values: any) => {
    dispatch(editProfile({ ...user, ...values }));
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

          <Button type="submit" width="fit-content" text="Submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfile;
