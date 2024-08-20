import React, { useCallback } from 'react';
import './FavoriteCard.css';
import { FaTimes } from 'react-icons/fa';
import { removeByName } from '../../services/favorite';

const FavoriteCard = ({ favorite }) => {
    const { nome, img, nationality, world_championships } = favorite;

    const onRemove = useCallback((nome) => {
        console.log("Removing", nome);
        removeByName(nome);
    }, [nome]);

    return (
        <div className="favorite-card">
            <button 
                className="remove-icon-button" 
                onClick={() => onRemove(nome)} 
                aria-label={`Remover ${nome}`}
            >
                <FaTimes className="remove-icon" />
            </button>
            
            <img src={img} alt={nome} className="favorite-card__image" />


            <div className="favorite-card__info">
                <h2 className="favorite-card__name">{nome}</h2>
                <h2 className="favorite-card__nationality">{nationality}</h2>
                {world_championships > 0 && (
                    <h2 className="favorite-card__world_championships">
                        {world_championships} <strong>Títulos Mundiais</strong>
                    </h2>
                )}
            </div>
        </div>
    );
};

export default FavoriteCard;
