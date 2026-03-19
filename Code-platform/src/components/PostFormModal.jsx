import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function PostFormModal({ editingPost, onSubmit, onClose }) {
  const [preview, setPreview] = useState(editingPost?.image || null);
  const fileRef = useRef();
  const overlayRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      title: editingPost?.title || "",
      content: editingPost?.content || "",
    },
  });

  // watch() for live preview panel
  const liveTitle = watch("title");
  const liveContent = watch("content");

  useEffect(() => {
    if (editingPost?.image) setPreview(editingPost.image);
  }, [editingPost]);

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const onFormSubmit = (data) => {
    onSubmit({ ...data, image: preview });
  };

  return (
    <div className="overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">{editingPost ? "Edit Post" : "New Post"}</span>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Form side */}
          <form className="modal-form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
            <div className="field">
              <label className="label">Title</label>
              <input
                className={`input ${errors.title ? "input-err" : ""}`}
                placeholder="Post title"
                {...register("title", { required: "Required" })}
              />
              {errors.title && <span className="err">{errors.title.message}</span>}
            </div>

            <div className="field">
              <label className="label">Content</label>
              <textarea
                className={`textarea ${errors.content ? "input-err" : ""}`}
                rows={5}
                placeholder="What do you want to say?"
                {...register("content", { required: "Required" })}
              />
              {errors.content && <span className="err">{errors.content.message}</span>}
            </div>

            <div className="field">
              <label className="label">Image</label>
              {preview ? (
                <div className="img-wrap">
                  <img src={preview} alt="preview" className="img-prev" />
                  <button type="button" className="img-remove" onClick={() => { setPreview(null); if(fileRef.current) fileRef.current.value = ""; }}>
                    Remove
                  </button>
                </div>
              ) : (
                <label className="upload">
                  <input type="file" accept="image/*" ref={fileRef} onChange={handleImageChange} style={{ display: "none" }} />
                  <span className="upload-icon">↑</span>
                  <span>Select image</span>
                </label>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn-primary">
                {editingPost ? "Save" : "Publish"}
              </button>
            </div>
          </form>

          {/* Live preview side */}
          <div className="preview-panel">
            <span className="preview-label">Live Preview</span>
            <div className="preview-card">
              {preview && <img src={preview} alt="" className="preview-img" />}
              <div className="preview-body">
                <p className="preview-title">{liveTitle || <span className="placeholder">Title appears here...</span>}</p>
                <p className="preview-content">{liveContent || <span className="placeholder">Content appears here...</span>}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
