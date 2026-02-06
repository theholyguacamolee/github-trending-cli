import dayjs from 'dayjs';

export function getDateFromDuration(duration) {
    const map = {
        day: 1,
        week: 7,
        month: 30,
        year: 365,
    }

    if (!map[duration]) {
        throw new Error('Invalid duration');
    }

    return dayjs().subtract(map[duration], 'day').format('YYYY-MM-DD')
}