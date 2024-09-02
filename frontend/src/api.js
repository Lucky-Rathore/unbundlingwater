const BASE_URL = 'https://appwrite.opencoursehub.online/api/v1';

async function fetchLocationByName(name) {
    const response = await fetch(`${BASE_URL}/location/search?name=${name}`);
    return response.json();
}

async function fetchUsersByTopic(topic) {
    const response = await fetch(`${BASE_URL}/users/bytopic/${encodeURIComponent(topic)}`);
    return response.json();
}

async function fetchUsersByName(name) {
    const response = await fetch(`${BASE_URL}/users/byname/${name}`);
    return response.json();
}

async function searchUsersByName(name) {
    const response = await fetch(`${BASE_URL}/users/search?name=${name}`);
    return response.json();
}

async function fetchTopicsByName(name) {
    const response = await fetch(`${BASE_URL}/topics?name=${encodeURIComponent(name)}`);
    return response.json();
}

async function searchTopicsByName(name) {
    const response = await fetch(`${BASE_URL}/topics/search?name=${name}`);
    return response.json();
}

 async function fetchUsersByLocation(location) {
    const response = await fetch(`${BASE_URL}/users/bylocation/${encodeURIComponent(location)}`);
    return response.json();
}

export {
    fetchLocationByName,
    fetchUsersByTopic,
    fetchUsersByName,
    searchUsersByName,
    fetchTopicsByName,
    searchTopicsByName,
    fetchUsersByLocation
}
