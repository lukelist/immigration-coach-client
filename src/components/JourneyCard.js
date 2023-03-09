import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL2 = process.env.REACT_APP_API_URL

function JourneyCard() {
  const { newhireId } = useParams();

  const [journey, setJourney] = useState(undefined);

  const getJourney = () => {
    console.log("HERE");
    axios
      .get(`${API_URL2}/journey/${newhireId}/`)
      .then((response) => {
        console.log("AXIOS");
        setJourney(response.data[0]);
        console.log("JOURNEY DATA ISHERE!", response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getJourney();
  }, []);

  return (
    <>
      {journey == undefined ? (
        <p>loading</p>
      ) : (
        <div className="JourneyCard">
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
                <td className="tg-smii">{journey.stages.intro.kickOffCall}</td>
                <td className="tg-smii">
                  {journey.stages.intro.documentsReceived}
                </td>
                <td className="tg-k12w">
                  {journey.stages.anerkennung.introEmailSent}
                </td>
                <td className="tg-k12w">
                  {journey.stages.anerkennung.anerkennungResponseReceived}
                </td>
                <td className="tg-1zu3">
                  {journey.stages.vorabpruefung.formsRequested}
                </td>
                <td className="tg-1zu3">
                  {journey.stages.vorabpruefung.docsReceived}
                </td>
                <td className="tg-1zu3">
                  {journey.stages.vorabpruefung.requestSubmitted}
                </td>
                <td className="tg-1zu3">
                  {journey.stages.vorabpruefung.responseScannedandSent}
                </td>
                <td className="tg-ft9w">
                  {journey.stages.visa.visaApptBooked}
                </td>
                <td className="tg-utzv">
                  {journey.stages.visa.visaAppointmentDate}
                </td>
                <td className="tg-ft9w">
                  {journey.stages.visa.visaScanReceived}
                </td>
                <td className="tg-utzv">
                  {journey.stages.visa.visaValidUntil}
                </td>
                <td className="tg-1ofu">
                  {journey.stages.relocation.arrivalDate}
                </td>
                <td className="tg-rq9j">
                  {journey.stages.relocation.coachMatched}
                </td>
                <td className="tg-1ofu">{journey.stages.relocation.coach}</td>
                <td className="tg-1ofu">
                  {journey.stages.relocation.beginsOn}
                </td>
                <td className="tg-rq9j">
                  {journey.stages.relocation.numberOfWeeks}
                </td>
                <td className="tg-1ofu">{journey.stages.relocation.endDate}</td>
                <td className="tg-jevg">
                  {journey.stages.workPermit.formsRequested}
                </td>
                <td className="tg-jevg">
                  {journey.stages.workPermit.formsRecieved}
                </td>
                <td className="tg-jevg">
                  {journey.stages.workPermit.submitted}
                </td>
                <td className="tg-jevg">
                  {journey.stages.workPermit.apptDateGiven}
                </td>
                <td className="tg-r8eb">
                  {journey.stages.workPermit.appointmentDate}
                </td>
                <td className="tg-hqmf">{journey.stages.workPermit.issued}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default JourneyCard;
