type Color = "default" | "primary" | "secondary" | "danger";
type Variant = "text" | "outline" | "default";
type Size = "sm" | "md" | "lg";
type Icon = "shopping_cart" | "local_grocery_store";

interface Props {
    disabled?: boolean;
    children?: any;
    color?: Color;
    endIcon?: Icon;
    size?: Size;
    startIcon?: Icon;
    variant?: Variant;
}

export const Button = ({
    children,
    variant = "default",
    color = "default",
    size = "md",
    endIcon,
    disabled,
    startIcon,
}: Props) => {
    const variantDefault = `${
        color === "default"
            ? "bg-default-300/80 text-default-800 hover:bg-default-500/80 hover:text-white font-medium  border-2 border-transparent disabled:bg-gray-300 disabled:text-black/50"
            : color === "primary"
            ? "bg-primary-300/80 text-primary-800 hover:bg-primary-500/80 hover:text-white font-medium  border-2 border-transparent disabled:bg-gray-300 disabled:text-black/50"
            : color === "secondary"
            ? "bg-secondary-300/80 text-secondary-800 hover:bg-secondary-500/80 hover:text-white font-medium  border-2 border-transparent disabled:bg-gray-300 disabled:text-black/50"
            : color === "danger" &&
              "bg-danger-700/80 text-black/80 hover:bg-danger-500/80 hover:text-white font-medium  border-2 border-transparent disabled:bg-gray-300 disabled:text-black/50"
    }`;

    const variantOutline = `${
        color === "primary"
            ? "border-2 bg-primary-300/0 border-primary-300/80 hover:bg-primary-300/80 hover:text-white disabled:bg-gray-300 disabled:text-black/50"
            : color === "secondary"
            ? " border-2 bg-secondary-300/0 border-secondary-300/80 hover:bg-secondary-300/80 text-secondary-800/70 hover:text-white disabled:bg-gray-300 disabled:text-black/50"
            : color === "default"
            ? "border-2 bg-default-300/0 border-default-300/80 hover:bg-default-300/80 hover:text-default-800 text-default-800/70  disabled:bg-gray-300 disabled:text-black/50"
            : color === "danger" &&
              "border-2 bg-danger-800/0 border-danger-800/80 hover:bg-danger-800/80 text-danger-800/70 hover:text-white disabled:bg-gray-300 disabled:text-black/50"
    }`;
    const variantText = `${
        color === "default"
            ? "bg-transparent text-default-800 hover:bg-default-300/80  border-2 border-transparent disabled:bg-transparent disabled:text-black/50"
            : color === "primary"
            ? "bg-transparent text-primary-800 hover:bg-primary-300/80  border-2 border-transparent   disabled:hover:bg-transparent disabled:text-black/50"
            : color === "secondary"
            ? "bg-transparent text-secondary-800 hover:bg-secondary-300/80  border-2 border-transparent  disabled:hover:bg-transparent disabled:text-black/50"
            : color === "danger" &&
              "bg-transparent text-danger-800 hover:bg-danger-300/80  border-2 border-transparent disabled:hover:bg-transparent disabled:text-black/50"
    }`;

    const sizeButton = `${
        size === "md"
            ? "px-4 py-1.5"
            : size === "sm"
            ? "px-1 py-1"
            : size === "lg"
            ? "px-5 py-2"
            : null
    }`;

    return (
        <button
            className={
                `flex items-center gap-2 ${sizeButton} rounded-lg transition-colors disabled:border-transparent ` +
                `${
                    variant === "default"
                        ? variantDefault
                        : variant === "text"
                        ? variantText
                        : variant === "outline"
                        ? variantOutline
                        : null
                }`
            }
            disabled={disabled ? true : false}
        >
            {startIcon && (
                <span className="material-icons md-18 cursor-pointer">
                    {startIcon}
                </span>
            )}
            {children ? children : "Default"}
            {endIcon && (
                <span className="material-icons md-18 cursor-pointer">
                    {endIcon}
                </span>
            )}
        </button>
    );
};
