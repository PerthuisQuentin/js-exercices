function get(url) {
    return fetch(url)
        .then(response => response.json())
}

function post(url, body) {
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
}
