import PostCard from "./PostCard";

export default function PostGrid({ posts, onEdit, onDelete }) {
  if (posts.length === 0) {
    return (
      <div className="empty">
        <p className="empty-line1">No posts yet.</p>
        <p className="empty-line2">Click "+ New Post" to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
