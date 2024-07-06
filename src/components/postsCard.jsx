export default function BasicCard(props) {
  return (
    <article>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <span>{props.comments}</span>
      </div>
    </article>
  );
}
