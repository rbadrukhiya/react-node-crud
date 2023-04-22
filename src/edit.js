import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'
export function Edit() {
  var { id } = useParams()
  const [data, setdata] = useState({
    name: '', email: '', password: '', contact: ''
  })
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:5000/getdata/${id}`)
      .then(function (response) {
        console.log(response.data.data);
        setdata(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  function handleinfo(i) {
    setdata({ ...data, [i.target.name]: i.target.value })
  }
  function submit() {
    axios.patch(`http://localhost:5000/update/${id}`, data)
      .then(function (response) {
        console.log(response);
        window.location.href = '/'
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  return (
    <>
      <center>
        <form onSubmit={submit}>
          <table border={1}>
            <tr>
              <td>name</td>
              <td><input type="text" name="name" value={data.name} onChange={handleinfo} /></td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" name="email" value={data.email} onChange={handleinfo} /></td>
            </tr>   <tr>
              <td>password</td>
              <td><input type="text" name="password" value={data.password} onChange={handleinfo} /></td>
            </tr>   <tr>
              <td>contact</td>
              <td><input type="text" name="contact" value={data.contact} onChange={handleinfo} /></td>
            </tr>
            <tr>
              <td colSpan={2} align='center'><input type="submit" value="submit" /></td>
            </tr>
          </table>
        </form>
      </center>
    </>
  )
}