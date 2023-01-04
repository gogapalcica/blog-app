import { PostForm } from "../components/PostForm";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { postService } from "../services/PostService";

const BTN_TEXT_CREATE = "Create";
const BTN_TEXT_EDIT = "Edit";

export const AddPost = () => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    let response = {};

    if(id){
    response = await postService.edit(post);
    }else{
    response = await postService.create(post);
    }

    if (response.status == 200) {
      history.push("/posts");
    }
  };

  const handleResetForm = () => {
    setPost({
      title: "",
      text: "",
    });
  };

  const handleGetSinglePost = async () => {
    setPost(await postService.get(id));
  };

  useEffect(() => {
    id && handleGetSinglePost();
  }, [id]);

  return (
    <PostForm
      post={post}
      btnTitle={id ? BTN_TEXT_CREATE : BTN_TEXT_EDIT}
      onChange={setPost}
      onReset={handleResetForm}
      onSubmit={handleOnSubmitForm}
    />
  );
};
