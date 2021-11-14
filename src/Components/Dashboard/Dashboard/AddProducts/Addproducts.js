import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddProducts.css"
const Addproducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://afternoon-gorge-53746.herokuapp.com/bikes", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added");
                    reset()
                }
            })
    };
    return (

        <div className="bappy">
            <div className="add-product">
                <form className="pb-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="fw-bold bg-dark w-75 mx-auto mb-5 text-white mt-4">Add Your Favourite Bike</h1>

                    <input {...register("name", { required: true })} placeholder="Name" />
                    <textarea {...register("Description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image url" />
                    <input type="submit" className="btn-success text-uppercase w-25" />
                </form>
            </div>

        </div>
    );
};

export default Addproducts;