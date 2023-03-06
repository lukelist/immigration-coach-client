import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddCompany from "./components/AddCompany";
import CompanyListPage from "./pages/CompanyListPage";
import AddNewHire from "./components/AddNewHire";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";
import JourneyCard from "./components/JourneyCard";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addCompany" element={<AddCompany />} />
        <Route path="/companies" element={<CompanyListPage />} />
        <Route path="/companies/:companyId" element={<CompanyDetailsPage />} />
        <Route path="/addNewHire/:companyId" element={<AddNewHire />} />
      </Routes>
    </div>
  );
}

export default App;
