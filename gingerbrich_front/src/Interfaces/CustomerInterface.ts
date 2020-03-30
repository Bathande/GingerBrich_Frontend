export interface CustomerInterface {
  username: string;
  password: string;
  email: string;
  address?: string | null;
  phoneNumber?: number|null;
  gender: string;
  idNumber?: number | null;
  name: string;
  surname: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export enum UserType {
  customer,
  admin
}
