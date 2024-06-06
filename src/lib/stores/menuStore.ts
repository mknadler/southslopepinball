import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'

type Context = Writable<boolean>;

export function setMenuContext() {
	let menuIsOpen = writable<Context>(false)
	setContext('menuIsOpen', menuIsOpen)
}

export function getMenuIsOpenContext() {
	return getContext<Context>('menuIsOpen')
}
