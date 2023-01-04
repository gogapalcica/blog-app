import { useEffect, useState} from "react";
import { postService } from "../services/PostService";
import { SinglePostDetails } from "../components/SinglePostDetails";

export const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    setPosts(await postService.getAll());
  };

  const handleDeletePost = async (postId) => {
    const response = await postService.delete(postId);
    if(response.status === 200){
      setPosts(posts.filter(({id})=> id !== postId));
    }
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
        text = {post.text}
        onDelete = {handleDeletePost} />;
        
      })}
    </div>
  );
};
