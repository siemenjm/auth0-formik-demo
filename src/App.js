import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Protected from './pages/Protected';
import Unprotected from './pages/Unprotected';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="protected-page" element={<Protected />} />
        <Route path="unprotected-page" element={<Unprotected />} />
      </Route>
    </Routes>
  );
}
