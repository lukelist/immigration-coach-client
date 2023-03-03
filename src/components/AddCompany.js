import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";


function AddCompany(props) {
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [mainContactName, setMainContactName] = useState("");
    const [mainContactEmail, setMainContactEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const requestBody = { companyName, address, phoneNumber, website, mainContactName, mainContactEmail };

        axios
        .post(`${API_URL}/api/companies`, requestBody)
        .then((response) => {
          setCompanyName("");
          setAddress("");
          setPhoneNumber("");
          setWebsite("");
          setMainContactName("");
          setMainContactEmail("");
          props.refreshProjects();
        })
        .catch((error) => console.log(error));
    };

    return (

    )


}

export default AddCompany;