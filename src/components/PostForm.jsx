export const PostForm = ({ post, onChange, onSubmit, btnTitle, onReset }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          required
          minLength={2}
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
          maxLength={300}
          value={post.text}
          onChange={({target}) => onChange({ ...post, text: target.value })}
        />
      </label>
      <br />
      <button type= "submit">{btnTitle}</button>
      <button onClick={onReset}>Reset Form</button>
    </form>
  );
};
