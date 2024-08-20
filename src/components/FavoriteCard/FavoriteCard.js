import React from 'react';
import './FavoriteCard.css';

import { addFavorite, removeFavorite, isFavorite} from '../../services/favorite';

const FavoriteCard = ({favorite}) => {
    const {nome, img } = favorite;


    // const handleFavoriteClick = () => {
    //     if (!isFavorite(favorite)) {
    //         addFavorite(favorite);
    //     } else {
    //         removeFavorite(favorite);
    //     }
    // };

    return (
        <div className="favorite-card">
            <img src={img} alt={nome} className="favorite-card__image"/>
            <div className="favorite-card__info">
                <h2 className="favorite-card__name">{nome}</h2>          
            </div>
        </div>
    );
};

export default FavoriteCard;
