import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import Amplify, { API } from 'aws-amplify';

interface User {
  id: string | number;
  name: string;
}

const initUser: User = {
  id: '',
  name: '',
};

const userApi = 'user';
const pathUser = '/user';

const helloApi = 'hello';
const pathHello = '/hello';

const Dashboard = () => {
  const [user, setUser] = useState<User>(initUser);
  const [input, setInput] = useState('');

  const getUser = () => {
    API.get(userApi, `${pathUser}/${input}`, {})
      .then((response) => setUser({ ...response }))
      .catch((er) => console.log(er));
  };

  const getHello = () => {
    API.get(helloApi, pathHello, {})
      .then((response) => console.log(response))
      .catch((er) => console.log(er));
  };

  const getHelloLayer = () => {
    API.get('layerapi', '/layerapi', {})
      .then((response) => console.log(response))
      .catch((er) => console.log(er));
  };

  return (
    <Card>
      <CardHeader title={process.env.REACT_APP_TITLE} />
      <CardContent>React Admin</CardContent>
      <div>
        <span>id: {user.id}</span>
        <br />
        <span>user: {user.name}</span>
      </div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={getUser}>Get</button>
      <button onClick={getHello}>hello</button>
      <button onClick={getHelloLayer}>helloLayer</button>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
        amet repellendus ullam dignissimos reiciendis quisquam ducimus a! Quod
        nisi animi eos numquam ea. Deleniti voluptatum harum incidunt iure
        numquam.
      </CardContent>
    </Card>
  );
};

export default Dashboard;
