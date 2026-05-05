type Props = {
  children: React.ReactNode;
};

export default function Content({ children }: Props) {
  return (
    <div className="text-[1rem] leading-normal line-clamp-3 whitespace-pre-wrap">
      {children}
    </div>
  );
}
