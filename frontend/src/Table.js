import React from 'react';
import './Table.css';
import Draggable from 'react-draggable'; 
import axios from "axios";
 

class Table extends React.Component {
  
   constructor() {
       
      super(); 
      this.state = { 
          showMessage: false,
          users:[]      
      
      }
    };


  handlebutton = () =>{
      axios.get("/listUsers").then(response =>{
      
        this.setState({
          disabled : true,
          users : response.data
       })

      })
     
    } 
     
   state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  

  
    onStart = () => {
      this.setState({activeDrags: ++this.setState.activeDrags});
    };
  
    onStop = () => {
      this.setState({activeDrags: --this.setState.activeDrags});
    };
  
  
 
    render() {  
        
      const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    
      return (
        <div>
   
          <Draggable {...dragHandlers}>
            <div className="box" class="mynav"> <button class="btn"  onClick={this.handlebutton}>create table</button>
            {this.state.users.map((user,index) => {
            return <div>
              <table >
               <tbody>
             
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.profession}</td>
              <td>{user.password}</td>
              <td>{user.address}</td>
              <td>{user.maritalStatus}</td>
              <td>{user.experience}</td>
              <td>{user.email}</td>
              </tr>
              </tbody>
              </table>
              </div>
            
          
          }
          )
        }
        
        </div>
          
         </Draggable>
          
  
        </div>
      );
    }
   }



export default Table;

