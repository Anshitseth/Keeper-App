import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const[isExpanded, setExpanded] = useState(false);
    const[initialState, setFinal] = useState({
        title: "",
        content: ""
    });

    function handleChange(event)
    {
        const{name, value} = event.target;
        setFinal((prevState)=>{
            return{
            ...prevState,
            [name]: value
            };
        });
    }

    function submitNote(event)
    {
      props.onAdd(initialState);
      setFinal({
        title: "",
        content: ""
      })
      event.preventDefault();
    }

    function expand()
    {
      setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={initialState.title}/>)}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded? 3:1} value={initialState.content}/>
        <Zoom in={isExpanded}><Fab onClick = {submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
