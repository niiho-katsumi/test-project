import "../../../index.css";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-[#333]">
      <a className="text-white font-bold" href="/">
        Blog
      </a>
      <a className="text-white font-bold" href="/contact">
        お問い合わせ
      </a>
    </header>
  );
}
