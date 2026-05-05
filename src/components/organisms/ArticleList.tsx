import type { PostInfo } from "../../type";
import Article from "../molecules/Article";

type Props = {
  articles: PostInfo[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <ul>
      {articles.map((article) => (
        <Article
          PostInfo={{
            id: article.id,
            title: article.title,
            thumbnailUrl: article.thumbnailUrl,
            createdAt: article.createdAt,
            categories: article.categories,
            content: article.content,
          }}
        />
      ))}
    </ul>
  );
}
