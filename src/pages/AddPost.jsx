import { PostForm } from "../components/PostForm";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { postService } from "../services/PostService";

const BTN_TEXT = "Create";
export const AddPost = () => {
  const history = useHistory();
  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  const handleCreateNewPost = async (e) => {
    e.preventDefault();

    const response = await postService.create(post);

    if (response.status == 200){
        history.push("/posts");
    }
  };

  const handleResetForm = () => {
    setPost({
        title:"",
        text:"",
    });
  }

  return (
    <PostForm
      post={post}
      btnTitle={BTN_TEXT}
      onChange={setPost}
      onReset={handleResetForm}
      onSubmit={handleCreateNewPost}
    />
  );
};
