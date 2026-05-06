import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import PostDetailList from "../organisms/PostDetailList";
import { useEffect, useState } from "react";
import type { PostInfo } from "../../type";

export default function PostDetail() {
  const [post, setPost] = useState<PostInfo>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetcher = async (): Promise<void> => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`,
      );
      const data = await res.json();
      setPost(data.post);
    };
    fetcher();
  }, []);

  if (!post) return <p>記事が見つかりません</p>;

  return (
    <>
      <Layout>
        <PostDetailList post={post} omission={false} outline={false} />
      </Layout>
    </>
  );
}
