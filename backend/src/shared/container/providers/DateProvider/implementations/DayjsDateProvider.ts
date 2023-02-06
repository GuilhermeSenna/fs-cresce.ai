/* eslint-disable @typescript-eslint/no-unsafe-return */
import dayjs from 'dayjs';
import localeBr from 'dayjs/locale/pt-br';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import dayjsWeekday from 'dayjs/plugin/weekday';

import { objWeekDays } from '@utils/general';

import { IDateProvider } from '../IDateProvider';

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
    compareIfBefore(start_date: Date, end_date: Date): boolean {
        return dayjs(start_date).isBefore(end_date);
    }
    compareIfBetweenDates({
        actual_date,
        start_date,
        end_date,
    }: {
        actual_date: Date;
        start_date: Date;
        end_date: Date;
    }): boolean {
        dayjs.extend(isBetween);
        const actual_date_zero = new Date(
            new Date(actual_date).setUTCHours(0, 0, 0, 0),
        );

        const end_date_endHour = new Date(
            end_date.setUTCHours(23, 59, 59, 999),
        );

        return dayjs(actual_date_zero).isBetween(
            start_date,
            end_date_endHour,
            null,
            '[)', // Include start and end date
        );
    }
    compareIfSameOrAfter(start_date: Date, end_date: Date): boolean {
        // Set Date to 00:00:00 to prevent errors
        const end_date_initial = new Date(
            new Date(end_date).setUTCHours(0, 0, 0, 0),
        );

        // console.log(
        //     `${start_date.toISOString()} <=> ${end_date.toISOString()}`,
        // );

        return (
            dayjs(start_date).isSame(end_date_initial) ||
            dayjs(start_date).isAfter(end_date_initial)
        );
    }
    addHours(hours: number): Date {
        return dayjs().add(hours, 'hour').toDate();
    }
    addDays(days: number): Date {
        return dayjs().add(days, 'days').toDate();
    }
    compareInDays(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUTC(end_date);
        const start_date_utc = this.convertToUTC(start_date);
        return dayjs(end_date_utc).diff(start_date_utc, 'days');
    }
    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }
    compareInHours(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUTC(end_date);
        const start_date_utc = this.convertToUTC(start_date);
        return dayjs(end_date_utc).diff(start_date_utc, 'hours');
    }
    dateNow(): Date {
        return dayjs().toDate();
    }
    getWeekDay({
        date,
        returnAsString = true,
        useBrazilTimezone = true,
    }: {
        date: string;
        returnAsString?: boolean;
        useBrazilTimezone?: boolean;
    }): number | string {
        // Use Weekday plugin
        dayjs.extend(dayjsWeekday);

        // Numeric Week day (0 - dom, 1 - seg, ....)
        const numericWeekDay = dayjs(date).weekday();
        // const numericWeekDay = dayjs(date).locale(localeBr).weekday();

        // Convert numeric Weekday to string
        const strWeekDay = objWeekDays.find(
            (weekday) => weekday.value === numericWeekDay,
        )?.dia;

        return returnAsString ? (strWeekDay as string) : numericWeekDay;
    }
}
export { DayjsDateProvider };
