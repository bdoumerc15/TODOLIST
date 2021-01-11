const date = new Date();
const localDate = function() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const local = 'es-MX';
    return date.toLocaleDateString(local, options);
}

export const day = localDate();