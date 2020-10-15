import React from 'react';
import { overviewToday } from '../../helpers/db';
import { OverviewCard } from './OverviewCard';

export const Overview = () => {

    return (
        <div className="overview">
            <div className="overview-title">
                <h2>Overview - Today</h2>
            </div>
            {
                overviewToday.map(overview => {
                    return <OverviewCard 
                                key={overview.id}
                                overview={overview}
                            />
                })
            } 
        </div>
    );
    
};
