// import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import AUTH from '../utils/auth';
import SearchLibrary from '../pages/SearchLibrary';

const SearchRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      AUTH.loggedIn() ? (
        <SearchLibrary {...props} />
      ) : (
        <Navigate to="/error" />
      )
    }
  />
);

export default SearchRoute;