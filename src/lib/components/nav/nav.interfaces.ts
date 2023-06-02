export interface INavItem {
    ident: string;
    text: string;
    isHeader?: boolean;
    href?: string;
    active?: boolean;
    children?: INavItem[];
}