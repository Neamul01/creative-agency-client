import React from 'react';
import CustomButton from '../Shared/CustomButton';

const Banner = () => {
    return (
        <div className='w-full absolute top-0 z-10'>
            <div class="hero min-h-screen" style={{ backgroundImage: 'url(images/Rectangle.png)' }}>
                <div class="hero-content flex-col gap-24 lg:flex-row-reverse">
                    <img className='max-w-[624px] md:mr-12 max-h-[422px]' src="images/logos/Frame.png" alt='frame' />
                    <div>
                        <h1 class="text-5xl font-bold">Let’s Grow Your Brand To The Next Level</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <CustomButton>Hire us</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;