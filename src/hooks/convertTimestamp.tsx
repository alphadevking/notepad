type FormatType = 'original' | 'requested' | 'third';

export const useDateFromTimestamp = (timestamp: number, format: FormatType): string => {
    const dateObject = new Date(timestamp); // Assuming timestamp is in milliseconds

    const year = dateObject.getFullYear();
    const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    const date = ("0" + dateObject.getDate()).slice(-2);
    const hours24 = ("0" + dateObject.getHours()).slice(-2);
    const hours12 = ("0" + (dateObject.getHours() % 12 || 12)).slice(-2);
    const minutes = ("0" + dateObject.getMinutes()).slice(-2);
    const seconds = ("0" + dateObject.getSeconds()).slice(-2);
    const amPm = dateObject.getHours() < 12 ? 'AM' : 'PM';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    switch (format) {
        case 'original':
            return `${year}-${month}-${date} ${hours24}:${minutes}:${seconds}`;
        case 'requested':
            return `${days[dateObject.getDay()]}, ${months[dateObject.getMonth()]} ${dateObject.getDate()}, ${year} ${hours12}:${minutes}:${seconds} ${amPm}`;
        case 'third':
            return `${month}/${date}/${year} ${hours24}:${minutes}:${seconds}`;
        default:
            return '';
    }
};
