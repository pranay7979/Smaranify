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

      {/* Notes Display */}
      <div className="notes-display mt-4">
        <h2 className="mb-4 text-center">📒 Your Notes</h2>
        {notes.length === 0 ? (
          <div className="text-muted text-center">No notes to display</div>
        ) : (
          <div className="row g-4">
            {notes.map((note) => (
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
