export interface INavItem {
    ident: string;
    text: string;
    href?: string;
    active?: boolean;
    children?: INavItem[];
}