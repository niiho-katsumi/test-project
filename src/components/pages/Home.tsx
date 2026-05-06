import { posts } from "../../data/posts";
import Layout from "../../layouts/Layout";
import PostList from "../organisms/PostList";

export default function Home() {
  return (
    <>
      <Layout>
        <PostList posts={posts} omission={true} outline={true} />
      </Layout>
    </>
  );
}
