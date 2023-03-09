import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddNewHire from "../components/AddNewHire";
import NewHireCard from "../components/NewHireCard";

const API_URL2 = process.env.REACT_APP_API_URL

function CompanyDetailsPage(props) {
  const [company, setCompany] = useState(null);
  const { companyId } = useParams();

  const getCompany = () => {
    axios
      .get(`${API_URL2}/companies/${companyId}`)
      .then((response) => {
        const oneCompany = response.data;
        setCompany(oneCompany);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <div className="business-card">
      {company && (
        <>
          <h1>{company.companyName}</h1>
          <p>{company.address}</p>
          <p>{company.phoneNumber}</p>
          <p>{company.website}</p>
          <p>{company.mainContactName}</p>
          <p>{company.mainContactEmail}</p>

        </>
      )}


      {company &&
        company.newHires.map((newHire) => {
          return <NewHireCard key={newHire._id} {...newHire} />;
        })}

      
      <Link to={`/addNewHire/${companyId}`}>
        <button className="button1">Add a New Hire</button>
      </Link>
      <Link to="/companies">
        <button className="button4">Back to Companies</button>
      </Link>
    </div>
  );
}

export default CompanyDetailsPage;
