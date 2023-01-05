import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import API from './pages/API';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Protected from './pages/Protected';
import Unprotected from './pages/Unprotected';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="unprotected-page" element={<Unprotected />} />
        <Route path="protected-page" element={<Protected />} />
        <Route path="protected-api" element={<API />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
