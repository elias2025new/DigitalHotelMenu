import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FoodModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                onClick={onClose}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
            >
                <motion.div
                    layoutId={`card-${item.id}`}
                    initial={{ borderRadius: 24 }}
                    animate={{ borderRadius: 32 }}
                    exit={{ borderRadius: 24 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white overflow-hidden shadow-2xl max-w-lg w-full relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-hotel-dark hover:bg-white transition-colors"
                    >
                        <X size={24} />
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
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-8"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-3xl font-black text-hotel-dark leading-tight">
                                {item.name}
                            </h2>
                            <p className="text-hotel-green text-2xl font-black whitespace-nowrap ml-4">
                                {item.price} <span className="text-sm">ETB</span>
                            </p>
                        </div>

                        {item.description && (
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {item.description}
                            </p>
                        )}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 pt-6 border-t border-slate-100 italic text-sm text-slate-400 text-center"
                        >
                            Prices include taxes and service charge
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FoodModal;
