import { Check, ChevronDown } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

import { DatePicker } from "@/components/ui/DatePicker";

type FieldShellProps = {
  readonly label: string;
  readonly error?: string;
  readonly children: ReactNode;
};

const FieldShell = ({ label, error, children }: FieldShellProps) => (
  <label className="grid gap-2 text-sm font-semibold">
    {label}
    {children}
    {error && (
      <span className="text-xs font-normal text-danger" role="alert">
        {error}
      </span>
    )}
  </label>
);

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  readonly label: string;
  readonly error?: string;
};

export const TextField = ({
  label,
  error,
  placeholder = "...",
  ...props
}: TextFieldProps) => (
  <FieldShell error={error} label={label}>
    <input
      className="min-h-12 rounded-2xl border border-border/70 bg-background px-4 font-normal transition-[border-color,box-shadow] duration-250 outline-none focus:border-primary focus:ring-2 focus:ring-ring/20"
      placeholder={placeholder}
      {...props}
    />
  </FieldShell>
);

type DateFieldProps = {
  readonly disabled?: boolean;
  readonly error?: string;
  readonly id?: string;
  readonly label: string;
  readonly onBlur?: () => void;
  readonly onValueChange: (value: string) => void;
  readonly value?: string;
};

export const DateField = ({
  disabled,
  error,
  id,
  label,
  onBlur,
  onValueChange,
  value,
}: DateFieldProps) => (
  <FieldShell error={error} label={label}>
    <DatePicker
      aria-label={label}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onValueChange={onValueChange}
      value={value}
    />
  </FieldShell>
);

type SelectFieldProps = {
  readonly label: string;
  readonly error?: string;
  readonly disabled?: boolean;
  readonly name?: string;
  readonly onBlur?: () => void;
  readonly onValueChange: (value: string) => void;
  readonly options: readonly {
    readonly label: string;
    readonly value: string;
  }[];
  readonly placeholder?: string;
  readonly value?: string;
};

export const SelectField = ({
  label,
  error,
  disabled,
  options,
  name,
  onBlur,
  onValueChange,
  placeholder = "Select an option",
  value,
}: SelectFieldProps) => (
  <div className="grid gap-2 text-sm font-semibold">
    <span>{label}</span>
    {name && (
      <input
        disabled={disabled}
        name={name}
        type="hidden"
        value={value ?? ""}
      />
    )}
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        aria-label={label}
        className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background px-4 text-left font-normal transition outline-none focus:border-primary focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
        onBlur={onBlur}
        type="button"
      >
        <span className={value ? undefined : "text-muted-foreground"}>
          {options.find((option) => option.value === value)?.label ??
            placeholder}
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-4 text-muted-foreground"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          className="z-50 min-w-(--radix-dropdown-menu-trigger-width) overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-xl"
          collisionPadding={16}
          sideOffset={8}
        >
          <DropdownMenu.RadioGroup onValueChange={onValueChange} value={value}>
            {options.map((option) => (
              <DropdownMenu.RadioItem
                className="relative flex min-h-11 cursor-pointer items-center rounded-xl py-2 pr-9 pl-3 text-sm outline-none data-[highlighted]:bg-muted data-[state=checked]:font-semibold data-[state=checked]:text-primary"
                key={option.value}
                value={option.value}
              >
                {option.label}
                <DropdownMenu.ItemIndicator className="absolute right-3">
                  <Check aria-hidden="true" className="size-4" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    {error && (
      <span className="text-xs font-normal text-danger" role="alert">
        {error}
      </span>
    )}
  </div>
);

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  readonly label: string;
  readonly error?: string;
};

export const TextAreaField = ({
  label,
  error,
  placeholder = "...",
  ...props
}: TextAreaFieldProps) => (
  <FieldShell error={error} label={label}>
    <textarea
      className="min-h-36 resize-y rounded-2xl border border-border/70 bg-background px-4 py-3 font-normal transition-[border-color,box-shadow] duration-250 outline-none focus:border-primary focus:ring-2 focus:ring-ring/20"
      placeholder={placeholder}
      {...props}
    />
  </FieldShell>
);
