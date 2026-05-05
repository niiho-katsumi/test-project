import "../../../index.css";
import type { PostInfo } from "../../../type";
import Content from "../../atoms/Content/Content";
import DateText from "../../atoms/DateText/DateText";
import Title from "../../atoms/Title/Title";
import TagList from "../TagList/TagList";

type Props = {
  PostInfo: PostInfo;
};

export default function Article({ PostInfo }: Props) {
  const { id, title, categories, createdAt, content } = PostInfo;
  return (
    <li className="flex flex-col m-0 p-0 list-none">
      <a href={`/posts/${id}`}>
        <div className="border border-[#ccc] border-solid p-4 mb-8">
          <div className="flex justify-between">
            <DateText createdAt={createdAt} />
            <TagList categories={categories} />
          </div>
          <Title title={title} />
          <Content>{content}</Content>
        </div>
      </a>
    </li>
  );
}
