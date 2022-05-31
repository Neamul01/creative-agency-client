import React from 'react';

const CustomButton = ({ children }) => {
    return (
        <button class="btn btn-primary py-3 px-14 bg-[#111430] hover:bg-[#040721] ">{children}</button>
    );
};

export default CustomButton;