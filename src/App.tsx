import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from './components/Dashboard';
import { UsersList } from './utils/admin-source/Users';
import { PostList, PostEdit, PostCreate } from './utils/admin-source/Posts';
import authProvider from './auth/authProvider';

import './App.css';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UsersList} />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  );
};

export default App;
