import { writable } from 'svelte/store';

export interface Settings {
	employerCostMarkup: number;
    currency: "EUR" | "USD";
    weeksPerYear: number;
    hoursPerWeek: number;
    holidaysPerYear: number;
    vacationDaysPerYear: number
}

export const settings = writable<Settings>({
	employerCostMarkup: 20,
    currency: "EUR",
    weeksPerYear: 52,
    hoursPerWeek: 36,
    holidaysPerYear: 20,
    vacationDaysPerYear: 25
});
