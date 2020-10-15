import React from 'react';
import { socialNetworks } from '../../helpers/db';
import { FollowerCard } from './FollowerCard';

export const Followers = () => {

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
