import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CallButton = ({ isVisible = true }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        let timer;
        if (showTooltip) {
            timer = setTimeout(() => {
                setShowTooltip(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showTooltip]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-24 right-0 z-50 flex flex-col items-end pointer-events-none"
                >
                    {showTooltip && (
                        <div className="bg-hotel-gold text-white px-2 py-1 rounded-l shadow-md text-[9px] font-bold mr-1 uppercase tracking-tighter animate-in fade-in slide-in-from-right-1 duration-300 pointer-events-auto border-y border-l border-white/20 mb-1">
                            To order, call 4152 on the extension
                        </div>
                    )}
                    <button
                        onClick={() => setShowTooltip(!showTooltip)}
                        className="bg-hotel-gold hover:bg-hotel-gold/90 text-white pl-2 pr-2.5 py-1.5 rounded-l-full shadow-lg transition-all active:scale-95 pointer-events-auto flex items-center justify-center group border-y border-l border-white/10"
                        aria-label="Call Extension"
                    >
                        <div className="bg-white/20 p-1 rounded-full mr-1.5 group-hover:scale-105 transition-transform">
                            <img
                                width="14"
                                height="14"
                                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                                alt="phone"
                                className="opacity-95"
                            />
                        </div>
                        <span className="font-black text-[10px] tracking-tight italic">CALL 4152</span>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CallButton;
