import React from 'react';
import { TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import "./MakeAdmin.css"

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlure = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://afternoon-gorge-53746.herokuapp.com/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true)
                }
            })


        e.preventDefault()
    }
    return (
        <div>
            <h1 className="p-2 fw-bold bg-dark w-75 mx-auto mb-5 text-white mt-4">Make An Admin</h1>

            <form className="btns1" onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "40%", color: "black" }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlure}
                    variant="standard" />
                <Button type='submit' sx={{ bgcolor: 'text.primary' }} variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin Successfully!!!</Alert>
            }
        </div >
    );
};

export default MakeAdmin;