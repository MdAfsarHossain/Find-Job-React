import React from 'react';

const HeadingText = ({title, description}) => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
           <h1 className='text-4xl font-bold'>{title}</h1> 
           <p className='text-base w-auto px-6 md:px-0 md:w-3/5 text-center'>{description}</p> 
        </div>
    );
};

HeadingText.propTypes = {
    
};

export default HeadingText;