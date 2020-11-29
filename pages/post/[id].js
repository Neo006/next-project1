import posts from "../../posts.json";
import {Layout} from "../../components/Layout";

const Post = (props) => {
  return (
    <Layout>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </Layout>
  );
};

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id],
  };
};

export default Post;