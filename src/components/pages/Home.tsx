import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import PostList from "../organisms/PostList";
import type { PostInfo } from "../../type";

export default function Home() {
  const [posts, setPosts] = useState<PostInfo[]>([]);

  useEffect(() => {
    const fetcher = async (): Promise<void> => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts",
      );
      const data = await res.json();
      setPosts(data.posts);
    };
    fetcher();
  }, []);

  return (
    <>
      <Layout>
        <PostList posts={posts} omission={true} outline={true} />
      </Layout>
    </>
  );
}
