import { getRegistryData } from '../lib/stores/registry';

export const prerender = true;

export function load() {
	return getRegistryData();
}
