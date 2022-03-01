import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const[loginuser,setLoginuser]= useContext(Context);
    
    return (
        <Route
        {...rest}
        render={({ location }) =>
          setLoginuser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;