// import React, { Component } from 'react'


// export default class LoginPage extends Component {
//     state = {
//         accounts:{
//             username: "",
//             password: "",
//         }
//     }

//     username = React.createRef();



//     handeSubmit = e => {
//         e.preventDefault();
//         //call server save changes and redirect user
//         const username = this.username.current.value;
//         const password = this.password.current.value;
//         console.log("submitted")
//     }

//     handleChange = e => {
//         const account = {...this.setState.account}
//         account[0] = e.currentTarget.value;
//         account[1] = e.currentTarget.value;
//         this.setState({account})
//     }

//   render() {

//     const {account} = this.state
    
//     return (
//       <div className='container'>
//           <h1>Login</h1>
//           <form action="" onSubmit={this.handeSubmit}>
//               <div className="form-group">
//                   <label htmlFor="username">Username</label>
//                   <input 
//                   value={this.state.username}
//                   onChange={this.handleChange}
//                   name="username" id='username' ref={this.username} type="text" className="form-control" />
//                   </div>
//               <br />
//               <div className="form-group">
//                   <label htmlFor="password">Password</label>
//               <input
//               value={this.state.accounts.password}
//               onChange={this.handleChange}
//               name="password" id='password' type="text" className="form-control" />
//               </div>
//               <br />
//               <button className="btn btn-primary">Login</button>
//           </form>
//       </div>
//     )
//   }
// }
