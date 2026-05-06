import { Link } from "react-router-dom";
import type { PostInfo } from "../../type";
import ArticleItem from "../organisms/ArticleItem";

type Props = {
  PostInfo: PostInfo;
  omission: boolean;
  outline: boolean;
};

export default function Article({ PostInfo, omission, outline }: Props) {
  const { id, title, categories, createdAt, content } = PostInfo;
  return (
    <li className="flex flex-col m-0 p-0 list-none">
      <Link to={`/posts/${id}`}>
        <ArticleItem
          createdAt={createdAt}
          categories={categories}
          title={title}
          content={content}
          omission={omission}
          outline={outline}
        />
      </Link>
    </li>
  );
}
