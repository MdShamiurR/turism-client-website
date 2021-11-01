import axios from 'axios';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        //services.json
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added ')
                    reset();
                }
            })
    }

    return (
        <div>
            <h3><Badge bg="secondary">Plan Request</Badge></h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Place Name" />
                <input {...register("description")} placeholder="Days and descriptions" />
                <input type="number" {...register("price")} placeholder="Budget(English digits)" />
                <input {...register("img")} placeholder="A Scenery of that place" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;