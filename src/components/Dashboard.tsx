import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

//call api lambda function

import Amplify, { API } from 'aws-amplify';

const myAPI = 'newuser';
const path = '/newusers';

interface User {
  id: string | number;
  name: string;
}

let initUser: User = {
  id: 1,
  name: 'user',
};

const Dashboard = () => {
  const [user, setuser] = useState<User>(initUser);
  const [inputId, setInputId] = useState<string>('');

  const userHandle = () => {
    API.get(myAPI, `${path}/${inputId}`, {}).then((respose) =>
      setuser({ ...respose })
    );

    fetch(
      'https://urte6ca9l0.execute-api.us-east-1.amazonaws.com/default/hello'
    ).then((res) => console.log(res));
  };
  const onchangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(event.target.value);
  };
  return (
    <Card>
      <CardHeader title={process.env.REACT_APP_TITLE} />
      <CardContent>React Admin</CardContent>
      <CardContent>
        <p>user</p>
        <p>
          {user.id} {user.name}
        </p>
        <input
          value={inputId}
          onChange={onchangeHandle}
          type="number"
          placeholder="id user"
        />
        <button onClick={userHandle}>get user</button>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
          amet repellendus ullam dignissimos reiciendis quisquam ducimus a! Quod
          nisi animi eos numquam ea. Deleniti voluptatum harum incidunt iure
          numquam.
        </p>
      </CardContent>
    </Card>
  );
};
export default Dashboard;
