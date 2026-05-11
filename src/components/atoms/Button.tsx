type Props = {
  type: "submit" | "button";
  BackGroudColor: "gray" | "paleGray";
  textColor: "black" | "white";
  onClick?: () => void;
  disabled: boolean;
  isSubmitting: boolean;
  text: string;
};

export default function Button({
  type,
  BackGroudColor,
  textColor,
  onClick,
  disabled,
  isSubmitting,
  text,
}: Props) {
  return (
    <button
      type={type}
      className={`${BackGroudColor === "gray" ? "bg-gray-800" : "bg-gray-200"} ${textColor === "black" ? "text-black" : "text-white"} font-bold py-2 px-4 rounded-lg`}
      onClick={onClick}
      disabled={disabled}
    >
      {isSubmitting ? "送信中" : `${text}`}
    </button>
  );
}
