import { posts } from "../../../data/posts";
import Layout from "../../../layouts/Layout/Layout";
import ArticleList from "../../organisms/ArticleList/ArticleList";
import "../../../index.css";

export default function Home() {
  return (
    <>
      <Layout>
        <ArticleList articles={posts} />
      </Layout>
    </>
  );
}
