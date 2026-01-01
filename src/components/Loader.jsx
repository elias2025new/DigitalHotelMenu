import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../Insider-loading.json';

const Loader = ({ isExiting }) => {
    return (
        <div className={`loader-container ${isExiting ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <Lottie
                    animationData={loadingAnimation}
                    loop={true}
                    style={{ width: 300, height: 150 }}
                />
                <p className="loader-text font-black text-hotel-green tracking-widest uppercase mt-4">
                    Preparing your menu
                </p>
            </div>
        </div>
    );
};

export default Loader;
