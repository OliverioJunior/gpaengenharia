import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { LoginOrSingIn } from '../pages/LoginOrSingIn';
export const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginOrSingIn" element={<LoginOrSingIn />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};
