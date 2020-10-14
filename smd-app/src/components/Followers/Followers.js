import React from 'react';
import { FollowerCard } from './FollowerCard';

export const Followers = () => {

    const socialNetworks = [
        {
            network: 'facebook',
            user: '@nathanf',
            status: {
                index: 'up',
                today: '12',
                followersOrSubs: '1987'
            }
        },
        {
            network: 'twitter',
            user: '@nathanf',
            status: {
                index: 'up',
                today: '99',
                followersOrSubs: '1044'
            }
        },
        {
            network: 'instagram',
            user: '@realnathanf',
            status: {
                index: 'up',
                today: '1099',
                followersOrSubs: '11k'
            }
        },
        {
            network: 'youtube',
            user: 'Nathan F.',
            status: {
                index: 'down',
                today: '144',
                followersOrSubs: '8239'
            }
        },
    ];

    return (
        <div className="followers">
            {
                socialNetworks.map(infoUser => {
                    return <FollowerCard 
                                key={infoUser.network}
                                infoUser={infoUser}
                            />
                })
            }
        </div>
    );

};
