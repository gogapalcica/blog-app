import { useEffect, useState} from "react";
import { postService } from "../services/PostService";
import { SinglePostDetails } from "../components/SinglePostDetails";

export const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    setPosts(await postService.getAll());
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        
        <SinglePostDetails  
        key = {post.id}
        id = {post.id}
        title = {post.title} 
        text = {post.text} />;
        
      })}
    </div>
  );
};
