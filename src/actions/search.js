export const search = (searchline) => {
    return {
        type: "SEARCHLINE_INPUT",
        payload: searchline
    }
}