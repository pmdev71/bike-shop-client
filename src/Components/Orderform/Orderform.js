import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import "./Orderform.css"
const Orderform = ({ bikes }) => {
    const { name } = bikes;

    const { user } = useAuth();
    const userEmail = user.email;
    const userName = user.displayName;


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = formData => {
        console.log(formData);
        const data = { ...formData, "mail": userEmail, "name": userName, "bikeName": name, "status": "pending" }

        //console.log(data);

        axios.post('https://afternoon-gorge-53746.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Successfully")
                    reset();
                }
            })
    };
    return (
        <div>
            <hr className="w-50 mx-auto" />

            <h6 className="fw-bold">{name}</h6>
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                <input className="" placeholder="Address" {...register("address", { required: true })} />

                <br />

                <input className="" placeholder="Mobile Number" type="number" {...register("phoneNumber", { required: true })} />

                <br />

                {errors.phoneNumber && <span>This field is required</span>}
                <input className=" Order text-white  btn-success btn-dark text-uppercase fw-bold " value="Order" type="submit" />
            </form>
        </div>
    );
};

export default Orderform;