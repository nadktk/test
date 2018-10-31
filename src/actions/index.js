export const select = (client) => {
    return {
        type: "SELECTED_CLIENT",
        payload: client
    }
}