<script lang="ts">
	import { onMount } from 'svelte';
	import Nav from '$lib/components/nav/nav.svelte';
	import { asset, resolve } from '$app/paths';
	import type { INavItem } from '../lib/index.js';
	import github from 'svelte-highlight/styles/github';

	const themeStorageKey = 'svelte-uikit-theme';
	type Theme = 'light' | 'dark';

	let darkMode = false;

	function setTheme(theme: Theme, persist = false): void {
		darkMode = theme === 'dark';
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;

		if (persist) {
			try {
				localStorage.setItem(themeStorageKey, theme);
			} catch {
				// The theme still applies for this session if storage is unavailable.
			}
		}
	}

	function toggleTheme(): void {
		setTheme(darkMode ? 'light' : 'dark', true);
	}

	onMount(() => {
		const mediaQuery = matchMedia('(prefers-color-scheme: dark)');
		darkMode = document.documentElement.dataset.theme === 'dark';

		const handleSystemThemeChange = (event: MediaQueryListEvent): void => {
			try {
				if (localStorage.getItem(themeStorageKey) !== null) return;
			} catch {
				// Without storage, continue following the system preference.
			}

			setTheme(event.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', handleSystemThemeChange);
		return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
	});

	let navItems: INavItem[] = [
		{ ident: '', text: 'ACTIONS', isHeader: true },
		{ ident: '30', text: 'Tooltip', href: `${resolve('/tooltip-action')}/` },
		{ ident: '', text: 'COMPONENTS', isHeader: true },
		{ ident: '1', text: 'Accordion', href: `${resolve('/accordion')}/` },
		{ ident: '2', text: 'Article', href: `${resolve('/article')}/` },
		{ ident: '3', text: 'Alert', href: `${resolve('/alert')}/` },
		{ ident: '4', text: 'Badge', href: `${resolve('/badge')}/` },
		{ ident: '5', text: 'Breadcrumb', href: `${resolve('/breadcrumb')}/` },
		{ ident: '6', text: 'Button', href: `${resolve('/button')}/` },
		{ ident: '7', text: 'Button Group', href: `${resolve('/button-group')}/` },
		{ ident: '8', text: 'Card', href: `${resolve('/card')}/` },
		{ ident: '25', text: 'Close', href: `${resolve('/close')}/` },
		{ ident: '9', text: 'Comment', href: `${resolve('/comment')}/` },
		{ ident: '10', text: 'Countdown', href: `${resolve('/countdown')}/` },
		{ ident: '11', text: 'Description List', href: `${resolve('/description-list')}/` },
		{ ident: '12', text: 'Dropbar', href: `${resolve('/dropbar')}/` },
		{ ident: '13', text: 'DropDown', href: `${resolve('/dropdown')}/` },
		{ ident: '14', text: 'Heading', href: `${resolve('/heading')}/` },
		{ ident: '15', text: 'Label', href: `${resolve('/label')}/` },
		{ ident: '16', text: 'Nav', href: `${resolve('/nav')}/` },
		{ ident: '17', text: 'Off-Canvas', href: `${resolve('/off-canvas')}/` },
		{ ident: '18', text: 'Progress', href: `${resolve('/progress')}/` },
		{ ident: '19', text: 'Section', href: `${resolve('/section')}/` },
		{ ident: '20', text: 'Spinner', href: `${resolve('/spinner')}/` },
		{ ident: '21', text: 'Tab', href: `${resolve('/tab')}/` },
		{ ident: '22', text: 'Text', href: `${resolve('/text')}/` },
		{ ident: '23', text: 'Toggle', href: `${resolve('/toggle')}/` },
		{ ident: '24', text: 'Totop', href: `${resolve('/totop')}/` },
	];

	let gettingStartedNavItems: INavItem[] = [{ ident: '1', text: 'Introduction', href: `${resolve('/getting-started')}/` }];
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div uk-sticky class="uk-navbar-container uk-sticky uk-active uk-sticky-below uk-sticky-fixed">
	<div class="uk-container">
		<nav uk-navbar class="uk-navbar">
			<div class="uk-navbar-center">
				<div class="uk-navbar-center-left">
					<a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon uk-toggle href="#offcanvas-slide" />
					<ul class="uk-navbar-nav">
						<li>
							<a href="https://www.npmjs.com/package/svelte-uikit-components" target="_blank">NPM</a>
						</li>
					</ul>
				</div>
				<a class="uk-navbar-item uk-logo" href={resolve('/')} alt="Back to Home">
					<img src={asset('/svelte-uikit-no-bg.png')} alt="Svelte UiKit Components Logo" width="50" />
				</a>
				<div class="uk-navbar-center-right">
					<ul class="uk-navbar-nav">
						<li>
							<a href="https://github.com/Wigtertainment/svelte-uikit-components" target="_blank">Github</a>
						</li>
					</ul>
					<button
						type="button"
						class="theme-toggle"
						on:click={toggleTheme}
						aria-pressed={darkMode}
						aria-label={darkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
						title={darkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}>
						{#if darkMode}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<circle cx="12" cy="12" r="4" />
								<path
									d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
							</svg>
						{:else}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6a8.5 8.5 0 1 0 11.5 11.5Z" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</nav>
	</div>
</div>
<div class="tm-sidebar-left uk-visible@m">
	<h3>Getting Started</h3>
	<Nav items={gettingStartedNavItems} />
	<h3>Documentation</h3>
	<Nav items={navItems} />
</div>
<div id="tm-main" class="tm-main uk-section uk-section-default">
	<div class="uk-container uk-container-small uk-position-relative">
		<slot />
	</div>
</div>
<div id="offcanvas-slide" uk-offcanvas="overlay: true">
	<div class="uk-offcanvas-bar">
		<h3>Getting Started</h3>
		<Nav items={gettingStartedNavItems} />
		<h3>Documentation</h3>
		<Nav items={navItems} />
	</div>
</div>
