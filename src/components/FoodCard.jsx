import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

const FoodCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-6 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 30 },
                duration: 0.3
            }}
        >
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.div
                        key="summary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative"
                    >
                        {/* Placeholder for Food Image */}
                        <div className="w-full h-48 bg-hotel-light flex items-center justify-center overflow-hidden">
                            <img
                                src={item.image || `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop`}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-5 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-hotel-dark leading-tight">{item.name}</h3>
                                <p className="text-hotel-gold font-semibold mt-1">{item.price} ETB</p>
                                <div className="flex items-center gap-1 mt-2 text-[10px] text-hotel-muted uppercase tracking-widest font-bold">
                                    <Info size={10} />
                                    Click for info
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                            duration: 0.2
                        }}
                        className="p-6 bg-hotel-dark text-white min-h-[200px] flex flex-col justify-center text-center"
                    >
                        <motion.h3
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.05, duration: 0.2 }}
                            className="text-xl font-bold mb-3"
                        >
                            {item.name}
                        </motion.h3>
                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                            className="text-gray-300 text-sm leading-relaxed mb-4"
                        >
                            {item.description || "Freshly prepared with premium ingredients following our signature hotel recipe."}
                        </motion.p>
                        <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.2 }}
                            className="text-hotel-gold font-bold text-lg"
                        >
                            {item.price} ETB
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.2 }}
                            className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest"
                        >
                            Tap to close
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FoodCard;
