import { type FC, type ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

interface PropsType {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  onClick?: () => void;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white border-blue-600",
  secondary: "bg-gray-600 hover:bg-gray-600 text-white border-gray-500",
  outline: "bg-white text-blue-600 border-blue-600 hover:bg-blue-50",
  danger: "bg-red-600 hover:bg-red-700 text-white border-red-600",
};

const sizeClasses = {
  sm: "text-xs px-2 py-1",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-3",
};

const Button: FC<PropsType> = ({
  type = "button",
  children,
  variant = "primary",
  onClick,
  className = "",
  iconLeft,
  iconRight,
  isLoading = false,
  disabled = false,
  fullWidth = false,
  size = "md",
}) => {
  const baseStyles = `inline-flex items-center justify-center gap-2 border-2 rounded-lg font-semibold transition-all duration-200 ${
    fullWidth ? "w-full" : ""
  } ${sizeClasses[size]}`;

  const variantStyle = variantClasses[variant];

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`bg- ${baseStyles} ${variantStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin text-lg" />
      ) : (
        <>
          {iconLeft && <span className="text-lg">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="text-lg">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
