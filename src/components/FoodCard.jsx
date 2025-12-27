import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

const FoodCard = ({ item }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 flex p-3 gap-4 min-h-[140px]">
            {/* Food Image on Left */}
            <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-hotel-light">
                <img
                    src={item.image || '/images/default_food.jpg'}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content on Right */}
            <div className="flex flex-col justify-center py-1 flex-1">
                <h3 className="text-lg font-extrabold text-hotel-dark leading-tight mb-1">
                    {item.name}
                </h3>

                <p className="text-hotel-green text-sm font-bold mb-2">
                    {item.price} ETB
                </p>

                {item.description && (
                    <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-3 font-medium">
                        {item.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FoodCard;
