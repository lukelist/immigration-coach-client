import { useState } from "react";
import axios from "axios";


const API_URL = "http://localhost:5005";
const API_URL2 = process.env.REACT_APP_API_URL

function AddCompany(props) {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [mainContactName, setMainContactName] = useState("");
  const [mainContactEmail, setMainContactEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      companyName,
      address,
      phoneNumber,
      website,
      mainContactName,
      mainContactEmail,
    };

    axios
      .post(`${API_URL2}/company`, requestBody)
      .then((response) => {
        setCompanyName("");
        setAddress("");
        setPhoneNumber("");
        setWebsite("");
        setMainContactName("");
        setMainContactEmail("");
        props.refreshCompanies();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addCompany">
      <h3>Add A Company</h3>

      <form onSubmit={handleSubmit}>
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label>Website:</label>
        <input
          type="url"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <label>Main Contact Name:</label>
        <input
          type="text"
          name="mainContactName"
          value={mainContactName}
          onChange={(e) => setMainContactName(e.target.value)}
        />

        <label>Main Contact Email:</label>
        <input
          type="email"
          name="mainContactEmail"
          value={mainContactEmail}
          onChange={(e) => setMainContactEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCompany;
