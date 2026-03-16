import { forwardRef, type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, className, ...props }, ref) => (
  <label className="block space-y-1">
    {label ? <span className="text-sm font-medium text-slate-700">{label}</span> : null}
    <input
      ref={ref}
      className={clsx(
        'w-full rounded-md border border-slate-300 px-3 py-2 outline-none ring-brand/40 focus:ring-4',
        error && 'border-red-500',
        className
      )}
      {...props}
    />
    {error ? <p className="text-xs text-red-600">{error}</p> : null}
  </label>
));

Input.displayName = 'Input';

export default Input;
