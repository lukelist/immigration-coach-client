function NewHireCard({ firstName, lastName, company, caseOwner, nationality, comingFrom,bookedOn,startDate,spouse, children, relocationPackage, immigrationPackage, anerkennung, vorabpruefung, comments}) {
  return (
    <div className="NewHireCard">
      <h3>
        {firstName} {lastName}
      </h3>
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
      </table>

<p>{comments}</p>

    </div>
  );
}

export default NewHireCard;
