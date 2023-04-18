// stores/people.ts
import { writable } from 'svelte/store';

export interface Person {
  name: string;
  rate: number;
  // TODO: add monthly
  rateType: 'hourly' | 'monthly' | 'yearly';
  costPerHour: number;
}

const initialPeople: Person[] = [{
    name: '',
    rate: 5000,
    rateType: 'monthly',
    costPerHour: 0
}];

export const people = writable(initialPeople);
