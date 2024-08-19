import React from 'react';
import './DriverCard.css'; 
import { addFavorite, removeFavorite} from '../../services/favorite';

const DriverCard = ({ driver}) => {
    const {nome, img, podiums, nationality, world_championships, isFavorite } = driver;

    const handleFavoriteClick = () => {
        if (!isFavorite) {
            addFavorite(driver);
        } else {
            removeFavorite(driver);
        }
    };

    return (
        <div className="driver-card">
            <img src={img} alt={nome} className="driver-card__image" />
            <div className="driver-card__info">
                <h2 className="driver-card__name">{nome}</h2>
                <p className="driver-card__nationality"><strong>Nacionalidade:</strong> {nationality}</p>
                <p className="driver-card__podiums"><strong>Pódios:</strong> {podiums}</p>
                <p className="driver-card__world-championships"><strong>Campeonatos Mundiais:</strong> {world_championships}</p>
                <button 
                    className={`driver-card__favorite-button ${isFavorite ? 'favorite' : ''}`}
                    onClick={handleFavoriteClick}
                >
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>
        </div>
    );
};

export default DriverCard;
