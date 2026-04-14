import { useContext } from 'react';
import { ImContext } from '../App';

const Profile = () => {
  const { data, setData } = useContext(ImContext);
  return <h1>Hello, {data.name}</h1>;
};