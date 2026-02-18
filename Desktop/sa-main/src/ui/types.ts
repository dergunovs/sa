export interface IButtonProps {
  layout: 'primary' | 'secondary';
  isDisabled?: boolean;
  type?: 'submit' | 'button';
}

export interface IInputProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

export interface IInputEmits {
  (e: 'update:modelValue', value: string): void;
}

export interface IFieldProps {
  label: string;
}

export interface ISelectProps {
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}

export interface ISelectEmits {
  (e: 'update:modelValue', value: string): void;
}


