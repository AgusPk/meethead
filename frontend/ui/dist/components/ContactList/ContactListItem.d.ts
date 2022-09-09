import { FC } from "react";
import { ResponseContactDTO } from "@meethead/types";
export declare const ContactListItem: FC<{
    contact: ResponseContactDTO;
    index: number;
    checked: number[];
    onChange: any;
}>;
