import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useAuthContext } from "../Hooks/useAuthContext";
function CreateArea(props) {
  const {user} = useAuthContext()
  const [isExpanded, setExpanded] = useState(false);
  const [error, setError] = useState(null)
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
   setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    if (!user) {
      setError('You must be logged in')
      return
    }
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
          
            <EditIcon />
          </Fab>
        </Zoom>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default CreateArea;
