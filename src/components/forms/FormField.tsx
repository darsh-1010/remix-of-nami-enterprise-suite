import { InputHTMLAttributes, ReactNode } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export function FormField({ label, name, error, helperText, required, ...props }: FormFieldProps) {
  const id = `field-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-xs">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        className="input-base"
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${id}-helper`} className="text-xs text-muted-foreground">
          {helperText}
        </span>
      )}
    </div>
  );
}

interface FormSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export function FormSelect({
  label,
  name,
  options,
  error,
  required,
  placeholder,
  ...props
}: FormSelectProps) {
  const id = `select-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-xs">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <select
        id={id}
        name={name}
        className="input-base bg-background cursor-pointer"
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

interface FormTextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  rows?: number;
  required?: boolean;
}

export function FormTextarea({
  label,
  name,
  error,
  rows = 5,
  required,
  ...props
}: FormTextareaProps) {
  const id = `textarea-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-xs">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className="input-base input-textarea"
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...(props as InputHTMLAttributes<HTMLTextAreaElement>)}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
