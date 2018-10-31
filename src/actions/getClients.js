const getClients = data => {
    return {
        type: "GET_CLIENTS",
        payload: data
    }
}
export default getClients