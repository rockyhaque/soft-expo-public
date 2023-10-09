import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredConference } from "../../utility/localStorage";

const AppliedConferences = () => {
  const conferences = useLoaderData();

  const [appliedConferences, setAppliedConferences] = useState([]);

  useEffect(() => {
    const storedConferenceIds = getStoredConference();
    if (conferences.length > 0) {
      // const conferencesApplied = conferences.filter(conference => storedConferenceIds.includes(conference.id));

      const conferencesApplied = [];
      for (const id of storedConferenceIds) {
        const conference = conferences.find(
          (conference) => conference.id === id
        );
        if (conference) {
          conferencesApplied.push(conference);
        }
      }

      // console.log(conferences, storedConferenceIds, conferencesApplied);
      setAppliedConferences(conferencesApplied);
    }
  }, []);
  return (
    <div>
      <h2>Conferences I applied : {appliedConferences.length}</h2>

      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>All</a></li>
          <li><a>Online</a></li>
          <li><a>Offline</a></li>
        </ul>
      </details>

      <ul>
        {appliedConferences.map((conference) => (
          <li key={conference.id}>
            <span>
                {conference.conference_title} 
                {conference.company_name} : {conference.online_or_offline}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedConferences;
