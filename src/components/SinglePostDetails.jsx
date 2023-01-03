import { Link } from "react-router-dom"

export const SinglePostDetails = ({id, title, text}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <Link to= {`/posts/${id}`}>View Post</Link>
        </div>
    )
}