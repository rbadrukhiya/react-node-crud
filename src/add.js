import { useEffect, useState, } from 'react'
import axios from 'axios'

function Add() {
    const [data, setdata] = useState([])

    function remove(i) {
        axios.delete(`http://localhost:5000/deletedata/${i}`)
            .then(function (response) {
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function handleinfo(i) {
        setdata({ ...data, [i.target.name]: i.target.value })
    }
    function submit(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/register', data)
            .then(function (response) {
                // handle success
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    const [get, setget] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getdata')
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setget(response.data.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <>
            <center>
                <form onSubmit={submit}>
                    <table border={1}>
                        <tr>
                            <td>name :</td>
                            <td><input type="text" name='name' onChange={handleinfo} /></td>
                        </tr>
                        <tr>
                            <td>email :</td>
                            <td><input type="text" name='email' onChange={handleinfo} /></td>
                        </tr>
                        <tr>
                            <td>contact :</td>
                            <td><input type="text" name='contact' onChange={handleinfo} /></td>
                        </tr>
                        <tr>
                            <td>password :</td>
                            <td><input type="text" name='password' onChange={handleinfo} /></td>
                        </tr>
                        <tr>
                            <td colspan='2' align='center'><input type="submit" value="submit" /></td>
                        </tr>
                    </table>
                </form>
            </center>

            <center style={{ marginTop: '100px' }}>
                <table border={1}>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>contact</th>
                        <th>password</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                    {
                        get.map((i) => {
                            return (
                                <>
                                    <tr>
                                        <td>{i.name}</td>
                                        <td>{i.email}</td>
                                        <td>{i.contact}</td>
                                        <td>{i.password}</td>
                                        <td><a href={`/edit/${i._id}`}>edit</a></td>
                                        <td style={{ cursor: 'pointer' }} onClick={() => remove(i._id)}>delete</td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </table>
            </center>
        </>
    );
}
export default Add