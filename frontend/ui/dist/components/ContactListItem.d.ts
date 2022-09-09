import { FC } from "react";
import { ResponseContactDTO } from "@popr/types";
export declare const ContactListItem: FC<{
    contact: ResponseContactDTO;
    index: number;
    checked: number[];
    onChange: any;
}>;
