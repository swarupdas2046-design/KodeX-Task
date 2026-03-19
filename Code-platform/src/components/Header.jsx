export default function Header({ count, onNewPost }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-mark">■</span>
          <span className="brand-name">DRAFTS</span>
          {count > 0 && <span className="brand-count">{count}</span>}
        </div>
        <button className="btn-new" onClick={onNewPost}>
          + New Post
        </button>
      </div>
    </header>
  );
}
