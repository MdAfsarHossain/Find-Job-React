import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeadingText from '../HeadingText/HeadingText';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
    const title = 'Job Categories';
    const description = "There are many job options available, so it's important to use any resources and guidance available to you to learn more about the careers that might appeal to you";

    const [jobCategories, setJobCategories] = useState([]);

    useEffect( () => {
        axios.get('categories.json')
        .then(data => setJobCategories(data.data))
    }, [])

    return (
        <div className='bg-slate-50 py-10'>
            <HeadingText
            title={title}
            description={description}
            ></HeadingText>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 lg:px-20 pb-20">
                {
                    jobCategories.map(jobCategory => 
                        <JobCategory
                        key={jobCategory.id}
                        jobCategory={jobCategory}
                        ></JobCategory>
                    )
                }
            </div>
        </div>
    );
};

export default JobCategories;