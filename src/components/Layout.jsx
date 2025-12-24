import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-100 flex justify-center overflow-x-hidden">
            {/* 
        Constraints for mobile-only feel:
        - max-w-[430px] for smartphone width
        - shadow-2xl to give it a "contained" look on larger screens
        - relative and min-h-screen to ensure it fills the viewport
      */}
            <div className="w-full max-w-[430px] bg-white min-h-screen shadow-2xl relative flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Layout;
