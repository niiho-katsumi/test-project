import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import ArticleDetailList from "../organisms/ArticleDetailList";
import { posts } from "../../data/posts";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const filteredArticle = posts.find((post) => post.id === Number(id));
  if (!filteredArticle) return;
  return (
    <>
      <Layout>
        <ArticleDetailList
          article={filteredArticle}
          omission={false}
          outline={false}
        />
      </Layout>
    </>
  );
}
