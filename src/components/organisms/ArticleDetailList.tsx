import type { PostInfo } from "../../type";
import Thumbnail from "../atoms/Thumbnail";
import ArticleItem from "./ArticleItem";

type Props = {
  article: PostInfo;
  omission: boolean;
  outline: boolean;
};

export default function ArticleDetailList({
  article,
  omission,
  outline,
}: Props) {
  const { title, thumbnailUrl, createdAt, categories, content } = article;
  return (
    <>
      <Thumbnail title={title} url={thumbnailUrl} />
      <div className="p-4">
        <ArticleItem
          createdAt={createdAt}
          categories={categories}
          title={title}
          content={content}
          omission={omission}
          outline={outline}
        />
      </div>
    </>
  );
}
