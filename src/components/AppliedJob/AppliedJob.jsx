import PropTypes from "prop-types";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fullTime,
    jobLocation,
    salary,
    jobImg,
  } = job;

  return (
    <div className="flex flex-col md:grid md:grid-cols-4 md:gap-10 border-2 p-5 rounded-xl">
      <div className="h-52">
        <img
          className="rounded-xl w-full h-full object-center"
          src={jobImg}
          alt=""
        />
      </div>

      <div className="col-span-2 flex flex-col gap-3 py-5">
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

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
          <p className="flex flex-row gap-1 lg:justify-center items-center">
            <SlLocationPin /> {jobLocation}
          </p>
          <p className="flex flex-row gap-1 justify-start lg:justify-center items-center">
            <HiOutlineCurrencyDollar className="text-xl" /> {salary}
          </p>
        </div>
      </div>

      <div className="py-2 flex flex-row justify-center md:justify-end items-center md:pr-10">
        <Link to={`/job-details/${id}`}>
          <button className="btn bg-[#7E90FE] text-white border-2 border-[#7E90FE] hover:bg-transparent hover:border-[#7E90FE] hover:text-[#7E90FE]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object,
};

export default AppliedJob;
