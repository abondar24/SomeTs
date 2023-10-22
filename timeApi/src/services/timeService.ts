export function getLocalTime(): string{
    const currentDate = new Date();
    return currentDate.toLocaleString();
}
