import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useLoginMutation, MeDocument, MeQuery } from '../generated/graphql';
import { setAccessToken } from '../accessToken';

export const Login: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  return (
    <>
      <h1>Register page</h1>
      <form onSubmit={async e => {
        e.preventDefault();
        console.log("Form submitted");
        const response = await login({
          variables: {
            email,
            password
          },
          update: (store, {data}) => {
            if (!data) {
              return null;
            }

            store.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                me: data.login.user
              }
            })
          }
        });

        console.log(response);

        if (response && response.data) {
          setAccessToken(response.data.login.accessToken)
        }
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}
