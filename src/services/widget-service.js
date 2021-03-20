

export const createWidget = (tid, widget) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createWidget, findWidgetsForTopic,
    updateWidget, deleteWidget
};

export default api;



