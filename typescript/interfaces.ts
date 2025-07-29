interface Authenticatable {
  email: string;
  password: string;

  login() : void;
  logout(): void;
};