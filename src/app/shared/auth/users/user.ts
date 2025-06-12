export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  created: Date;
  lastLogin: Date;
  currentSession: string;
}
