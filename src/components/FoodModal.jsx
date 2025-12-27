import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FoodModal = ({ item, onClose }) => {
    useEffect(() => {
        if (item) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [item]);

    if (!item) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-[32px] overflow-hidden shadow-2xl max-w-sm w-full relative max-h-[90vh] overflow-y-auto no-scrollbar"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-hotel-dark hover:bg-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Big Image */}
                    <div className="w-full aspect-square overflow-hidden bg-hotel-light">
                        <img
                            src={item.image || '/images/default_food.jpg'}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                            <h2 className="text-xl font-black text-hotel-dark leading-tight">
                                {item.name}
                            </h2>
                            <p className="text-hotel-green text-lg font-black whitespace-nowrap ml-4">
                                {item.price} <span className="text-xs">ETB</span>
                            </p>
                        </div>

                        {item.description && (
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                {item.description}
                            </p>
                        )}

                        <div className="mt-8 pt-6 border-t border-slate-100 italic text-sm text-slate-400 text-center">
                            Prices include taxes and service charge
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FoodModal;
