<script lang="ts">
	import Nav from '$lib/components/nav/nav.svelte';
	import type { INavItem } from '../lib/index.js';
	import github from 'svelte-highlight/styles/github';

	let navItems: INavItem[] = [
		{ ident: '', text: 'ACTIONS', isHeader: true },
		{ ident: '30', text: 'Tooltip', href: `/tooltip-action` },
		{ ident: '', text: 'COMPONENTS', isHeader: true },
		{ ident: '1', text: 'Accordion', href: `/accordion` },
		{ ident: '2', text: 'Article', href: `/article` },
		{ ident: '3', text: 'Alert', href: `/alert` },
		{ ident: '4', text: 'Badge', href: `/badge` },
		{ ident: '5', text: 'Breadcrumb', href: `/breadcrumb` },
		{ ident: '6', text: 'Button', href: `/button` },
		{ ident: '7', text: 'Button Group', href: `/button-group` },
		{ ident: '8', text: 'Card', href: `/card` },
		{ ident: '9', text: 'Comment', href: `/comment` },
		{ ident: '10', text: 'Countdown', href: `/countdown` },
		{ ident: '11', text: 'Description List', href: `/description-list` },
		{ ident: '12', text: 'DropDown', href: `/dropdown` },
		{ ident: '13', text: 'Heading', href: `/heading` },
		{ ident: '14', text: 'Label', href: `/label` },
		{ ident: '15', text: 'Nav', href: `/nav` },
		{ ident: '16', text: 'Section', href: `/section` },
		{ ident: '17', text: 'Spinner', href: `/spinner` },
		{ ident: '18', text: 'Tab', href: `/tab` },
		{ ident: '19', text: 'Text', href: `/text` },
		{ ident: '20', text: 'Totop', href: `/totop` },
	];

	let gettingStartedNavItems: INavItem[] = [{ ident: '1', text: 'Introduction', href: `/getting-started` }];
</script>

<svelte:head>
	{@html github}
</svelte:head>

<nav uk-sticky class="uk-navbar-container uk-sticky uk-active uk-sticky-below uk-sticky-fixed">
	<div class="uk-container">
		<div uk-navbar class="uk-navbar">
			<div class="uk-navbar-center">
				<div class="uk-navbar-center-left">
					<a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon uk-toggle href="#offcanvas-slide" />
					<ul class="uk-navbar-nav">
						<li>
							<a href="https://www.npmjs.com/package/svelte-uikit-components" target="_blank">NPM</a>
						</li>
					</ul>
				</div>
				<a class="uk-navbar-item uk-logo" href="/#" alt="Back to Home">
					<img src="./svelte-uikit-no-bg.png" alt="Svelte UiKit Components Logo" width="50" />
				</a>
				<div class="uk-navbar-center-right">
					<ul class="uk-navbar-nav">
						<li>
							<a href="https://github.com/Wigtertainment/svelte-uikit-components" target="_blank">Github</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</nav>
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
