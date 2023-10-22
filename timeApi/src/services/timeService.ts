export function getLocalTime(): string{
    const currentDate = new Date();
    return currentDate.getDate().toLocaleString();
}
