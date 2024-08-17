import axios from 'axios';


export default function fetchDrivers(searchTerm) {
    console.log('fetchDrivers', searchTerm);

    const options = {
        method: 'GET',
        url: `https://v1.formula-1.api-sports.io/drivers`,
        params: { search: searchTerm },
        headers: {
            'x-rapidapi-host': 'v1.formula-1.api-sports.io',
            'x-rapidapi-key': ''
        }
    };

    return axios.request(options)
        .then(response => {
            const drivers = response.data.response.map(driver => ({
                id: driver.id,
                nome: driver.name,
                img: driver.image
            }));
            return drivers;
        })
        .catch(error => {
            throw error;
        });
}