import { type ButtonHTMLAttributes, memo } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg'
};

const variantStyles = {
  primary: 'bg-brand text-white hover:bg-blue-700',
  secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
  danger: 'bg-red-600 text-white hover:bg-red-700'
};

function ButtonBase({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-md font-medium transition disabled:cursor-not-allowed disabled:opacity-70',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

const Button = memo(ButtonBase);
export default Button;
