import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';

// export default function ProtectedRoute({ element, ...args }) {
//   return (
//     <Route
//       element={withAuthenticationRequired(element, {
//         onRedirecting: () => <h2>Loading...</h2>,
//       })}
//       {...args}
//     />
//   );
// }

export const ProtectedRoute = ({ element, ...args }) => (
  <Route
    element={withAuthenticationRequired(element, {
      onRedirecting: () => <h2>Loading...</h2>,
    })}
    {...args}
  />
);
