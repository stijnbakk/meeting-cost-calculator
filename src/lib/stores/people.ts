// stores/people.ts
import { writable } from 'svelte/store';

export interface Person {
  name: string;
  rate: number;
  rateType: 'hourly' | 'yearly';
  costPerHour: number;
}

const initialPeople: Person[] = [{
    name: '',
    rate: 100,
    rateType: 'hourly',
    costPerHour: 0
}];

export const people = writable(initialPeople);
