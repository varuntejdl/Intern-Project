import React from "react";
import {useForm} from "react-hook-form";
import {Link} from 'react-router-dom';

function Register(){
  const{register,formState:{errors},handleSubmit,}=useForm();
const onSubmit=(data)=>console.log(data);
return(
<div className="mainPage">  

    <div className="image">
        <img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"></img>
    </div>
    
    <div className="reg">
    <form onSubmit={handleSubmit(onSubmit)}>

        <div>

            <h3>Welcome to</h3>
            <h2>India's #1 Training Institute</h2>
        </div>
        <div>
            <label className="lname">
                Username      
            </label ><br></br>
            <input placeholder="Username" 
            {...register("Username",{required:true})}/>
            <error style = {{color:"red"}}><br></br>
                {errors.Username?.type==="required"&&"Username is required"}
            </error>
        </div> 
        <div>
            <label className="lname">
               Name       
            </label><br></br>
            <input placeholder="Name"
 {...register("Name",{required:true})}/>
   <error style = {{color:"red"}}><br></br>
                {errors.Name?.type==="required"&& "Name is required"}
            </error>
        </div> 
        <div>
            <label className="lname">
             Password      
            </label><br></br>
            <input placeholder="Password"
            {...register("Password",{required:true,minLength:5,maxLength:20})}/>
            <error style = {{color:"red"}}><br></br>
            {errors.Password?.type==="minLength"&&
            "password min 5 characters" }
             {errors.Password?.type==="maxLength"&&
            " Password doesnot exceed  more than 10 characters" }

            </error>
            
        </div>
         {/* <div>
           <button className="button">Register</button>
        </div> */}
        <div>
       <button type="submit" id="registerbtn">REGISTER</button>
  </div>
        
  
        </form>

        <span>Already have an account?</span><Link to={"/login"}>Login</Link>
        </div>
        <div className="image2"> 
            <img  src="https://cdn.pixabay.com/photo/2020/11/22/03/46/child-5765598_1280.png" style={{height:"600px",width:"800px"}}/>
        </div>
        
        </div>
        
        
        )
    }
        
  
export default Register;
