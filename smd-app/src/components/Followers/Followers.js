import React, { useEffect, useState } from 'react';
import { fetchInfoUsuarios } from '../../helpers/fetch';
import { FollowerCard } from './FollowerCard';
// import { socialNetworks } from '../../helpers/db';

export const Followers = () => {

    const [socialNet, setSocialNet] = useState([]);

    useEffect(() => {
        fetchInfoUsuarios('user', {}, 'GET')
            .then(info => setSocialNet(info));
    }, []);

    return (
        
        <div className="followers">
            {
                socialNet.map(infoUser => {
                    return <FollowerCard 
                                key={infoUser.network}
                                infoUser={infoUser}
                            />
                })
            }
        </div>
        
    );

};
