
const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = (jobId) => {
    const storedJobApplications = getStoredJobApplications();

    const exists = storedJobApplications.find(id => jobId == id);
    if(!exists) {
        storedJobApplications.push(jobId);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
        // toast.success("Job application submitted successfully!", {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
        //   console.log('Congratulations!!')
        // toast.success("Hello, world!");
    }
}
export { getStoredJobApplications, saveJobApplication };

