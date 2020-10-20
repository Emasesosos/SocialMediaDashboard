import React, { useEffect, useState } from 'react';
import { fetchInfoCards } from '../../helpers/fetch';
import { OverviewCard } from './OverviewCard';
// import { overviewToday } from '../../helpers/db';

export const Overview = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchInfoCards('card', {}, 'GET')
            .then(card => setCards(card));
    }, []);

    return (
        <div className="overview">
            <div className="overview-title">
                <h2>Overview - Today</h2>
            </div>
            <div className="overview-card">
                {
                    cards.map(overview => {
                        return <OverviewCard 
                                    key={overview.id}
                                    overview={overview}
                                />
                    })
                } 
            </div>
        </div>
    );
    
};
