// src/lib/i18n/index.ts
import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'nl'

register('nl', () => import('./locales/nl.json'))
register('en', () => import('./locales/en.json'))


init({
	fallbackLocale: defaultLocale,
	// initialLocale: browser ? window.navigator.language : defaultLocale,
})