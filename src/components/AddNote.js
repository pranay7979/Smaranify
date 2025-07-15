import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: 'Personal',
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag); // Backend handles timestamp
    setNote({ title: '', description: '', tag: 'Personal' });
    props.showAlert('Note Added Successfully', 'success');
    if (props.afterAdd) props.afterAdd();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="addnote-container">
      <style>{`
        .addnote-container {
          display: flex;
          justify-content: center;
          padding: 1rem;
        }

        .addnote-card {
          background-color: #ffffff;
          padding: 2rem;
          width: 100%;
          max-width: 700px;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-left: 5px solid #0d6efd;
          transition: transform 0.3s ease;
        }

        .addnote-card:hover {
          transform: translateY(-4px);
        }

        .addnote-form .form-control {
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 1rem;
        }

        .addnote-form .form-label {
          font-weight: 500;
          margin-bottom: 0.3rem;
        }

        .addnote-btn {
          width: 100%;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 10px;
          transition: background-color 0.3s ease;
          background-color: #0d6efd;
          color: white;
          border: none;
        }

        .addnote-btn:hover {
          background-color: #0b5ed7;
        }

        /* ✅ Mobile responsiveness */
        @media (max-width: 768px) {
          .addnote-card {
            padding: 1.2rem;
          }

          .addnote-btn {
            font-size: 1rem;
          }

          .addnote-form .form-control {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .addnote-card {
            padding: 1rem;
            border-left: 3px solid #0d6efd;
          }

          h3 {
            font-size: 1.2rem;
          }

          .addnote-btn {
            padding: 0.6rem;
            font-size: 1rem;
          }

          .addnote-form .form-control {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="addnote-card">
        <h3 className="mb-4 text-primary">📝 Add a New Note</h3>

        <form className="addnote-form" onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              onChange={onChange}
              minLength={5}
              required
              placeholder="Enter title..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              rows="3"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
              placeholder="Write your note here..."
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <select
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              required
            >
              <option value="Personal">Personal</option>
              <option value="Professional">Professional</option>
              <option value="Reminder">Reminder</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={note.title.length < 5 || note.description.length < 5}
            className="addnote-btn mt-3"
          >
            ➕ Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
