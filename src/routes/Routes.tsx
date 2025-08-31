import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetStyles from '../app_styles';
import Blank from '../pages/BlankPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ResetStyles /> 
      <Routes>
        <Route path="/blank" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}
