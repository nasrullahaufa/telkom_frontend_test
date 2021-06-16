
import "./App.css";
import { useState } from "react";
import Toast from "./helpers/swalToast";
function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("masuk");
    fetch(`https://api.github.com/users/${user}/repos`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result.message);
        if (result.message == "Not Found") {
          Toast.fire({
            icon: "error",
            title: "User not found",
          });
          setData("");
        } else {
          setData(result);
        }
      });
  };
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
      {data ? (
        <div className="table_container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Owner</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              {data.map((repo, i) => {
                return (
                  <tr>
                    <th scope="row">{repo.owner.login}</th>
                    <td>{repo.name}</td>
                    <td>{repo.description}</td>
                    <td>
                      <a href={repo.html_url}>{repo.html_url}</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default App;
