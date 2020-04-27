export interface CustomerInterface {
  username: string;
  password: string;
  email: string;
  phoneNumber?: number | null;
  gender: string;
  name: string;
  surname: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export enum UserType {
  admin = 1,
  customer = 2
}
