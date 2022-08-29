import React from 'react';

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  useRecordContext,
} from 'react-admin';

type PropsMyUrlField = {
  source: string;
};

const MyUrlField: React.FC<PropsMyUrlField> = ({ source }) => {
  const record = useRecordContext();
  return record ? <a href={record[source]}>{record[source]}</a> : null;
};

export const UsersList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <UrlField source="website" />
        <MyUrlField source="company.name" />
      </Datagrid>
    </List>
  );
};
