import React from 'react';
import '../index.css';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {inputMessage: ''}
    }




render ()
 { 
    return(
<div>
    {/* <div className={message.bgColor + 'background-box alert col-md-11'}
               >{message.content}
        </div>
     */}
    {/* <div className='form-group'>
            <label>Enter welcome message</label>
            <input id='message-add' className='form-control' type={text} value={this.state.inputMessage} placeholder="Type message here" onChange={() => this.handleMessageText}/> */}
    <div className='background-box' >
             <label htmlFor='select-color'>Change background color</label><br></br> <br></br>
    <div id="select-color">
            <input className='color-radio' type={'radio'}  onClick={() => this.selectGreen()} checked={this.state.color == 'green' ? 'checked' : ''}/> Green &nbsp;
            <input className='color-radio' type={'radio'} onClick={() => this.selectRed()} checked={this.state.color == 'red' ? 'checked' : ''}/> Red &nbsp;
            <input className='color-radio' type={'radio'} onClick={() => this.selectBlue()}  checked={this.state.color == 'blue' ? 'checked' : ''}/> Blue &nbsp;
            <input className='color-radio'type={'radio'} onClick={() => this.selectOrange()} checked={this.state.color == 'orange' ? 'checked' : ''}/> Orange &nbsp;
    </div>  
             {/* <button className='btn btn-success' onClick={() => this.handleMessageText}>Add Message</button>     */}
              <h1 style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',}}>Welcome Home</h1>
    </div>
</div>
    );
}

// if (this.state.inputMessage != ''){
//     this.state.inputMessage, bgColor: this.state.color
// }


// handleMessageText(e) {
//     this.setState({inputMessage: e.target.value})
// }

selectGreen(){
    this.setState({color: 'green'})
    }

selectRed(){
    this.setState({color:'red'})
    }

selectBlue(){
    this.setState({color:'blue'})
    }

selectOrange(){
    this.setState({color:'orange'})
    }
}



export default Home;