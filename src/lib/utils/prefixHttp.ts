// Vite and/or sveltekit tries to make links like `<a href="google.com"/>` 
// into `<a href="southsloppinball.com/google.com">`, and I want users to be able to dump in
// e.g. `matchplay.events/event/12345` as the url in keystatic without the build breaking
export const prefixHTTP = (url) => {
    if (url && url[0] === '/') {
        return url;
    }
    if (url.match(/(http:\/\/)|(https:\/\/)/)) {
        return url;
    } else {
        return `http://` + url;
    }
}