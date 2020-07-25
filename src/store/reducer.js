export default function setHeaders(headers) {
    let x = document.cookie;

    const token=`${x.split('=')[1]}`
    if(token) {
        return {
            ...headers,
            'Authorization': `${token}`
        }
    } else {
        return headers;
    }
}