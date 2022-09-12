import { FC } from "react";
import { ResponseContactDTO } from "@popr-project/types";
export declare const ContactListItem: FC<{
  contact: ResponseContactDTO;
  index: number;
  checked: number[];
  onChange: any;
}>;
