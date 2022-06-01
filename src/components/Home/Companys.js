import React from 'react';

const Companys = () => {
    return (
        <div className='w-full flex justify-center my-24'>
            <div className='max-w-[1280px] flex justify-center items-center'>
                <div>
                    <img src="images/logos/slack.png" alt="slack" className="w-32 h-11 mx-10" />
                </div>
                <div>
                    <img src="images/logos/google.png" alt="slack" className="w-32 h-11 mx-10" />
                </div>
                <div>
                    <img src="images/logos/uber.png" alt="slack" className="w-24 h-14 mx-10" />
                </div>
                <div>
                    <img src="images/logos/netflix.png" alt="slack" className="w-32 h-16 mx-10" />
                </div>
                <div>
                    <img src="images/logos/airbnb.png" alt="slack" className="w-40 h-14 mx-10" />
                </div>
            </div>
        </div>
    );
};

export default Companys;