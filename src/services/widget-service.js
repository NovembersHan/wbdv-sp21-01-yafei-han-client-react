

export const createWidget = (tid, widget) =>
    fetch(`http://limitless-citadel-68068.herokuapp.com/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`http://limitless-citadel-68068.herokuapp.com/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`http://limitless-citadel-68068.herokuapp.com/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`http://limitless-citadel-68068.herokuapp.com/api/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createWidget, findWidgetsForTopic,
    updateWidget, deleteWidget
};

export default api;



