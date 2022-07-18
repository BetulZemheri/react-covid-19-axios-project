import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res => setData(res.data[date]))
    .catch(err => console.log(err))
  }, [data,date])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h4 className="text-center text-white display-3">TURKEY COVID-19 SEARCH ENGINE</h4>
            <input type="text" placeholder="GG/AA/YY" className="form-control" onChange={(e) => setDate(e.target.value)}/>
            <table className="table table-striped text-white">
              <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Number Of Tests</th>
                <th scope="col">Number Of Patients</th>
                <th scope="col">Number Of Deaths</th>
                </tr>
              </thead>
              <tbody>
                <tr className={data === undefined ? "bg-danger" : "bg-success"}>
                <th scope="row"> {data === undefined ? "waiting for data" : data.date} </th>
                <td className="text-white" > {data === undefined ? "waiting for data" : data.totalTests} </td>
                <td className="text-white" > {data === undefined ? "waiting for data" : data.patients} </td>
                <td className="text-white" > {data === undefined ? "waiting for data" : data.deaths} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
