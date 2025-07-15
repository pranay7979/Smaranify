import React, { useContext } from 'react';
import noteContext from "../context/notes/NoteContext";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  const handleDelete = () => {
    deleteNote(note._id);
    showAlert("Note deleted successfully", "success");
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card shadow-sm my-3 border-0 h-100 note-card">
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-primary mb-2">{note.title}</h5>

          <p className="card-text text-muted small-text" style={{ minHeight: "60px" }}>
            {note.description}
          </p>

          <div className="mb-2">
            <span className="badge bg-secondary me-2">{note.tag}</span>
            {note.time && (
              <small className="text-muted d-block mt-1">
                🕒 {new Date(note.time).toLocaleString('en-US', {
                  month: 'numeric',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })}
              </small>
            )}
          </div>

          <div className="mt-auto d-flex justify-content-end gap-3">
            <button
              className="btn btn-sm text-success"
              title="Edit"
              onClick={() => updateNote(note)}
            >
              <FaEdit size={18} />
            </button>
            <button
              className="btn btn-sm text-danger"
              title="Delete"
              onClick={handleDelete}
            >
              <FaTrashAlt size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .note-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 0.75rem;
        }
        .note-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
        }
        .btn {
          background: none;
          border: none;
        }
        .btn:hover {
          transform: scale(1.1);
        }

        @media (max-width: 576px) {
          .note-card {
            padding: 1rem;
          }
          .card-title {
            font-size: 1rem;
          }
          .card-text {
            font-size: 0.9rem;
          }
          .small-text {
            font-size: 0.85rem;
          }
          .btn {
            padding: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default Noteitem;
