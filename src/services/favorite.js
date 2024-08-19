const FAVORITES_KEY = 'favoritesList';

const getStoredFavorites = () => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavorites = (favoritesList) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesList));
};

export const getFavorites = () => {
    return getStoredFavorites();
};

export const addFavorite = (driver) => {
    const favoritesList = getStoredFavorites();
    if (!isFavorite(driver)) {
        favoritesList.push(driver);
        saveFavorites(favoritesList);
    }
};

export const removeFavorite = (driver) => {
    let favoritesList = getStoredFavorites();
    favoritesList = favoritesList.filter((item) => item.id !== driver.id);
    saveFavorites(favoritesList);
};

export const isFavorite = (driver) => {
    const favoritesList = getStoredFavorites();
    return favoritesList.some((item) => item.id === driver.id);
};
