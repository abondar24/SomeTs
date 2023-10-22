export function getLocalTime(): string{
    const currentDate = getLocal();
    return currentDate.toLocaleString();
}

export function getTimeInZone(timezone: string): string {
    const current = getLocal();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
         hour12: true,
      };

    return current.toLocaleDateString('en-US', options);
}

export function getTimeByStamp(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
}

function getLocal(): Date {
    return new Date();
}