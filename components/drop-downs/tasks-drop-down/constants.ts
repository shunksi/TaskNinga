import { Copy, Edit2, Star } from "iucide-react";
import { MenuItem } from "./types";


export const MENU_ITEMS: MenuItem[] = [
    {
        icon: Edit2,
        label: "Edit",
        shortcut: "↑⌘E",
    },
    {
        icon: Copy,
        label: "Make a Copy",
        shortcut: "⌘c",
    },
    {
        icon: Star,
        label: "Favorite",
        shortcut: "⌘s",
    },  
];

export const LABEL_OPTIONS = ["Bug", "Feature", "Documentation"];

