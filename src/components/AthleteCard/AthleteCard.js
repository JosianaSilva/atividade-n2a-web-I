import React from 'react';
import './AthleteCard.css'; 
import { addFavorite, removeFavorite} from '../../services/favorite';

const AthleteCard = ({ athlete, onFavoriteToggle }) => {
    const { nome, esporte, img, isFavorite } = athlete;

    const handleFavoriteClick = () => {
        if (!isFavorite) {
            addFavorite(athlete);
        } else {
            removeFavorite(athlete);
        }
    };

    return (
        <div className="athlete-card">
            <img src={img} alt={nome} className="athlete-card__image" />
            <div className="athlete-card__info">
                <h2 className="athlete-card__name">{nome}</h2>
                <p className="athlete-card__sport">{esporte}</p>
                <button 
                    className={`athlete-card__favorite-button ${isFavorite ? 'favorite' : ''}`}
                    onClick={handleFavoriteClick}
                >
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>
        </div>
    );
};

export default AthleteCard;
