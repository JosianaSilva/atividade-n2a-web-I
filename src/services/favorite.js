let favoritesList = [];

export const getFavorites = () => {
    return favoritesList;
    };

export const addFavorite = (athlete) => {
    favoritesList.push(athlete);
    }

export const removeFavorite = (athlete) => {
    favoritesList = favoritesList.filter((item) => item.id !== athlete.id);
    }
