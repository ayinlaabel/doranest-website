import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about/*" element={<AboutPage />} />
        <Route path="programs/*" element={<ProgramsPage />} />
        <Route path="gallery/*" element={<GalleryPage />} />
        <Route path="admissions/*" element={<AdmissionsPage />} />
        <Route path="contact/*" element={<ContactPage />} />
        <Route path="enroll" element={<Navigate to="/admissions#enroll" replace />} />
        {/* Unknown paths still open the home page, matching the previous behaviour. */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
