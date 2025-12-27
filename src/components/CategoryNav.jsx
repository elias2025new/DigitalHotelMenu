import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategoryNav = ({ categories, activeCategory, onCategoryClick }) => {
    const scrollRef = useRef(null);
    const buttonRefs = useRef({});
    const [showLeftIndicator, setShowLeftIndicator] = useState(false);
    const [showRightIndicator, setShowRightIndicator] = useState(true);
    const [showScrollHint, setShowScrollHint] = useState(false);

    useEffect(() => {
        // Show hint after header animation finishes (wait 2.5s)
        const showTimer = setTimeout(() => {
            setShowScrollHint(true);
        }, 2500);

        // Hide hint 5 seconds after showing (2.5s + 5s = 7.5s)
        const hideTimer = setTimeout(() => {
            setShowScrollHint(false);
        }, 7500);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    // Auto-scroll active category into view
    useEffect(() => {
        if (scrollRef.current && buttonRefs.current[activeCategory]) {
            const container = scrollRef.current;
            const activeButton = buttonRefs.current[activeCategory];

            const containerRect = container.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();

            // Calculate if button is out of view
            const isOutOfView =
                buttonRect.left < containerRect.left ||
                buttonRect.right > containerRect.right;

            if (isOutOfView) {
                // Scroll the active button into the center of the container
                const scrollLeft = activeButton.offsetLeft - (container.offsetWidth / 2) + (activeButton.offsetWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeCategory]);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                setShowLeftIndicator(scrollLeft > 10);
                setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10);
            }
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 max-w-[430px] mx-auto shadow-sm">
            <div className="relative pt-6 pb-4">
                {/* Left scroll indicator */}
                <AnimatePresence>
                    {showLeftIndicator && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-0 top-6 bottom-4 w-12 bg-gradient-to-r from-white to-transparent z-10 flex items-center justify-start pl-1 pointer-events-none"
                        >
                            <ChevronLeft size={20} className="text-hotel-green" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right scroll indicator */}
                <AnimatePresence>
                    {showRightIndicator && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute right-0 top-6 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-10 flex items-center justify-end pr-1 pointer-events-none"
                        >
                            <ChevronRight size={20} className="text-hotel-green" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll hint text */}
                <AnimatePresence>
                    {showScrollHint && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                backgroundColor: '#2D5A27',
                                color: '#ffffff',
                                zIndex: 100
                            }}
                            className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full shadow-lg whitespace-nowrap uppercase font-bold text-[10px] tracking-widest text-center"
                        >
                            ← Swipe for more →
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar px-6 space-x-4 scroll-smooth"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            ref={(el) => (buttonRefs.current[category.id] = el)}
                            onClick={() => onCategoryClick(category.id)}
                            className={`
                                flex-shrink-0 w-28 flex flex-col items-center gap-2 pb-2 transition-all duration-300
                                ${activeCategory === category.id
                                    ? 'opacity-100'
                                    : 'opacity-80'
                                }
                            `}
                        >
                            <div className={`
                                w-24 h-24 rounded-[2rem] overflow-hidden border-2 transition-all duration-300 p-1.5
                                ${activeCategory === category.id
                                    ? 'border-hotel-green bg-green-50 shadow-md transform -translate-y-1'
                                    : 'border-white/50 bg-white shadow-sm'
                                }
                            `}>
                                <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-100">
                                    <img
                                        src={category.items[0]?.image || '/images/default_category.jpg'}
                                        alt={category.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <span className={`
                                text-[11px] font-extrabold text-center leading-tight transition-colors duration-300 px-1 uppercase tracking-tight
                                ${activeCategory === category.id
                                    ? 'text-hotel-green font-black'
                                    : 'text-hotel-dark'
                                }
                            `}>
                                {category.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
