import axios from 'axios';


export default function fetchDrivers(searchTerm) {
    console.log('fetchDrivers', searchTerm);

    const options = {
        method: 'GET',
        url: `https://${process.env.REACT_APP_API_HOST}/drivers`,
        params: { search: searchTerm },
        headers: {
            'x-rapidapi-host': process.env.REACT_APP_API_HOST,
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    };


    return axios.request(options)
        .then(response => {
            const drivers = response.data.response.map(driver => ({
                id: driver.id,
                nome: driver.name,
                img: driver.image,
                world_championships: driver.world_championships,
                podiums: driver.podiums,
                nationality: driver.nationality
            }));
            console.log('drivers', drivers);
            return drivers;
        })
        .catch(error => {
            throw error;
        });
}