import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");

  const search = (e) =>{
    e.preventDefault()
    console.log('masuk')
    fetch(`https://api.github.com/users/${user}/repos`, {
      method: 'GET'
    })
    .then((response) =>{
      return response.json()
    })
    .then((result)=>{
      console.log(result)
    })
  }
  return (
    <div className="main-container">
      <div className="form_container">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Github Username:</label>
            <input
              className="form-control"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Github username to search here"
            ></input>
          </div>

          <button type="submit" onClick={search} className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <div className="table_container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
