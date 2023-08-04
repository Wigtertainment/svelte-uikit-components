import type { Action } from 'svelte/action';
import { uuidv4 } from "../../shared/uuid.service.js";
import UIkit from "uikit";
import { TooltipOptions } from './types.js';

export const tooltip: Action<HTMLElement, TooltipOptions, {
    'on:beforeshow': (e: CustomEvent<object>) => void,
    'on:show': (e: CustomEvent<object>) => void,
    'on:shown': (e: CustomEvent<object>) => void,
    'on:beforehide': (e: CustomEvent<object>) => void,
    'on:hide': (e: CustomEvent<object>) => void,
    'on:hidden': (e: CustomEvent<object>) => void
}> = (node, options: TooltipOptions) => {

    node.id = uuidv4().split('-')[0];
    node.classList.add(node.id);

    let opt: TooltipOptions = new TooltipOptions(options);
    const uikitTooltipEl = UIkit.tooltip(node, opt);

    let hasEventBeforeShowFired: boolean = false;
    let hasEventShowFired: boolean = false;
    let hasEventShownFired: boolean = false;
    let hasEventBeforeHideFired: boolean = false;
    let hasEventHideFired: boolean = false;
    let hasEventHiddenFired: boolean = false;

    UIkit.util.on(document, 'beforeshow', `#${uikitTooltipEl.id}`, (event: CustomEvent) => {
        if (!hasEventBeforeShowFired) {
            hasEventBeforeShowFired = true;
            node.dispatchEvent(new CustomEvent("beforeshow", { detail: event.detail[0] }));
        }
    });
    UIkit.util.on(document, "show", `#${uikitTooltipEl.id}`, (event: CustomEvent) => {
        if (!hasEventShowFired) {
            hasEventShowFired = true;
            node.dispatchEvent(new CustomEvent("show", { detail: event.detail[0] }));
        }
    });
    UIkit.util.on(document, "shown", `#${uikitTooltipEl.id}`, (event: CustomEvent) => {
        if (!hasEventShownFired) {
            hasEventShownFired = true;
            node.dispatchEvent(new CustomEvent("shown", { detail: event.detail[0] }));
        }
    });
    UIkit.util.on(document, "beforehide", `#${uikitTooltipEl.id}`, (event: CustomEvent) => {
        if (!hasEventBeforeHideFired) {
            hasEventBeforeHideFired = true;
            node.dispatchEvent(new CustomEvent("beforehide", { detail: event.detail[0] }));
        }
    });
    UIkit.util.on(document, "hide", `#${uikitTooltipEl.id}`, (event: CustomEvent) => {
        if (!hasEventHideFired) {
            hasEventHideFired = true;
            node.dispatchEvent(new CustomEvent("hide", { detail: event.detail[0] }));
        }
    });
    UIkit.util.on(document, "hidden", `#${uikitTooltipEl.id}`, (event: CustomEvent) => {
        if (!hasEventHiddenFired) {
            hasEventHiddenFired = true;
            node.dispatchEvent(new CustomEvent("hidden", { detail: event.detail[0] }));
            hasEventBeforeShowFired = false;
            hasEventShowFired = false;
            hasEventShownFired = false;
            hasEventBeforeHideFired = false;
            hasEventHideFired = false;
            hasEventHiddenFired = false;
        }
    });
    return {
        destroy() {
            // the node has been removed from the DOM
        },
    };
};
