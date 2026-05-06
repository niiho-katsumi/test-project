import { posts } from "../../data/posts";
import Layout from "../../layouts/Layout";
import ArticleList from "../organisms/ArticleList";

export default function Home() {
  return (
    <>
      <Layout>
        <ArticleList articles={posts} omission={true} outline={true} />
      </Layout>
    </>
  );
}
