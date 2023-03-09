import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL2 = process.env.REACT_APP_API_URL;

function JourneyCard() {
  const { newhireId } = useParams();

  const [journey, setJourney] = useState(undefined);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    axios.put(`${API_URL2}/modify-date`, journey).then(() => {
      getJourney();
    });
  };

  const getJourney = () => {
    axios
      .get(`${API_URL2}/journey/${newhireId}/`)
      .then((response) => {
        setJourney(response.data[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getJourney();
  }, []);

  function changeDate(date) {
    return new Date(date).toDateString();
  }

  return (
    <>
      {journey == undefined ? (
        <p>loading</p>
      ) : (
        <div className="journeyCard">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-lwxg" colspan="2" rowspan="2">
                  INTRO
                </th>
                <th className="tg-6e0o" colspan="2" rowspan="2">
                  ANERKENNUNG
                </th>
                <th className="tg-vs8g" colspan="4" rowspan="2">
                  VORABPRÜFUNG
                </th>
                <th className="tg-qvz6" colspan="4" rowspan="2">
                  VISA SUPPORT
                </th>
                <th className="tg-nz37" colspan="6" rowspan="2">
                  RELOCATION SUPPORT
                </th>
                <th className="tg-8267" colspan="6" rowspan="2">
                  WORK PERMIT SUPPORT
                </th>
              </tr>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-smii">Kick-Off Call</td>
                <td className="tg-smii">Docs Received</td>
                <td className="tg-k12w">Anerkennung Intro Email Sent</td>
                <td className="tg-k12w">Anerkennung Received</td>
                <td className="tg-1zu3">Forms Requested</td>
                <td className="tg-1zu3">Docs Received</td>
                <td className="tg-1zu3">Req to AfA Submitted</td>
                <td className="tg-1zu3">VA Response Scan/Sent</td>
                <td className="tg-ft9w">Visa Appt Booked</td>
                <td className="tg-ft9w">VISA APPT</td>
                <td className="tg-ft9w">Visa Scan Received</td>
                <td className="tg-ft9w">VISA VALID UNTIL</td>
                <td className="tg-rq9j">ARRIVAL DATE</td>
                <td className="tg-rq9j">Coach Matched</td>
                <td className="tg-rq9j">COACH</td>
                <td className="tg-rq9j">BEGINS ON</td>
                <td className="tg-rq9j"># OF WKS</td>
                <td className="tg-rq9j">ENDS ON</td>
                <td className="tg-jevg">Docs/Forms Requested</td>
                <td className="tg-jevg">Docs Recieved</td>
                <td className="tg-jevg">Submitted to BIS</td>
                <td className="tg-jevg">Appt Date Given</td>
                <td className="tg-jevg">WORK PERMIT APPT</td>
                <td className="tg-jevg">WP Issued</td>
              </tr>
              <tr>
                <td className="tg-smii">
                  {changeDate(journey.stages.intro.kickOffCall)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.intro.kickOffCall = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-smii" value={input}>
                  {changeDate(journey.stages.intro.documentsReceived)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.intro.documentsReceived = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-k12w">
                  {changeDate(journey.stages.anerkennung.introEmailSent)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.anerkennung.introEmailSent =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-k12w">
                  {changeDate(
                    journey.stages.anerkennung.anerkennungResponseReceived
                  )}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.anerkennung.anerkennungResponseReceived =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-1zu3">
                  {changeDate(journey.stages.vorabpruefung.formsRequested)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.vorabpruefung.formsRequested =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-1zu3">
                  {changeDate(journey.stages.vorabpruefung.docsReceived)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.vorabpruefung.docsReceived =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-1zu3">
                  {changeDate(journey.stages.vorabpruefung.requestSubmitted)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.vorabpruefung.requestSubmitted =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-1zu3">
                  {changeDate(
                    journey.stages.vorabpruefung.responseScannedandSent
                  )}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.vorabpruefung.responseScannedandSent =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-ft9w">
                  {changeDate(journey.stages.visa.visaApptBooked)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.visa.visaApptBooked = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-utzv">
                  {changeDate(journey.stages.visa.visaAppointmentDate)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.visa.visaAppointmentDate = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-ft9w">
                  {changeDate(journey.stages.visa.visaScanReceived)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.visa.visaScanReceived = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-utzv">
                  {changeDate(journey.stages.visa.visaValidUntil)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.visa.visaValidUntil = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-1ofu">
                  {changeDate(journey.stages.relocation.arrivalDate)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.relocation.arrivalDate = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-rq9j">
                  {changeDate(journey.stages.relocation.coachMatched)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.relocation.coachMatched = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-1ofu">{journey.stages.relocation.coach}</td>
                <td className="tg-1ofu">
                  {changeDate(journey.stages.relocation.beginsOn)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.relocation.beginsOn = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-rq9j">
                  {journey.stages.relocation.numberOfWeeks}
                </td>
                <td className="tg-1ofu">
                  {changeDate(journey.stages.relocation.endDate)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.relocation.endDate = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-jevg">
                  {changeDate(journey.stages.workPermit.formsRequested)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.workPermit.formsRequested =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-jevg">
                  {changeDate(journey.stages.workPermit.formsRecieved)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.workPermit.formsRecieved = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-jevg">
                  {changeDate(journey.stages.workPermit.submitted)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.workPermit.submitted = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-jevg">
                  {changeDate(journey.stages.workPermit.apptDateGiven)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.workPermit.apptDateGiven = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-r8eb">
                  {changeDate(journey.stages.workPermit.appointmentDate)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.workPermit.appointmentDate =
                        e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
                <td className="tg-hqmf">
                  {changeDate(journey.stages.workPermit.issued)}
                  <input
                    type="date"
                    name=""
                    min="2023-01-01"
                    max="2030-12-31"
                    onChange={(e) =>
                      (journey.stages.workPermit.issued = e.target.value)
                    }
                  />
                  <button onClick={() => handleSubmit()}>submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default JourneyCard;
