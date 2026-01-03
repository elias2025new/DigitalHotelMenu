import React, { useState } from 'react';

const CallButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="fixed bottom-24 right-0 z-50 flex flex-col items-end pointer-events-none">
            {showTooltip && (
                <div className="bg-hotel-green text-white px-3 py-2 rounded-l-lg mb-2 shadow-lg text-xs font-semibold mr-2 animate-in fade-in slide-in-from-right-2 duration-300 pointer-events-auto">
                    To order, call 4152 on the extension
                </div>
            )}
            <button
                onClick={() => setShowTooltip(!showTooltip)}
                className="bg-hotel-green hover:bg-green-700 text-white p-3 rounded-l-2xl shadow-xl transition-all active:scale-95 pointer-events-auto flex items-center justify-center group"
                aria-label="Call Extension"
            >
                <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                    alt="phone icon"
                    className="group-hover:rotate-12 transition-transform"
                />
                <span className="ml-2 font-black text-sm pr-1">4152</span>
            </button>
        </div>
    );
};

export default CallButton;
