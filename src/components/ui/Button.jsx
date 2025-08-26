export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "pill px-6 py-3 font-semibold transition-all duration-300 text-center";

  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    dark: "bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600",
  };

  return (
    <a className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </a>
  );
}
