import React from 'react';

import { uiTranslations } from '../data/uiTranslations';

const Footer = ({ currentLang = 'en' }) => {
    const t = uiTranslations[currentLang] || uiTranslations.en;

    return (
        <footer className="px-6 py-10 bg-hotel-light border-t border-gray-200 mt-auto">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-bold text-hotel-dark mb-2">{t.roomService}</h3>
                    <p className="text-sm text-hotel-muted leading-relaxed">
                        {t.allergy}
                    </p>
                </div>

                <div>
                    <h4 className="text-base font-bold text-hotel-dark">{t.hotelName}</h4>
                    <p className="text-sm text-hotel-muted">{t.location}</p>
                </div>

                <div className="pt-4 border-t border-gray-300 space-y-1">
                    <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                        {t.taxInfo}
                    </p>
                    <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                        {t.currencyInfo}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
