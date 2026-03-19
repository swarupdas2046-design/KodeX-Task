import { useState } from "react";
import Header from "./components/Header";
import PostGrid from "./components/PostGrid";
import PostFormModal from "./components/PostFormModal";
import "./App.css";

export default function App() {
  // State as object map: { [id]: postObject } instead of array
  const [postsMap, setPostsMap] = useState({});
  const [postOrder, setPostOrder] = useState([]); // track insertion order
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCreate = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openEdit = (id) => {
    setEditingId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleCreate = (data) => {
    const id = Date.now().toString();
    setPostsMap((prev) => ({ ...prev, [id]: { id, createdAt: new Date().toISOString(), ...data } }));
    setPostOrder((prev) => [id, ...prev]);
    closeModal();
  };

  const handleEdit = (data) => {
    setPostsMap((prev) => ({
      ...prev,
      [editingId]: { ...prev[editingId], ...data, updatedAt: new Date().toISOString() },
    }));
    closeModal();
  };

  const handleDelete = (id) => {
    setPostsMap((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setPostOrder((prev) => prev.filter((pid) => pid !== id));
  };

  // Derive ordered posts array from map + order
  const posts = postOrder.map((id) => postsMap[id]).filter(Boolean);

  return (
    <div className="app">
      <Header count={posts.length} onNewPost={openCreate} />
      <main className="main">
        <PostGrid posts={posts} onEdit={openEdit} onDelete={handleDelete} />
      </main>
      {isModalOpen && (
        <PostFormModal
          editingPost={editingId ? postsMap[editingId] : null}
          onSubmit={editingId ? handleEdit : handleCreate}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
