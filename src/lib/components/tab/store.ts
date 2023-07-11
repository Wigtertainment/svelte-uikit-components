import { writable } from 'svelte/store';

export const selectedTabStore = writable<ISelectedTabEvent>();
export const tabPositionStore = writable();

export function setSelectedTab(event: ISelectedTabEvent) {
    selectedTabStore.set(event);
}

export interface ISelectedTabEvent {
    tabsetId: string;
    selectedId: string;
}
