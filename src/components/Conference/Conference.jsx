import { MdLocationOn } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";

const Conference = ({ conference }) => {
  const { id, cover, conference_title, company_name, online_or_offline, location, conference_type, time} = conference;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-60 w-96 rounded-lg"
          src={cover}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{conference_title}</h2>
        <p>{company_name}</p>
        <div className="text-center mb-7">
            <button className="px-3 py-2 border rounded border-amber-800 font-extrabold mr-5" >{online_or_offline}</button>
            <button className="px-3 py-2 border rounded border-amber-800 font-extrabold ">{conference_type}</button>
        </div>
        <div className="flex justify-around">
            <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
            <h2 className="flex"><AiOutlineFieldTime  className="text-2xl mr-2"></AiOutlineFieldTime>{time}</h2>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/conference/${id}`}>
            <button className="btn btn-info">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Conference;
