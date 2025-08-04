import NoteContext from "./NoteContext";
import { useState } from "react";
import axios from "axios";

const NoteState = (props) => {
  const host = process.env.REACT_APP_BACKEND_URL; // ✅ Use environment variable correctly
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // ✅ Get all Notes
  const getNotes = async () => {
    try {
      const response = await axios.get(`${host}/api/notes/fetchallnotes`, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // ✅ Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await axios.post(`${host}/api/notes/addnote`, {
        title,
        description,
        tag
      }, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });

      setNotes(notes.concat(response.data));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // ✅ Delete a Note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${host}/api/notes/deletenote/${id}`, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // ✅ Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      await axios.put(`${host}/api/notes/updatenote/${id}`, {
        title,
        description,
        tag
      }, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });

      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
