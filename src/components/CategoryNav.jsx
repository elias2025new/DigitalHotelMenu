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
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 max-w-[430px] mx-auto">
            <div className="relative">
                {/* Left scroll indicator */}
                <AnimatePresence>
                    {showLeftIndicator && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/90 to-transparent z-10 flex items-center justify-start pl-1 pointer-events-none"
                        >
                            <motion.div
                                animate={{ x: [-2, 2, -2] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ChevronLeft size={20} className="text-hotel-gold" />
                            </motion.div>
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
                            className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/90 to-transparent z-10 flex items-center justify-end pr-1 pointer-events-none"
                        >
                            <motion.div
                                animate={{ x: [2, -2, 2] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ChevronRight size={20} className="text-hotel-gold" />
                            </motion.div>
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
                            className="absolute top-1 left-1/2 -translate-x-1/2 z-20 bg-hotel-gold text-white text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                        >
                            ← Swipe to see more categories →
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar px-4 py-4 space-x-2 scroll-smooth"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            ref={(el) => (buttonRefs.current[category.id] = el)}
                            onClick={() => onCategoryClick(category.id)}
                            className={`
              whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === category.id
                                    ? 'bg-hotel-gold text-white shadow-lg shadow-hotel-gold/20'
                                    : 'bg-hotel-light text-hotel-muted border border-transparent'
                                }
            `}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
