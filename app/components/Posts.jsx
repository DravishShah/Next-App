import DeletePostButton from "./DeletePostButton";

export default function Posts({ id, title, content, authorName }) {
  //   console.log(id);
  return (
    <div className="p-2 border-2 border-white">
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
}
