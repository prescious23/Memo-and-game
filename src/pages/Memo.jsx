import React from 'react';
import { Checkbox } from 'semantic-ui-react';

class Memo extends React.Component{
   constructor(props){
      super(props);
      this.state ={
         userText: "",
         noteList: []
      };
   }

onAddNotes = () => {
   const notes = document.getElementById("notes-value").value;
   const obj = {notes};
   this.setState({
      userText: "",
      noteList: this.state.noteList.concat(obj)
   });
   console.log("noteList", this.state.noteList);
};

onChangeValue = (event)=> {
   const notes = document.getElementById("notes-value").value;
   this.setState({
      userText:notes
      // value: event.target.value
   });
};

onDeleteNotes = index => {
   var el = index.createElement;
   const deleteNotes = this.state.noteList.filter(el, index );
   this.setState({
      noteList: deleteNotes
   });
};

onEditNotes(index){
   this.setState({userText: index.target.value})
}

handleCheckboxChange = event => {
   this.setState({checked: event.target.checked})
}



render(){   
   return(
      <div className='note-pad'>
         <div className='note-area' style={{
            display: 'flex',
            justifyContent: 'Center',
            alignItems: 'Center',
        }}>
        
            <div><textarea rows="10" cols="75"  placeholder='Write your notes here..'   id="notes-value" value={this.state.userText} onChange={this.onChangeValue}/>
               <button className='save-button'  onClick={this.onAddNotes}>Save</button>
            </div>
         </div>
      <div className='display-notes' style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'left',
        }}>
            {this.state.noteList.length> 0?
                  this.state.noteList.map((item, index) => (<div key={index} className={`notes-item ${index}`}>
      <div className='note-head'>
         <div>
              <p>Tick box if done</p>
     </div>
     <label>
              <Checkbox 
               checked ={this.state.checked}
               onChange={this.handleCheckboxChange}
              />
      </label>
      {/* <h3>Note {index}</h3> */}
         <button className='delete-note' onClick={ () => this.onDeleteNotes(index)} > X </button>
      </div>      
                {item.notes}
                <div>
              <button className='edit-note' onClick={() => this.onEditNotes()}> Edit</button>
         </div>  
      </div>
                  ))
                  : ""}
            </div>
         </div>
       );
   }

} 
export default Memo;


