import { Link } from "react-router-dom";
import "../../../index.css";

type Props = {
  text: string;
};

export default function TextLink({ text }: Props) {
  return (
    <Link className="text-white font-bold" to="/">
      {text}
    </Link>
  );
}
