import React, { useState } from 'react';
import { useRegisterMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';

export const Register: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();
  return (
    <>
      <h1>Register page</h1>
      <form onSubmit={async e => {
        e.preventDefault();
        console.log("Form submitted");
        const response = await register({
          variables: {
            email,
            password
          }
        });

        console.log(response);
        history.push("/");
      }}>
        <div className="email">
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="email">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
