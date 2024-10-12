import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row px-10 py-28 md:py-24 lg:py-28 gap-10'>
            <div className="flex-1 flex flex-col gap-10 md:gap-5 lg:gap-10">
                <h1 className='font-bold text-5xl lg:text-7xl space-y-6'>Your Journey 
                   <br /> to Success 
                   <br />Begins Here</h1>
                <p className='text-lg lg:text-2xl'>Your next big opportunity is just a click away. Browse jobs, apply, and take control of your career</p>
                <div className="">
                <button className='btn bg-blue-700 text-white font-bold border-2 border-blue-700 hover:bg-transparent hover:border-blue-700 hover:text-blue-700'>Discover Jobs</button>
                </div>
            </div>
            <div className="flex-1 md:mt-10 lg:mt-auto
            ">
                <img src='find-job.svg'></img>
            </div>
        </div>
    );
};

export default Banner;