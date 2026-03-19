# Drafts — React Posting Platform

A minimal React posting application with a modal-based workflow, object map state structure, and live post preview while writing.

---

## 🚀 Getting Started

```bash
# 1. Unzip the project
unzip posting-platform-v2.zip
cd posting-platform-v2

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

App will open at `http://localhost:5173/`

---

## ✅ Features

- **Create** a post via a modal dialog — title, content, optional image
- **Edit** any post — modal reopens pre-filled, shows "edited" label on card after saving
- **Delete** a post using icon buttons (appear on card hover)
- **Live preview** — right side of the modal updates in real-time as you type
- **Image upload** — select and preview image before publishing
- **Keyboard shortcut** — press `Escape` to close the modal
- **Click outside** to close the modal (overlay click)
- **Responsive** — grid layout adapts to screen size

---

## 🗂️ Project Structure

```
src/
├── App.js                  # Root component — holds all state
├── App.css                 # Global styles
├── index.js                # React entry point
└── components/
    ├── Header.jsx           # Navbar with post count + "New Post" button
    ├── PostGrid.jsx         # Renders grid of PostCards (or empty state)
    ├── PostCard.jsx         # Individual post card with hover actions
    └── PostFormModal.jsx    # Modal with form + live preview panel
```

---

## 🧠 How State Works

State lives in `App.js`. Instead of a single posts array, posts are stored as an **object map** with a separate order-tracking array:

```js
const [postsMap, setPostsMap]   = useState({});   // { [id]: postObject }
const [postOrder, setPostOrder] = useState([]);   // [id, id, id, ...] newest first
const [editingId, setEditingId] = useState(null); // ID of post being edited
const [isModalOpen, setIsModalOpen] = useState(false);
```

The ordered posts array is **derived** (not stored) by combining both:

```js
const posts = postOrder.map((id) => postsMap[id]).filter(Boolean);
```

This means the source of truth is split — the map gives O(1) lookup by ID, and the order array controls display sequence.

Each post object looks like:

```js
{
  id: "1705312200000",          // Date.now().toString()
  title: "My Post",
  content: "Some content here.",
  image: "data:image/png;base64,...",  // base64 or null
  createdAt: "2024-01-15T10:30:00.000Z",
  updatedAt: "2024-01-15T11:00:00.000Z"  // only present after an edit
}
```

---

## ⚙️ Core Logic

### Creating a Post
A new ID is generated using `Date.now().toString()`. The post is added to the map and its ID is prepended to the order array — two separate state updates:

```js
const handleCreate = (data) => {
  const id = Date.now().toString();
  setPostsMap((prev) => ({
    ...prev,
    [id]: { id, createdAt: new Date().toISOString(), ...data },
  }));
  setPostOrder((prev) => [id, ...prev]);
  closeModal();
};
```

### Editing a Post
Only `postsMap` is updated — the order array stays untouched (post doesn't move in the grid). An `updatedAt` timestamp is added so the card can show an "edited" label:

```js
const handleEdit = (data) => {
  setPostsMap((prev) => ({
    ...prev,
    [editingId]: { ...prev[editingId], ...data, updatedAt: new Date().toISOString() },
  }));
  closeModal();
};
```

### Deleting a Post
The post is removed from the map using `delete`, and its ID is filtered out of the order array:

```js
const handleDelete = (id) => {
  setPostsMap((prev) => {
    const next = { ...prev };
    delete next[id];
    return next;
  });
  setPostOrder((prev) => prev.filter((pid) => pid !== id));
};
```

### Image Handling
Same as V1 — `FileReader` reads the file and converts it to a base64 string stored in local state:

```js
const reader = new FileReader();
reader.onloadend = () => setPreview(reader.result);
reader.readAsDataURL(file);
```

### Modal Open/Close
Modal state is controlled by two values: `isModalOpen` (boolean) and `editingId` (string or null). The same modal component handles both create and edit — the parent decides which submit handler to pass:

```js
onSubmit={editingId ? handleEdit : handleCreate}
```

---

## 📋 Form — react-hook-form with `watch()`

`PostFormModal.jsx` uses `react-hook-form`. The key difference from a basic setup is `watch()` — it subscribes to field values in real-time and feeds them to the live preview panel:

```js
const liveTitle   = watch("title");
const liveContent = watch("content");
```

These values update on every keystroke and are rendered instantly in the preview card on the right side of the modal — no submit needed.

`defaultValues` are passed at form initialization (not via `setValue` in `useEffect`), which is the cleaner pattern when the initial data is known upfront:

```js
useForm({
  defaultValues: {
    title: editingPost?.title || "",
    content: editingPost?.content || "",
  },
});
```

Validation rules:

```js
{...register("title",   { required: "Required" })}
{...register("content", { required: "Required" })}
```

### Modal UX Extras

Close on `Escape` key — event listener added in `useEffect` with cleanup:

```js
useEffect(() => {
  const onKey = (e) => { if (e.key === "Escape") onClose(); };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [onClose]);
```

Close on overlay click — uses a ref to check if the click target is the overlay itself (not the modal card):

```js
const handleOverlayClick = (e) => {
  if (e.target === overlayRef.current) onClose();
};
```

---

## 🎨 UI & Styling

- **Font:** IBM Plex Mono + IBM Plex Sans (Google Fonts)
- **Theme:** Minimal gray — `#F2F2F2` background, pure white cards
- **Layout:** Auto-fill CSS grid for posts, modal overlay for create/edit
- **Card actions:** Edit and Delete icon buttons appear on card hover only
- **Color accent:** Pure black `#111111`
- All styles in `App.css` using CSS custom properties

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` | UI library |
| `react-dom` | DOM rendering |
| `react-hook-form` | Form state, validation & `watch()` |

---

## 🔑 Key React Concepts Used

- `useState` — object map + order array pattern for structured state
- `useEffect` — keyboard event listener with cleanup, image sync
- `useRef` — overlay click detection, file input control
- `watch()` from react-hook-form — live reactive field values
- `defaultValues` in `useForm` — pre-filling edit form without `setValue`
- Conditional rendering — modal only mounts when `isModalOpen` is true
- Derived state — `posts` array computed from `postsMap + postOrder`
- Object spread + `delete` — immutable-style map updates

---
