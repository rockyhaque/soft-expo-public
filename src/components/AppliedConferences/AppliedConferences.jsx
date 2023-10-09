import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredConference } from "../../utility/localStorage";

const AppliedConferences = () => {
  const conferences = useLoaderData();

  const [appliedConferences, setAppliedConferences] = useState([]);
  const [displayConferences, setDisplayConferences] = useState([]);

  const handleConferencesFilter = filter => {
    if(filter === 'all'){
      setDisplayConferences(appliedConferences);
    }
    else if(filter === 'online'){
      const onlineConferences = appliedConferences.filter(conference => conference.online_or_offline === "Online");
      setDisplayConferences(onlineConferences);
    }
    else if(filter === 'offline'){
      const offlineConferences = appliedConferences.filter(conference => conference.online_or_offline = 'Offline');
      setDisplayConferences(offlineConferences);
    }
  }


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
      setDisplayConferences(conferencesApplied);
    }
  }, [conferences]);
  return (
    <div>
      <h2>Conferences I applied : {appliedConferences.length}</h2>

      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleConferencesFilter('all')}><a>All</a></li>
          <li onClick={() => handleConferencesFilter('online')}><a>Online</a></li>
          <li onClick={() => handleConferencesFilter('offline')}><a>Offline</a></li>
        </ul>
      </details>

      <ul>
        {displayConferences.map((conference) => (
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
