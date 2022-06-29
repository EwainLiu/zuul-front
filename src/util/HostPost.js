import {hostUrl} from "./Config";

export default function HostPost(url, data) {
    return fetch(hostUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'bearer'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json().then((json) => {
            return {json, header: response.headers};
        })
    })
}