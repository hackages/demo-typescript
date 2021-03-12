// Interface can only use object shape
// Interface cannot use computed value
// You can  merge interfaces but not types
//

interface IUser {
  name: string;
  accessLevel: number;
}

interface IUser {
  company: string;
}

const davy: IUser = {
  name: "davy",
  accessLevel: 2,
  company: "Hackages",
};

type TUser = {};

const milan: TUser = {
  name: "Milan",
  accessLevel: 2,
};

type props = "login" | "password";

type TTUser = {
  [key in props]: string;
};

// interface IIUser {
//   login: string;
//   password: string;
// }
