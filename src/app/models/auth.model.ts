export interface LoginResponse {
    access_token: string;
    user: {
      id: string;
      email: string;
      roles: string;
    };
  }

  export interface RegisterRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: string;
  }
  