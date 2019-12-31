import React from 'react';

import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';

const students = [
  { id: 1, name: 'Baking Class', age: '11-21-19', email: '$30' },
  { id: 2, name: 'Pottery Class', age: '7-21-19', email: '$40' },
  { id: 3, name: 'Cooking Class', age: '2-21-19', email: '$120' },
  { id: 4, name: 'Art Class', age: '12-13-18', email: '$75' }
]

function renderTableData() {
  return students.map((student, index) => {
     const { id, name, age, email } = student //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{name}</td>
           <td>{age}</td>
           <td>{email}</td>
           <td><button>View</button></td>
        </tr>
     )
  })
}



const HomePage = () => (

  <AuthUserContext.Consumer>
  {authUser => (
    <div className="container">
    
        <h3>Welcome {authUser.email}!!</h3>
<br></br>
        <div><div>
            <h4 id='title'>Previous Orders:</h4>
            <table className="table" id='students'>
               <tbody>
                  {renderTableData()}
               </tbody>
            </table>
         </div></div>

  </div>
  )}
</AuthUserContext.Consumer>
  
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
