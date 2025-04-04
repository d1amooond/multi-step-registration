export interface RegistrationUserDetails {
  firstName: string;
  lastName: string;
  email: string;
}

export interface RegistrationAddressDetails {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface RegistrationAccountDetails {
  username: string;
  password: string;
}

export interface FormErrors {
  [key: string]: string;
}
