import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { getStoredJobApplications } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  // const allJobs = useLoaderData();
  const [allJobs, setAllJobs] = useState([]);

  const hiddenSpinner = () => {
    document.getElementById('loadingSpinner').classList.add('hidden');
    document.getElementById('loadingSpinner').classList.remove('flex');
    document.getElementById('filter').classList.remove('hidden');
    document.getElementById('appliedJobs').classList.remove('hidden');
    document.getElementById('filter').classList.add('flex');
    document.getElementById('appliedJobs').classList.add('grid');
    document.getElementById('appliedJobsText').classList.remove('hidden');
    document.getElementById('appliedJobsText').classList.add('flex');
  }

  setTimeout(() => {
    hiddenSpinner();
  }, 2000)

  useEffect(() => {
    axios.get("jobs.json").then((data) => setAllJobs(data.data));
  }, []);

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getStoredJobApplications();
    // console.log(storedJobs);
    if (allJobs.length) {
      const appliedJobs = allJobs?.filter((job) => storedJobs.includes(job.id));
      // console.log(appliedJobs);
      setAppliedJobs(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  }, [allJobs]);

  // console.log(appliedJobs, displayJobs);

  const handleJobFilter = (jobFilter) => {
    if (jobFilter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (jobFilter === "remote") {
      const filteredJobs = appliedJobs.filter(
        (job) => job.remoteOrOnsite === "Remote"
      );
      setDisplayJobs(filteredJobs);
    } else if (jobFilter === "onsite") {
      setDisplayJobs(
        appliedJobs.filter((job) => job.remoteOrOnsite === "Onsite")
      );
    } else if (jobFilter === "hybrid") {
      setDisplayJobs(
        appliedJobs.filter((job) => job.remoteOrOnsite === "Hybrid")
      );
    } else if (jobFilter === "fulltime") {
      setDisplayJobs(appliedJobs.filter((job) => job.fullTime === true));
    } else if (jobFilter === "parttime") {
      setDisplayJobs(appliedJobs.filter((job) => job.fullTime === false));
    }
  };

  return (
    <div className="px-5 lg:px-10 py-28 md:py-24 lg:py-28">
      <div id="appliedJobsText" className="hidden flex-col items-center justify-center py-10 border-b-2 mb-5">
        <h1 className="text-5xl font-bold">
          Applied Jobs: {displayJobs.length}
        </h1>
      </div>

      <div id="loadingSpinner" className="flex flex-col justify-center items-center mt-14">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>

      <div id="filter" className="hidden  flex-row justify-end py-5">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            <p>Filter By</p>
            <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleJobFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter("onsite")}>
              <a>Onsite</a>
            </li>
            <li onClick={() => handleJobFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobFilter("hybrid")}>
              <a>Hybrid</a>
            </li>
            <li onClick={() => handleJobFilter("fulltime")}>
              <a>Full time</a>
            </li>
            <li onClick={() => handleJobFilter("parttime")}>
              <a>Part time</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="appliedJobs" className="hidden  grid-cols-1 gap-5">
        {displayJobs?.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} job={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
