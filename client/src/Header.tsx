import React from 'react'
import { Link } from 'react-router-dom'
import { useMeQuery, useLoginMutation } from './generated/graphql';
import { setAccessToken } from './accessToken';

interface Props {}

export const Header: React.FC<Props> = () => {
  const {data, loading} = useMeQuery();
  const [logout, { client }] = useLoginMutation();

  let body: any = null;

  if (loading) {
    body = null;
  }
  else if (data && data.me) {
    body = <div>Welcome, {data.me.email}</div>
  }
  else {
    body = <div>Not logged in</div>
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/bye">Bye</Link>
      </div>
      <div>
        { !loading && data && data.me ? <button
          onClick={async () => {
            await logout();
            setAccessToken("");
            await client!.resetStore();
          }}
        >
          Logout
        </button>
        : null }
      </div>
      { body }
    </header>
  ); 
}
