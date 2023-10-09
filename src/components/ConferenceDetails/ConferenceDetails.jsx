import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveConference } from "../../utility/localStorage";

const ConferenceDetails = () => {
    const conferences = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const conference = conferences.find(conference => conference.id === idInt);
    console.log(conference);

    const handleBook = () => {
        saveConference(idInt);
        toast('Congratulations! Conference Booked Sucessfully.')
    }

    return (
        <div>
            <h1 className="text-center text-4xl my-10"> {conference.conference_title}</h1>
            <div>
                <img className="rounded-2xl" src={conference.cover} alt="" />
            </div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-full">

                    <h2 className="text-2xl my-9">{conference.conference_description}</h2>
                    <h2 className="text-2xl my-3">{conference.conference_responsibility}</h2>
                    <h2 className="text-2xl my-3">{conference.educational_requirements}</h2>
                    <h2 className="text-2xl my-3">{conference.experiences}</h2>
                    <h2 className="text-2xl my-3">{conference.contact_information.phone}</h2>
                    <h2 className="text-2xl my-3">{conference.contact_information.email}</h2>
                    <h2 className="text-2xl my-3">{conference.contact_information.address}</h2>

                    <button onClick={handleBook} className="btn btn-outline btn-info w-28 ">Book Now</button>

                </div>
                {/* <div className="border">
                    <h2 className="text-2xl">Side bar</h2>
                    <button onClick={handleBook} className="btn btn-outline btn-info w-full">Book Now</button>
                </div> */}
                <ToastContainer />
            </div>
        </div>
    );
};

export default ConferenceDetails;