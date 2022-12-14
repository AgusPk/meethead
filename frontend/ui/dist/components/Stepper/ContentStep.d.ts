import { FC } from "react";
export declare const ContentStep: FC<{
    step: {
        label: string;
        description: string;
        content: JSX.Element;
    };
    handleNext: () => void;
    handleBack: () => void;
    index: number;
    stepLength: number;
}>;
