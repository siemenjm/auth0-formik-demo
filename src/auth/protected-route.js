import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';

export default function ProtectedRoute({ component, ...args }) {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <h2>Loading...</h2>,
      })}
      {...args}
    />
  );
}
