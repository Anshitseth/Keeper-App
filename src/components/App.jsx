import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const[notes, setNotes] = useState([]);

  function addNotes(initialState)
  {
    setNotes((prevState) =>{
      return [...prevState, initialState]
    });
  }
  function deleteNote(id)
  {
    setNotes((prevState)=>{
      return prevState.filter((noteItem, index) =>{
        return index !== id;
      }
      )
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes}/>
      {notes.map((noteItem, index) => { 
        return (<Note  
        id= {index} 
        key={index} 
        title = {noteItem.title} 
        content = {noteItem.content}
        onDel={deleteNote} />
      );
      })}
      <Footer />
    </div>
  );
}
export default App;