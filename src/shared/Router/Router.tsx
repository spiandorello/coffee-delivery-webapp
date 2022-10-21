import { Routes, Route } from 'react-router-dom';

import { routes } from '../../pages/routes';

export function RouterContainer() {
  return (
    <Routes>
      {routes.map(({
        path,
        element: Screen
      }) => {
        return(
          <Route
            key={path}
            path={path}
            element={<Screen />}
          />
        )
      })}
    </Routes>
  );
}