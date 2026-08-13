import type { Animation } from '../../types.js';

export type DropbarDirection = 'top' | 'bottom' | 'left' | 'right';
export type DropbarMode = 'click' | 'hover' | 'click, hover';
export type DropbarStretch = boolean | 'x' | 'y';
export type DropbarPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right'
	| 'left-top'
	| 'left-center'
	| 'left-bottom'
	| 'right-top'
	| 'right-center'
	| 'right-bottom';
export type DropbarAnimation =
	| Animation
	| 'slide-top'
	| 'slide-bottom'
	| 'slide-left'
	| 'slide-right'
	| 'reveal-top'
	| 'reveal-bottom'
	| 'reveal-left'
	| 'reveal-right'
	| false;
