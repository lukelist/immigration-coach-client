import { useState } from "react";
import { Link } from "react-router-dom";

function NewHireCard({
  _id,
  firstName,
  lastName,
  company,
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
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="NewHireCard">
     
        <h3 onClick={() => setShow(!show)}>
          {firstName} {lastName}
        </h3>

      {show && (
        <>
          <table>
            <tr>
              <th>Category</th>
              <th>Input</th>
            </tr>
            <tr>
              <td>Company:</td>
              <td>{company}</td>
            </tr>
            <tr>
              <td>Case-owner:</td>
              <td>{caseOwner}</td>
            </tr>
            <tr>
              <td>Nationality:</td>
              <td>{nationality}</td>
            </tr>
            <tr>
              <td>Coming from:</td>
              <td>{comingFrom}</td>
            </tr>
            <tr>
              <td>Booked On:</td>
              <td>{bookedOn}</td>
            </tr>
            <tr>
              <td>Start Date:</td>
              <td>{startDate}</td>
            </tr>
            <tr>
              <td>Spouse:</td>
              <td>{spouse}</td>
            </tr>
            <tr>
              <td>Children:</td>
              <td>{children}</td>
            </tr>
            <tr>
              <td>Relocation Package:</td>
              <td>{relocationPackage}</td>
            </tr>
            <tr>
              <td>Immigration Package:</td>
              <td>{immigrationPackage}</td>
            </tr>
            <tr>
              <td>Anerkennung:</td>
              <td>{anerkennung}</td>
            </tr>
            <tr>
              <td>Vorabprüfung:</td>
              <td>{vorabpruefung}</td>
            </tr>
            <tr>
              <td>Comments:</td>
              <td>{comments}</td>
            </tr>
            <tr>
              <td>
                {_id}
              </td>
            </tr>
          </table>
          <Link to={`/journey/${_id}`} className="button2"><button>Journey</button></Link>
        </>
      )}
    </div>
  );
}

export default NewHireCard;
