import React, { FC } from "react";
export declare const IndividualStep: FC<{
    children: React.ReactNode;
    label: string;
    description: string;
    handleNext: () => void;
    handleBack: () => void;
    index: number;
    stepLength: number;
}>;
