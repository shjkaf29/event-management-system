import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import EventOrganizerDashboard from './pages/EventOrganizerDashboard';
import GuestView from './pages/GuestView';
import LoginPage from './pages/LoginPage';

function App() {
  const role = "admin"; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={role === "admin" ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/student" element={role === "student" ? <StudentDashboard /> : <Navigate to="/" />} />
        <Route path="/organizer" element={role === "organizer" ? <EventOrganizerDashboard /> : <Navigate to="/" />} />
        <Route path="/guest" element={<GuestView />} />
      </Routes>
    </Router>
  );
}

export default App;
