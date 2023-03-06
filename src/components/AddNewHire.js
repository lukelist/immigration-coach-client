import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const API_URL = "http://localhost:5005";

function AddNewHire(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [caseOwner, setCaseOwner] = useState("");
  const [nationality, setNationality] = useState("");
  const [comingFrom, setComingFrom] = useState("");
  const [bookedOn, setBookedOn] = useState("");
  const [startDate, setStartDate] = useState("");
  const [spouse, setSpouse] = useState("");
  const [children, setChildren] = useState(false);
  const [relocationPackage, setRelocationPackage] = useState(0);
  const [immigrationPackage, setImmigrationPackage] = useState("");
  const [anerkennung, setAnerkennung] = useState(false);
  const [vorabpruefung, setVorabpruefung] = useState(false);
  const [comments, setComments] = useState("");
  const [company, setCompany] =useState("");

  const {companyId} = useParams()

  const getCompany = () => {
    axios
      .get(`${API_URL}/companies/${companyId}`)
      .then((response) => setCompany(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCompany();
  }, []);

  console.log(companyId)
  const handleSubmit = (e) => {
    e.preventDefault();


    const requestBody = {
      firstName,
      lastName,
      caseOwner,
      nationality,
      comingFrom,
      bookedOn,
      startDate,
      spouse,
      children,
      relocationPackage,
      immigrationPackage,
      anerkennung,
      vorabpruefung,
      comments,
      companyId,
    };

    axios
      .post(`${API_URL}/newhires`, requestBody)
      .then((response) => {
        setFirstName("");
        setLastName("");
        setCaseOwner("");
        setNationality("");
        setComingFrom("");
        setBookedOn("");
        setStartDate("");
        setSpouse(false);
        setChildren(false);
        setRelocationPackage(0);
        setImmigrationPackage("");
        setAnerkennung(false);
        setVorabpruefung(false);
        setComments("");

        // to refresh the company details

        props.refreshCompany();
      })
      .catch((error) => console.log(error));
  };
console.log(spouse)

  return (
    <div className="addNewHire">
      <h3>Add a New-Hire</h3>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        {/* journey here ?? */}

        <label>Company:</label>
        <p>{company.companyName}</p>


        <label>Case-Owner:</label>
        <select name="caseOwner" onChange={(e) => setCaseOwner(e.target.value)}>
          <option value={caseOwner}>Ana</option>
          <option value={caseOwner}>Dimi</option>
          <option value={caseOwner}>Luke</option>
        </select>

        <label>Nationality:</label>
        <select
          name="nationality"
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value={nationality}>Argentina</option>
          <option value={nationality}>Brazil</option>
          <option value={nationality}>Egypt</option>
          <option value={nationality}>India</option>
          <option value={nationality}>Pakistan</option>
          <option value={nationality}>Russia</option>
          <option value={nationality}>Singapore</option>
          <option value={nationality}>Turkey</option>
          <option value={nationality}>UAE</option>
          <option value={nationality}>USA</option>
        </select>

        <label>Coming From:</label>
        <select
          name="comingFrom"
          onChange={(e) => setComingFrom(e.target.value)}
        >
          <option value={comingFrom}>Argentina</option>
          <option value={comingFrom}>Brazil</option>
          <option value={comingFrom}>Egypt</option>
          <option value={comingFrom}>India</option>
          <option value={comingFrom}>Pakistan</option>
          <option value={comingFrom}>Russia</option>
          <option value={comingFrom}>Singapore</option>
          <option value={comingFrom}>Turkey</option>
          <option value={comingFrom}>UAE</option>
          <option value={comingFrom}>USA</option>
        </select>

        <label>Booked On:</label>
        <input
          type="date"
          name="bookedOn"
          value={bookedOn}
          min="2023-01-01"
          max="2030-12-31"
          onChange={(e) => setBookedOn(e.target.value)}
        />

        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          min="2023-01-01"
          max="2030-12-31"
          onChange={(e) => setStartDate(e.target.value)}
        />

        <fieldset>
          <legend>Spouse:</legend>

          <div>
            <input
              type="radio"
              name="spouse"
              value={spouse}
              onChange={(e) => setSpouse(e.target.value)}
              checked
            />
            <label>true</label>
          </div>

          <div>
            <input
              type="radio"
              name="spouse"
              value={spouse}
              onChange={(e) => setSpouse(e.target.value)}
              checked
            />
            <label>false</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Children:</legend>

          <div>
            <input type="radio" name="children" value={children} checked />
            <label>true</label>
          </div>

          <div>
            <input type="radio" name="children" value={children} checked />
            <label>false</label>
          </div>
        </fieldset>

        <label>Relocaton Package:</label>
        <select
          name="relocationPackage"
          onChange={(e) => setRelocationPackage(e.target.value)}
        >
          <option value={relocationPackage}>0</option>
          <option value={relocationPackage}>5</option>
          <option value={relocationPackage}>12</option>
          <option value={relocationPackage}>20</option>
        </select>

        <label>Immigration Package:</label>
        <select
          name="immigrationPackage"
          onChange={(e) => setImmigrationPackage(e.target.value)}
        >
          <option value={immigrationPackage}>Arbeitgeberwechsel</option>
          <option value={immigrationPackage}>Family Visa</option>
          <option value={immigrationPackage}>
            Family Visa and Work Permit
          </option>
          <option value={immigrationPackage}>Family Work Permit</option>
          <option value={immigrationPackage}>Renewal</option>
          <option value={immigrationPackage}>Visa Only</option>
          <option value={immigrationPackage}>Visa and Work Permit</option>
          <option value={immigrationPackage}>Work Permit Only</option>
        </select>

        <fieldset>
          <legend>Anerkennung:</legend>

          <div>
            <input
              type="radio"
              name="anerkennung"
              value={anerkennung}
              checked
            />
            <label>true</label>
          </div>

          <div>
            <input
              type="radio"
              name="anerkennung"
              value={anerkennung}
              checked
            />
            <label>false</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Vorabprüfung:</legend>

          <div>
            <input
              type="radio"
              name="vorabpruefung"
              value={vorabpruefung}
              checked
            />
            <label>true</label>
          </div>

          <div>
            <input
              type="radio"
              name="vorabpruefung"
              value={vorabpruefung}
              checked
            />
            <label>false</label>
          </div>
        </fieldset>

        <button type="submit">Add New-Hire</button>
      </form>
    </div>
  );
}

export default AddNewHire;
