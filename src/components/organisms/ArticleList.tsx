import type { PostInfo } from "../../type";
import Article from "../molecules/Article";

type Props = {
  articles: PostInfo[];
  omission: boolean;
  outline: boolean;
};

export default function ArticleList({ articles, omission, outline }: Props) {
  return (
    <ul>
      {articles.map((article) => (
        <Article
          key={article.id}
          PostInfo={{
            id: article.id,
            title: article.title,
            thumbnailUrl: article.thumbnailUrl,
            createdAt: article.createdAt,
            categories: article.categories,
            content: article.content,
          }}
          omission={omission}
          outline={outline}
        />
      ))}
    </ul>
  );
}
