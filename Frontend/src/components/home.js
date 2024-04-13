import { useEffect,useState }from 'react'
import { useAuthContext } from "../Hooks/useAuthContext"
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios'
// components


const Home = () => {
 
  const [notes, setNotes] = useState([]);
  const {user} = useAuthContext()
  
  
  const addNote = async(newNote)=>{
    if (user) {
    const response = await axios.post("http://localhost:4000/notes",newNote,{
       headers: {'Authorization': `Bearer ${user.token}`},
    }).catch((err) =>{
      console.log(err.response.data.message)
  })}
    // const response =  await fetch("http://localhost:4000/notes" , {
    //   method : 'POST',
    //   body :JSON.stringify(newNote),
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
      
    //   });
    }
      const getNote = async() =>{
        const response = await axios.get("http://localhost:4000/notes",{
          headers: {'Authorization': `Bearer ${user.token}`},
        }).catch((err) =>{
          console.log(err.response.data.message)
      })
      //  const data =await response.json();
       setNotes(response.data);
      //   const response =  await fetch("http://localhost:4000/notes" , {
      // method : 'GET'
      // });
      // const data =await response.json();
      // setNotes(data);
      // console.log(data);
      }

      useEffect(()=>{
        
        if (user) {
        getNote();
      }
      })

  

 const deleteNote = async(id)=> {
  if (!user){
    alert("Must be logged in")
    return
  }
    const response =  await fetch('http://localhost:4000/notes/delete' , {
      method : 'POST',
      body :JSON.stringify(notes[id]),
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${user.token}`
        
      }
      });
    }

  return (<div>
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
    </div> )
}

export default Home