import { Link } from "react-router-dom"

export const SinglePostDetails = ({id, title, text, onDelete}) => {
    return(
        <div>
            <h1>{title}</h1>
            <button onClick={()=>onDelete(id)}>Delete</button>
            <Link to={`/posts/edit/${id}`}>Edit</Link>
            <p>{text}</p>
            <Link to= {`/posts/${id}`}>View Post</Link>
        </div>
    )
};