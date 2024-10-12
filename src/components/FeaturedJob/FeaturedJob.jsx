import PropTypes from "prop-types";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const FeaturedJob = ({ featuredJob }) => {
  const {
    id,
    jobImg,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fullTime,
    jobLocation,
    salary,
  } = featuredJob;

  return (
    <div className="flex flex-col gap-5 border-2 p-5 rounded-xl">
      <div className="h-52">
        <img
          className="rounded-xl w-full h-full object-center"
          src={jobImg}
          alt=""
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">{jobTitle}</h1>
        <p>{companyName}</p>
        
        <div className="flex flex-row gap-5">
          <p className="border-[1px] font-semibold px-2 py-1 rounded-lg border-violet-500 text-violet-500">
            {remoteOrOnsite}
          </p>
          <p className="border-[1px] font-semibold px-2 py-1 rounded-lg border-violet-500 text-violet-500">
            {fullTime ? "Full Time" : "Part Time"}
          </p>
        </div>
        
        <div className="flex flex-row md:flex-col lg:flex-row justify-between">
          <p className="flex flex-row gap-1 md:justify-start lg:justify-center items-center"><SlLocationPin /> {jobLocation}</p>
          <p className="flex flex-row gap-1 md:justify-start lg:justify-center  items-center"><HiOutlineCurrencyDollar className="text-xl" /> {salary}</p>
        </div>

        <div className="py-2">
            <Link to={`/job-details/${id}`}>
            <button className="btn bg-[#7E90FE] text-white border-2 border-[#7E90FE] hover:bg-transparent hover:border-[#7E90FE] hover:text-[#7E90FE]">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

FeaturedJob.propTypes = {
  featuredJob: PropTypes.object,
};

export default FeaturedJob;
