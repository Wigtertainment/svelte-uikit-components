import type { Animation } from '../../types.js';

export type ToggleMode = 'click' | 'hover' | 'click, hover' | 'media';
export type ToggleMedia = boolean | number | string;
export type ToggleAnimation = Animation | `${Animation}, ${Animation}` | false;
