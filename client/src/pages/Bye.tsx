import React from 'react'
import { useByeQuery } from '../generated/graphql'

interface Props {}

export const Bye: React.FC<Props> = () => {
  const { data, loading, error } = useByeQuery({
    fetchPolicy: 'network-only'
  });
  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return <div>{data.bye}</div>;
}
