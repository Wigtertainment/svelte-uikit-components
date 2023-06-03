// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace svelteHTML {
		interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
			['uk-accordion']?: string;
			['uk-alert']?: boolean;
			['uk-close']?: boolean;
			['uk-grid']?: boolean;
			['uk-countdown']?: string;
			[key: string]: any
		}
	}
}

export { };
