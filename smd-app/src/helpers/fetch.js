const baseUrl = 'https://smedia-dashboard.herokuapp.com/api'; // Producción
// const baseUrl = process.env.REACT_APP_API_URL; // Desarrollo

const fetchInfoUsuarios = async(endPoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endPoint}`;

    if (method === 'GET') {

        try {

            const resp = await fetch(url);
            if (!resp.ok) throw new Error('No se pudo realizar la petición');
            const { infoUsuarios } = await resp.json();
            // console.log(infoUsuarios);
            const infoUs = infoUsuarios.map(info => {
                return {
                    id: info.id,
                    network: info.network,
                    user: info.user,
                    status: {
                        followersOrSubs: info.status.followersOrSubs,
                        index: info.status.index,
                        today: info.status.today,
                        type: info.status.type
                    }
                }
            });

            return infoUs;

        } catch (err) {
            throw err;
        }

    }

};

const fetchInfoCards = async(endPoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endPoint}`;

    if (method === 'GET') {

        try {

            const resp = await fetch(url);
            if (!resp.ok) throw new Error('No se pudo realizar la petición');
            const { infoCards } = await resp.json();
            // console.log(infoCards);
            const infoCard = infoCards.map(card => {
                return {
                    id: card.id,
                    network: card.network,
                    percent: card.percent,
                    status: card.status,
                    type: card.type,
                    user: card.user,
                    views: card.views
                }
            });

            return infoCard;

        } catch (err) {
            throw err;
        }

    }

};

export {
    fetchInfoUsuarios,
    fetchInfoCards
};