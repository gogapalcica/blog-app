import { useState } from "react";
import { useParams } from "react-router-dom"
import {postService} from "../services/PostService"

export const SinglePost = () =>{
    const {id} = useParams;
    const [post,setPost] = useState;

    const handleGetSinglePost = async()=>{
        id && setPost(await postService.get(id));
    }

    useEffect(()=>{
        handleGetSinglePost();
    },[]);

    if(!post) return <></>

    return <div>

    </div>
}