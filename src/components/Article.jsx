function Article({ title, date, preview }) {
  return (
    <article>
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;