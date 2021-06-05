import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = React.useState({title: "", content: ""});
  const [isExpanded, setExpanded] = React.useState(false);

  function handleChange(event) {
    const newValue = event.target.value;
    const inputField = event.target.name;
    setNote(() => {
      if (inputField === "title") {
        return {title: newValue, content: note.content}
      } else if (inputField === "content") {
        return {title: note.title, content: newValue}
      }
    });
  }

  function submitNote(event) {

    props.onAdd(note);
    setNote({title: "", content: ""})
    event.preventDefault();

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
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );

}

export default CreateArea;
