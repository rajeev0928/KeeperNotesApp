import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  
 
  const [notes, setNotes] = useState([]);

  const addNote = async(newNote)=>{
    const response =  await fetch("http://localhost:4000/notes" , {
      method : 'POST',
      body :JSON.stringify(newNote),
      headers:{
        'Content-Type':'application/json'
      }
      
      });
    }
      const getNote = async() =>{
        const response =  await fetch("http://localhost:4000/notes" , {
      method : 'GET'
      });
      const data =await response.json();
      setNotes(data);
      console.log(data);
      }

      useEffect(()=>{
        getNote();
      })

  

 const deleteNote = async(id)=> {
    const response =  await fetch('http://localhost:4000/notes/delete' , {
      method : 'POST',
      body :JSON.stringify(notes[id]),
      headers:{
        'Content-Type':'application/json'
      }
      });
    }

  return ( 
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
