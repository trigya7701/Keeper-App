import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes(prevNotes =>{
    return  [...prevNotes,note];
    })
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
    return  prevNotes.filter((noteItem,index)=>{
        return index!==id;
      })
    })
  }
  var app = <div>
    <Heading/>
    <CreateArea onAdd={addNote}/>
     {  notes.map((noteItem,index) => {
        return (<Note key={index} id={index} title={noteItem.title} onDelete={deleteNote}
          content={noteItem.content}/>);
      })
    }

    <Footer/>
  </div>
  return app;

}
export default App;
