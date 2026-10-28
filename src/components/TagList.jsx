export default function TagList({ items = [] }) {
  return (
    <div className="tag-list">
      {items.map((item) => <span className="tag" key={item}>{item}</span>)}
    </div>
  );
}