import { useEffect } from "react";
import { useState } from "react";
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
        <li key = {post.id}>
        <SinglePostDetails  
        title = {post.title} 
        text = {post.text} />;
        </li>
      })}
    </div>
  );
};
