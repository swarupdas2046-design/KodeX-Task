export default function PostCard({ post, onEdit, onDelete }) {
  const date = new Date(post.updatedAt || post.createdAt);
  const formatted = date.toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });

  return (
    <div className="card">
      {post.image && (
        <div className="card-img-wrap">
          <img src={post.image} alt={post.title} className="card-img" />
        </div>
      )}
      <div className="card-body">
        <div className="card-top">
          <span className="card-date">{formatted}{post.updatedAt ? " · edited" : ""}</span>
          <div className="card-actions">
            <button className="icon-btn" title="Edit" onClick={() => onEdit(post.id)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button className="icon-btn icon-btn--danger" title="Delete" onClick={() => onDelete(post.id)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
            </button>
          </div>
        </div>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-content">{post.content}</p>
      </div>
    </div>
  );
}
