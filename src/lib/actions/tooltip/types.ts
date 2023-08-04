import type { Animation } from "../../types.js";

export class TooltipOptions {
    constructor(opt?: TooltipOptions) {
        if (opt) {
            if (opt.title) { this.title = opt.title; }
            if (opt.pos) { this.pos = opt.pos; }
            if (opt.offset) { this.offset = opt.offset; }
            if (opt.animation) { this.animation = opt.animation; }
            if (opt.duration) { this.duration = opt.duration; }
            if (opt.delay) { this.delay = opt.delay; }
            if (opt.cls) { this.cls = opt.cls; }
            if (opt.container) { this.container = opt.container; }
        }
    }
    title: string = '';
    pos?: TooltipPosition = 'top';
    offset?: number | boolean = false;
    animation?: Animation = 'uk-animation-scale-up';
    duration?: number = 100;
    delay?: number = 0;
    cls?: string = 'uk-active';
    container?: string = 'body';
}

export type TooltipPosition = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';