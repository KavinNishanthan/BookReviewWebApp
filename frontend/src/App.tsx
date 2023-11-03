import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import authRoutes from './Router/auth-routes';
import nonAuthRoutes from './Router/non-auth-routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            {authRoutes.navigationRouts.map((data) => {
              return <Route path={data.path} key={data.name} element={data.component} />;
            })}
          </Route>
          <Route>
            {nonAuthRoutes.map((data) => {
              return <Route path={data.path} element={data.component} key={data.name} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
