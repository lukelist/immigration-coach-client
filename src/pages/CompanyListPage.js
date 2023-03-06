import { useState, useEffect } from "react";
import axios from "axios";

import CompanyCard from "./../components/CompanyCard";

const API_URL = "http://localhost:5005";

function CompanyListPage() {
  const [companies, setCompanies] = useState([]);
  console.log(companies);

  const getAllCompanies = () => {
    axios
      .get(`${API_URL}/companies`)
      .then((response) => setCompanies(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div className="CompanyListPage">
      {companies.map((company) => {
        return <CompanyCard key={company._id} {...company} />;
      })}
    </div>
  );
}

export default CompanyListPage;
