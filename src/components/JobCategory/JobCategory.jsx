import PropTypes from 'prop-types';

const JobCategory = ({jobCategory}) => {
    const {cover_img, category_title, category_description} = jobCategory;
    return (
        <div className='flex flex-col gap-2 shadow-lg p-5 rounded-xl border-[2px] border-purple-500 hover:shadow-2xl cursor-pointer hover:scale-105 transition-all'>
            <div className="">
            <img src={cover_img} alt="" />
            </div>
            <h1 className='font-bold'>{category_title}</h1>
            <p>{category_description}</p>
        </div>
    );
};

JobCategory.propTypes = {
    jobCategory: PropTypes.object,
}

export default JobCategory;