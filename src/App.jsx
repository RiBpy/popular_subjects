import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import PopularSubjects from "./components/PopularSubjects";
import SubjectDetails from "./components/SubjectDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PopularSubjects />} />
        <Route path="/subject/:id" element={<SubjectDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;