import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'
const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://safe-sands-44519.herokuapp.com/users/admin', { 
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('Admin Created Successfully');
            }
            console.log(data)
        })
        
    }
    return (
        <div className="makeAdmin-container">
            <form className="makeAdmin-from" onSubmit={handleSubmit(onSubmit)}>



  <div class="input-group mb-3">
  <input  {...register("email")} type="text" class="form-control" placeholder="User Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Make Admin</button>
</div>
</form>
        </div>

    )
}
export default MakeAdmin;