import { useEffect, useState, } from 'react'
import axios from 'axios'

export function View() {

    const [get, setget] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getdata')
            .then(function (response) {
                console.log(response.data.data);
                setget(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
            <center style={{ marginTop: '100px' }}>
                <table border={1}>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>contact</th>
                        <th>password</th>
                        {/* <th>edit</th>
                        <th>delete</th> */}
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
                                        {/* <td><a href={`/edit/${i._id}`}>edit</a></td> */}
                                        {/* <td style={{ cursor: 'pointer' }} onClick={() => remove(i._id)}>delete</td> */}
                                    </tr>
                                </>
                            )
                        })
                    }

                </table>
            </center>
        </>
    )
}