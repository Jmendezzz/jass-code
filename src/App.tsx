import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './components/pages/Home';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ServiceDetailPage from './components/pages/ServiceDetailPage';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path="/services/:serviceName" element={<ServiceDetailPage />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App
