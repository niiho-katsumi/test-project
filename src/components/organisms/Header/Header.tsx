import TextLink from "../../atoms/TextLink/TextLink";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-[#333]">
      <TextLink text={"Blog"} />
      <TextLink text={"お問い合わせ"} />
    </header>
  );
}
