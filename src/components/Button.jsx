
export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-700",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${bgColor} ${textColor} ${className} `} {...props}>
      {children}
    </button>
  );
}