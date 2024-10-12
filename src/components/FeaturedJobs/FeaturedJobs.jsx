import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import HeadingText from '../HeadingText/HeadingText';

const FeaturedJobs = () => {
    const title = "Featured Jobs";
    const description = "Featured job searches are useful in cases where you want the ability to sponsor individual jobs in your index. A career site promoting business critical jobs can use a featured jobs search to return only sponsored jobs to job seekers."

    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        axios.get('jobs.json')
        .then(data => setFeaturedJobs(data.data))
    }, [])

    return (
        <div className='bg-white py-10'>
            <HeadingText
            title={title}
            description={description} 
            ></HeadingText>

            <div className="px-5 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    featuredJobs.slice(0, dataLength).map(featuredJob => 
                        <FeaturedJob 
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                        ></FeaturedJob>
                    )
                }
            </div>

            <div className={`mt-8 flex flex-row justify-center items-center ${featuredJobs.length === dataLength ? "hidden" : "flex"}`}>
                <Link>
                    <button 
                    onClick={() => setDataLength(featuredJobs.length)}
                    className='btn bg-blue-700 text-white font-bold border-2 border-blue-700 hover:bg-transparent hover:border-blue-700 hover:text-blue-700'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;