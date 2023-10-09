const getStoredConference = () => {
    const storedConference = localStorage.getItem('Conference-booking');
    if(storedConference){
        return JSON.parse(storedConference)
    }
    return [];
}

const saveConference = id =>{
    const storedConferences = getStoredConference();
    const exists = storedConferences.find(conferenceId => conferenceId === id);
    if(!exists){
        storedConferences.push(id);
        localStorage.setItem('Conference-booking', JSON.stringify(storedConferences))
    }
}

export {getStoredConference, saveConference}