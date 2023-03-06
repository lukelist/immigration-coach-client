import { Link } from "react-router-dom";

function CompanyCard({
  companyName,
  _id,
}) {
  return (
    <div className="companyCard">
      <Link to={`/companies/${_id}`}>
        <h3>{companyName}</h3>
      </Link>
    </div>
  );
}

export default CompanyCard;
