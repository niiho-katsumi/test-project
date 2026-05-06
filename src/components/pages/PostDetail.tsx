import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import PostDetailList from "../organisms/PostDetailList";
import { posts } from "../../data/posts";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const filteredPost = posts.find((post) => post.id === Number(id));
  if (!filteredPost) return <p>記事が見つかりません</p>;
  return (
    <>
      <Layout>
        <PostDetailList
          post={filteredPost}
          omission={false}
          outline={false}
        />
      </Layout>
    </>
  );
}
