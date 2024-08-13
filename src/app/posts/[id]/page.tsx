import { FC } from "react";

interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage: FC<PostPageProps> = ({ params }) => {
  return (
    <div>
      <h1>投稿 ID: {params.id}</h1>
      <p>これは動的なルーティングを使用したページです。</p>
    </div>
  );
};

export default PostPage;
