import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdDisplaySettings, MdOutlineSettingsPhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  // const allJobs = useLoaderData();

  const [allJobs, setAllJobs] = useState([]);
  const { jobId } = useParams();

  useEffect(() => {
    axios.get("/jobs.json").then((data) => setAllJobs(data.data));
  }, []);

  const currentJob = allJobs?.find((job) => job.id === parseInt(jobId));

  const handleApplyJob = () => {
    // saveJobApplication(jobId);
    saveJobApplication(parseInt(jobId));
    toast.success("Job application submitted successfully!");
  };

  return (
    <div className="px-5 lg:px-10 py-28 md:py-24 lg:py-28">
      <div className="flex flex-col items-center justify-center py-10 border-b-2 mb-5">
        <h1 className="text-5xl font-bold">Job Details</h1>
      </div>

      {/* <h1>Job Details: {jobTitle}</h1> */}

      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-5 lg:col-span-3 py-0 flex flex-col gap-5">
          <p>
            <span className="font-bold">Job Description: </span>
            {currentJob?.jobDescription}
          </p>
          <p>
            <span className="font-bold">Job Responsibility: </span>
            {currentJob?.jobResponsibility}
          </p>
          <div className="flex flex-col">
            <p className="font-bold">Educational Requirements: </p>
            <p>{currentJob?.educationalRequirements}</p>
          </div>

          <div className="">
            <p className="font-bold">Experience: </p>
            <p>{currentJob?.experiences}</p>
          </div>
        </div>

        <div className="col-span-5 lg:col-span-2">

          <div className="flex flex-col gap-2 bg-[#7E90FE1A] px-10 py-5 rounded-lg">
            <h1 className="font-bold border-b-2 border-[#9873FF] border-opacity-30 pb-3 text-2xl">
              Job Details
            </h1>
            <div className="flex flex-row gap-5 ">
              <div className="flex flex-row gap-2 justify-center items-center">
                <HiOutlineCurrencyDollar className="text-xl" />
                <p className="font-bold">Salary: </p>
              </div>
              <p>{currentJob?.salary} (Per Month)</p>
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-2 justify-center items-center">
                <MdDisplaySettings />
                <p className="font-bold">Job Title: </p>
              </div>
              <p>{currentJob?.jobTitle}</p>
            </div>

            <h1 className="font-bold pt-5 pb-2">Contact Information</h1>
            <div className="flex flex-col gap-2 border-t-2 border-[#9873FF] border-opacity-30 py-5">
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <MdOutlineSettingsPhone />
                  <p className="font-bold">Phone: </p>
                </div>
                <p>{currentJob?.phone}</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <HiOutlineMail />
                  <p className="font-bold">Email: </p>
                </div>
                <p>{currentJob?.email}</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <SlLocationPin />
                  <p className="font-bold">Address: </p>
                </div>
                <p>{currentJob?.jobLocation}</p>
              </div>
            </div>
          </div>

            <button
              id="handleApplyJob"
              onClick={handleApplyJob}
              className="btn w-full mt-5 bg-[#9873FF] text-white font-bold uppercase border-2 border-[#9873FF] hover:bg-transparent hover:border-[#9873FF] hover:text-[#9873FF]"
            >
              Apply Now
            </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
