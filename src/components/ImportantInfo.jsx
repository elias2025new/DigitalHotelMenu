import React from 'react';

const ImportantInfo = () => {
    return (
        <div className="px-6 py-4 bg-amber-50 border-l-4 border-hotel-gold mx-4 rounded-r-lg shadow-sm">
            <div className="space-y-3">
                <div>
                    <h3 className="text-sm font-bold text-hotel-dark mb-1">Room Service Available 24/7</h3>
                    <p className="text-[10px] text-hotel-muted leading-relaxed">
                        If you or any of your guests have an allergy or dietary restriction, please inform your waiter and our chefs will be happy to accommodate your needs.
                    </p>
                </div>

                <div className="pt-1.5 border-t border-amber-200">
                    <h4 className="text-xs font-bold text-hotel-dark">Swiss Inn Nexus Hotel</h4>
                    <p className="text-[10px] text-hotel-muted">Addis Ababa, Ethiopia</p>
                </div>

                <div className="pt-1.5 border-t border-amber-200 space-y-0.5">
                    <p className="text-[9px] text-hotel-muted font-medium">
                        All prices include 10% service charge & 15% VAT
                    </p>
                    <p className="text-[9px] text-hotel-muted font-medium">
                        All prices are in Ethiopian Birr
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImportantInfo;
