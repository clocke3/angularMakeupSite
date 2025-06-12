export interface User {
  email: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  created: Date;
  lastLogin: Date;
  currentSession: string;
}
