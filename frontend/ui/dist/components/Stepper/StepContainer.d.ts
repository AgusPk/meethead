import { FC } from "react";
export declare const StepContainer: FC<{
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
