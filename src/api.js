const API_ENDPOINT =  "https://polarforecast.azurewebsites.net/";

export const getStatDescription = async (year, event, callback) => {
    try {
        const endpoint = `${API_ENDPOINT}/${year}/${event}/stat_description`;
        console.log("Requesting Data from: " + endpoint);
        const response = await fetch(endpoint);
        const data = await response.json()
        callback(data);
    } catch (error) {
        console.error(error);
    }
}

export const getTeamStatDescription = async (year, event, team, callback) => {
    try {
        const endpoint = `${API_ENDPOINT}/${year}/${event}/${team}/stats`;
        console.log("Requesting Data from: " + endpoint);
        const response = await fetch(endpoint);
        const data = await response.json()
        callback(data);
    } catch (error) {
        console.error(error);
    }
}

export const getRankings = async (year, event, callback) => {
    try {
        const endpoint = `${API_ENDPOINT}/${year}/${event}/stats`;
        console.log("Requesting Data from: " + endpoint);
        const response = await fetch(endpoint);
        const data = await response.json()
        callback(data);
    } catch (error) {
        console.error(error);
    }
}

export const getMatchPredictions = async (year, event, callback) => {
    try {
        const endpoint = `${API_ENDPOINT}/${year}/${event}/predictions`;
        console.log("Requesting Data from: " + endpoint);
        const response = await fetch(endpoint);
        const data = await response.json()
        callback(data);
    } catch (error) {
        console.error(error);
    }
}

export const getSearchKeys = async (callback) => {
    try {
        const endpoint = `${API_ENDPOINT}/search_keys`;
        console.log("Requesting Data from: " + endpoint);
        const response = await fetch(endpoint);
        const data = await response.json()
        callback(data);
    } catch (error) {
        console.error(error);
    }
}
