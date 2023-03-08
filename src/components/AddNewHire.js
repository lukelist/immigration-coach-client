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
  const [company, setCompany] = useState("");

  const { companyId } = useParams();

  const getCompany = () => {
    axios
      .get(`${API_URL}/companies/${companyId}`)
      .then((response) => setCompany(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCompany();
  }, []);

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

        // props.refreshCompany();
      })
      .catch((error) => console.log(error));
  };

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
        {console.log(caseOwner)}
        <select name="caseOwner" onChange={(e) => setCaseOwner(e.target.value)}>
          <option value="Ana">Ana</option>
          <option value="Dimi">Dimi</option>
          <option value="Luke">Luke</option>
        </select>

        <label>Nationality:</label>
        <select
          name="nationality"
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="Argentina">Argentina</option>
          <option value="Brazil">Brazil</option>
          <option value="Egypt">Egypt</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Russia">Russia</option>
          <option value="Singapore">Singapore</option>
          <option value="Turkey">Turkey</option>
          <option value="UAE">UAE</option>
          <option value="USA">USA</option>
        </select>

        <label>Coming From:</label>
        <select
          name="comingFrom"
          onChange={(e) => setComingFrom(e.target.value)}
        >
          <option value="Argentina">Argentina</option>
          <option value="Brazil">Brazil</option>
          <option value="Egypt">Egypt</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Russia">Russia</option>
          <option value="Singapore">Singapore</option>
          <option value="Turkey">Turkey</option>
          <option value="UAE">UAE</option>
          <option value="USA">USA</option>
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
              value="true"
              checked
              // onChange={(e) => setSpouse(e.target.value)}
            />
            <label>yes</label>
          </div>

          <div>
            <input
              type="radio"
              name="spouse"
              value="false"
              checked
              // onChange={(e) => setSpouse(e.target.value)}
            />
            <label>no</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Children:</legend>

          <div>
            <input
              type="radio"
              name="children"
              value="true"
              checked
              // onChange={(e) => setChildren(e.target.value)}
            />
            <label>yes</label>
          </div>

          <div>
            <input
              type="radio"
              name="children"
              value="false"
              checked
              // onChange={(e) => setChildren(e.target.value)}
            />
            <label>no</label>
          </div>
        </fieldset>

        <label>Relocaton Package:</label>
        <select
          name="relocationPackage"
          onChange={(e) => setRelocationPackage(e.target.value)}
        >
          <option value="0">0</option>
          <option value="5">5</option>
          <option value="12">12</option>
          <option value="20">20</option>
        </select>

        <label>Immigration Package:</label>
        <select
          name="immigrationPackage"
          onChange={(e) => setImmigrationPackage(e.target.value)}
        >
          <option value="Arbeitgeberwechsel">Arbeitgeberwechsel</option>
          <option value="Family Visa">Family Visa</option>
          <option value="Family Visa and Work Permit">
            Family Visa and Work Permit
          </option>
          <option value="Family Work Permit">Family Work Permit</option>
          <option value="Renewal">Renewal</option>
          <option value="Visa Only">Visa Only</option>
          <option value="Visa and Work Permit">Visa and Work Permit</option>
          <option value="Work Permit Only">Work Permit Only</option>
        </select>

        <fieldset>
          <legend>Anerkennung:</legend>

          <div>
            <input
              type="radio"
              name="anerkennung"
              value="true"
              checked
              // onChange={(e) => setAnerkennung(e.target.value)}
            />
            <label>yes</label>
          </div>

          <div>
            <input
              type="radio"
              name="anerkennung"
              value="false"
              checked
              // onChange={(e) => setAnerkennung(e.target.value)}
            />
            <label>no</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Vorabprüfung:</legend>

          <div>
            <input
              type="radio"
              name="vorabpruefung"
              value="true"
              checked
              // onChange={(e) => setVorabpruefung(e.target.value)}
            />
            <label>yes</label>
          </div>

          <div>
            <input
              type="radio"
              name="vorabpruefung"
              value="false"
              checked
              // onChange={(e) => setVorabpruefung(e.target.value)}
            />
            <label>no</label>
          </div>
        </fieldset>

        <textarea
          value={comments}
          placeholder="Any additional information here..."
          onChange={(e) => setComments(e.target.value)}
        ></textarea>

        <button type="submit">Add New-Hire</button>
      </form>
    </div>
  );
}

export default AddNewHire;
