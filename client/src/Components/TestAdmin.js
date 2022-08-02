import React, { useContext } from 'react'
import './TestAdmin.css'
//import data from "./test-data"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import axios from 'axios'
import { GlobalState } from '../GlobalState'
const TestAdmin = () => {
    const [tests, setTests] = useState([]);
    const [testDetails, setTestDetails] = useState({
        date: '', std: '', sub: '',
        chap: '', board: '', medium: '',
        totalMarks: ''

    })
    const [add, setAdd] = useState(false);
    const state = useContext(GlobalState)
    const [option,setOption] = state.option
    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState("")
    useEffect(() => {

        const getTests = async () => {
            try {
                const res = await axios.get('/api/tests')
                setTests(res.data.tests)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getTests()

    }, [add])
    const handleDelete = async (_id) => {
        //alert(testid
        try {
            await axios.delete(`/api/tests/${_id}`)
            setAdd(!add);
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    const handleEdit = (item) => {
        setIsEditing(true);
        setId(item._id)
        const { date, std, sub, board, medium, totalMarks, chap } = item;



        setTestDetails({
            date: date, std: std, sub: sub,
            chap: chap, board: board, medium: medium,
            totalMarks: totalMarks
        })
    }
    const handleCreate = async (e) => {

        if (isEditing) {
            setIsEditing(false)
            try {
                const res = await axios.put(`/api/tests/${id}`, testDetails)
                setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        else {
            try {
                const res = await axios.post('/api/tests', testDetails)
                setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        setTestDetails({
            date: '', std: '', sub: '',
            chap: '', board: '', medium: '',
            totalMarks: ''
        })

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTestDetails({ ...testDetails, [name]: value })
    }

    return (
        <div className='test'>

            <div className="test-form">
                <div className="single-detail">
                    <label >Date</label>

                    <input type="text" name="date" required="required" placeholder='enter date' value={testDetails.date} onChange={handleChange} />

                </div>
                <div className="single-detail">
                    <label >standard</label>

                    <input type="text" name="std" required="required" placeholder='enter standard' value={testDetails.std} onChange={handleChange} />

                </div>
                <div className="single-detail">
                    <label >Subject</label>

                    <input type="text" name="sub" required="required" placeholder='enter subject' value={testDetails.sub} onChange={handleChange} />
                </div>
                <div className="single-detail">
                    <label >Board</label>

                    <input type="text" name="board" required="required" placeholder='enter board' value={testDetails.board} onChange={handleChange} />

                </div>
                <div className="single-detail">
                    <label >Medium</label>

                    <input type="text" name="medium" required="required" placeholder='enter medium' value={testDetails.medium} onChange={handleChange} />
                </div>
                <div className="single-detail">
                    <label >Total Marks</label>

                    <input type="text" name="totalMarks" required="required" placeholder='enter total marks' value={testDetails.totalMarks} onChange={handleChange} />
                </div>
                <div className="single-detail">
                    <label >chapter</label>
                    <input type="text" name="chap" required="required" placeholder='enter chapter' value={testDetails.chap} onChange={handleChange} />

                </div>
                <div className="btn-container">
                    <button type='submit' className='btn create-btn' onClick={handleCreate}>
                        {isEditing ? 'EDIT' : 'Create'}
                    </button>
                </div>





            </div>

            <table className="test-table">

                <tr>
                    <th>Date</th>
                    <th>Standard</th>
                    <th>Subject</th>
                    <th>Board</th>
                    <th>Medium</th>
                    <th>Total Marks</th>
                    <th>Chapters</th>
                    <th>Actions</th>

                </tr>
                {tests.map((item) => {
                    return <tr key={item._id} className={(id===item._id && isEditing) ? 'edit-tr' : ''}>

                        <td >
                            <Link to={`/admin/tests/${item._id}`}>{item.date}</Link>
                        </td>
                        <td>{item.std}</td>
                        <td>{item.sub}</td>
                        <td>{item.board}</td>
                        <td>{item.medium}</td>
                        <td>{item.totalMarks}</td>
                        <td>{item.chap}</td>
                        <td >
                            <button className='edit-btn-dif' onClick={() => handleDelete(item._id)}> <RiDeleteBin7Fill className='add-btn' /></button>

                            <button className='edit-btn-dif' onClick={() => handleEdit(item)}> <BiEditAlt className='add-btn' />
                            </button>
                        </td>
                    </tr>

                })}

            </table>

        </div>
    )
}

export default TestAdmin