import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Globe, ChevronDown } from 'lucide-react';

const CategoryNav = ({ categories, activeCategory, onCategoryClick, currentLang, onLanguageChange }) => {
    const scrollRef = useRef(null);
    const buttonRefs = useRef({});
    const [showLeftIndicator, setShowLeftIndicator] = useState(false);
    const [showRightIndicator, setShowRightIndicator] = useState(true);
    const [showScrollHint, setShowScrollHint] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w40/fr.png' },
        { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/w40/sa.png' },
        { code: 'zh', name: 'Chinese', flag: 'https://flagcdn.com/w40/cn.png' },
        { code: 'am', name: 'Amharic', flag: 'https://flagcdn.com/w40/et.png' }
    ];

    // Find the current language object for display
    const currentLanguageObj = languages.find(l => l.code === currentLang) || languages[0];

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

            // Scroll the active button into the center of the container
            const scrollLeft = activeButton.offsetLeft - (container.offsetWidth / 2) + (activeButton.offsetWidth / 2);
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [activeCategory]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (scrollRef.current) {
                        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                        setShowLeftIndicator(scrollLeft > 10);
                        setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll, { passive: true });
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
            {/* Header Section */}
            <div className="px-6 pt-4 pb-2 flex justify-between items-start border-b border-maroon-700/30 bg-hotel-maroon relative z-20">
                <div className="flex flex-col">
                    <h1 className="text-sm font-black text-white tracking-tighter leading-tight uppercase">
                        SWISS INN NEXUS HOTEL
                    </h1>
                    <span className="text-[10px] text-white/80 font-bold tracking-widest uppercase mt-0.5">
                        Room menu
                    </span>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-2 py-1.5 rounded-lg transition-colors border border-white/20"
                    >
                        <img
                            src={currentLanguageObj.flag}
                            alt={currentLanguageObj.name}
                            className="w-4 h-3 object-cover rounded-[1px] shadow-sm"
                        />
                        <span className="text-xs font-semibold text-white">{currentLanguageObj.code.toUpperCase()}</span>
                        <ChevronDown size={12} className={`text-white/70 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden py-1.5 z-[100]"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            onLanguageChange(lang.code);
                                            setIsLangOpen(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 text-xs font-medium hover:bg-gray-50 transition-colors flex items-center gap-3
                                            ${currentLang === lang.code ? 'text-hotel-green bg-green-50/50' : 'text-gray-600'}
                                        `}
                                    >
                                        <img
                                            src={lang.flag}
                                            alt={lang.name}
                                            className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm"
                                        />
                                        <span className="flex-grow">{lang.name}</span>
                                        {currentLang === lang.code && (
                                            <div className="w-1.5 h-1.5 rounded-full bg-hotel-green" />
                                        )}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="relative pt-3 pb-4 z-10">
                {/* Left scroll indicator */}
                <AnimatePresence>
                    {showLeftIndicator && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-0 top-3 bottom-4 w-12 bg-gradient-to-r from-white to-transparent z-10 flex items-center justify-start pl-1 pointer-events-none"
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
                            className="absolute right-0 top-3 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-10 flex items-center justify-end pr-1 pointer-events-none"
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
                            className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full shadow-lg whitespace-nowrap uppercase font-bold text-[10px] tracking-widest text-center"
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
                                w-24 h-24 rounded-[2.2rem] overflow-hidden transition-all duration-500 p-1.5
                                ${activeCategory === category.id
                                    ? 'bg-hotel-green shadow-[0_15px_30px_-8px_rgba(45,90,39,0.4),_inset_0_2px_4px_rgba(255,255,255,0.2)] scale-110 -translate-y-2'
                                    : 'bg-white shadow-sm opacity-90'
                                }
                            `}>
                                <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-gray-100">
                                    <img
                                        src={category.items[0]?.image || '/images/default_category.jpg'}
                                        alt={category.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
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
