import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/NoteContext";
import Noteitem from './NoteItems';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import './Notes.css';

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  const [showAddNote, setShowAddNote] = useState(false);
  const [sortType, setSortType] = useState("latest");


  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag
    });
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note updated successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="notes-page container py-4 px-3 px-md-5">
      <style>{`
        .add-note-toggle-btn {
          background-color: #0d6efd;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          transition: 0.3s;
          width: 100%;
          max-width: 250px;
        }

        .add-note-toggle-btn:hover {
          background-color: #084ec1;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-10px);}
          to {opacity: 1; transform: translateY(0);}
        }

        @media (max-width: 576px) {
          .modal-dialog {
            margin: 1rem;
          }
          .modal-content {
            border-radius: 1rem;
          }
        }
      `}</style>

      {/* Toggle AddNote Form */}
      <div className="text-center mb-4">
        <button
          className="add-note-toggle-btn"
          onClick={() => setShowAddNote(!showAddNote)}
        >
          {showAddNote ? 'Close Add Note ✖️' : '➕ Add New Note'}
        </button>
      </div>

      {/* AddNote Form */}
      {showAddNote && (
        <div className="fade-in mb-5">
          <AddNote
            showAlert={props.showAlert}
            afterAdd={() => setShowAddNote(false)}
          />
        </div>
      )}

      {/* Hidden Button for Modal */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch Edit Modal
      </button>

      {/* Edit Note Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-lg rounded">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Edit Note</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="edit-form">
                <input
                  type="text"
                  className="form-control my-2"
                  name="etitle"
                  value={note.etitle}
                  placeholder="Title"
                  onChange={onChange}
                  minLength={5}
                  required
                />
                <textarea
                  className="form-control my-2"
                  name="edescription"
                  value={note.edescription}
                  placeholder="Description"
                  onChange={onChange}
                  rows="3"
                  minLength={5}
                  required
                />
                <input
                  type="text"
                  className="form-control my-2"
                  name="etag"
                  value={note.etag}
                  placeholder="Tag (Optional)"
                  onChange={onChange}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                disabled={note.etitle.length < 5 || note.edescription.length < 5}
                onClick={handleClick}
                type="button"
                className="btn btn-success"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

     <div className="sort-box mb-4">
  <label htmlFor="sortSelect" className="sort-label">
    Sort by:
  </label>
  <select
    id="sortSelect"
    className="sort-select"
    value={sortType}
    onChange={(e) => setSortType(e.target.value)}
  >
    <option value="latest">Latest</option>
    <option value="oldest">Oldest</option>
    <option value="professional">Professional</option>
    <option value="personal">Personal</option>
    <option value="reminder">Reminder</option>
    <option value="other">Other</option>
  </select>
</div>
<style>{`
  .sort-box {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    padding: 10px 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    max-width: 300px;
    transition: all 0.3s ease;
  }

  .sort-label {
    font-weight: 600;
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 0;
  }

  .sort-select {
    flex-grow: 1;
    padding: 8px 12px;
    border: 1px solid #ced4da;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-size: 0.92rem;
    font-weight: 500;
    color: #333;
    appearance: none;
    transition: all 0.2s ease;
  }

  .sort-select:hover,
  .sort-select:focus {
    border-color: #0d6efd;
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.2);
  }

  @media (max-width: 576px) {
    .sort-box {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    .sort-select {
      width: 100%;
    }
  }
`}</style>





      {/* Notes Display */}
      <div className="notes-display mt-4">
        <h2 className="mb-4 text-center">📒 Your Notes</h2>
        {notes.length === 0 ? (
          <div className="text-muted text-center">No notes to display</div>
        ) : (
          <div className="row g-4">
            {[...notes]
              .filter((note) => {
                const tag = note.tag?.toLowerCase() || "other";

                if (["professional", "personal", "reminder", "other"].includes(sortType)) {
                  return tag === sortType;
                }
                return true; // Show all for latest/oldest
              })
              .sort((a, b) => {
                if (sortType === "latest") {
                  return new Date(b.time) - new Date(a.time);
                } else if (sortType === "oldest") {
                  return new Date(a.time) - new Date(b.time);
                }
                return 0; // No sorting for filtered tags
              })
              .map((note) => (
                <Noteitem
                  key={note._id}
                  updateNote={updateNote}
                  showAlert={props.showAlert}
                  note={note}
                />
              ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
