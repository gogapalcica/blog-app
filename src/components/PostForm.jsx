export const PostForm = ({ post, onChange, onSubmit, btnTitle }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          required
          value={post.title}
          onChange={({target}) => onChange({ ...post, title: target.value })}
        />
      </label>
      <br />

      <label htmlFor="text">
        Text
        <input
          id="text"
          type="text"
          required
          value={post.text}
          onChange={({target}) => onChange({ ...post, text: target.value })}
        />
      </label>
      <br />
      <button type= "submit">{btnTitle}</button>
    </form>
  );
};
