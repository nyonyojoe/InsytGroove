import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className='container'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Users</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.persons
              .map(person =>
                <tr><td>{person.name}</td></tr>
                )
              }
            </tbody>
        </table>

     </div>
    )
  }
}
