// stores/people.ts
import { writable } from 'svelte/store';

export interface Document {
  totalCost: number;
}

const initialDocument: Document = {
    totalCost: 0
};

export const document = writable(initialDocument);
