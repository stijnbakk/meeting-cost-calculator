import { writable } from "svelte/store";

export interface Time {
    hours: number;
    minutes: number;
    seconds: number;
}

const initialTime: Time = {
    hours: 0,
    minutes: 0,
    seconds: 0
};

export const time = writable(initialTime);