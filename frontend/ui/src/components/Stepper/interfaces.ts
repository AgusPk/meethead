export interface StepProps {
  label: string;
  description: string;
  content: JSX.Element;
}

export interface StepButtonProps {
  handleNext: () => void;
  handleBack: () => void;
  index: number;
  stepLength: number;
}

export interface StepChildProps {
  step: StepProps;
  handleNext: () => void;
  handleBack: () => void;
  index: number;
  stepLength: number;
}
