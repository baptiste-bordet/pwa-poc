import * as React from "react";

interface ILogin {
  name?: string;
}

const Login = ({ name }: ILogin) => {
  return (
    <h2>Coucou {name}</h2>
  )
};

export default Login;
