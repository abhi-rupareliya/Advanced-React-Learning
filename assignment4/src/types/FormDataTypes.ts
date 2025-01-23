export type ChangePasswordFormType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type SignupFormType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type EditProfileFormType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
};
