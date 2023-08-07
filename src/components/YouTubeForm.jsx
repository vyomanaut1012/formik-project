import { useFormik } from 'formik';
import React  from 'react';
import toast from 'react-hot-toast';
// import {Helmet} from "react-helmet";

import "./YouTubeForm.css";



// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });




const initialValues={
  fullName: '',     // carefully>>>>>>>>> don't give any space between quotation mark //
  email: '',
  channel: '',
  social:{
    facebook:'',
    twitter:'',
  },
  phone:['',''],
}
const onSubmit=values=>{
  console.log("form data", values);
  alert(JSON.stringify(values, null, 2));
}

// const validationSchema=Yup.object({
//   fullName: Yup.string()
//                .required("Required!"),
//   email:Yup.string()
//            .email("Invalid email address")
//            .required("Required!"),
//   channel:Yup.string()
//              .required("Required!")

// })

const validate=values=>{
  const errors={};
  if(!values.fullName){
      // errors.fullName="Required";
      toast.error("Name is Required");
  }
 
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.channel){
      errors.channel="Required";
  }
  
  return errors;
};
function YouTubeForm(){

  const formik=useFormik({
    initialValues,
    validate,
    onSubmit,
    // validationSchema
  });
  // console.log("form error",formik.errors);
  console.log("visited field",formik.touched);

    return (
        <div className='blink-text-menu'>

            <form onSubmit={formik.handleSubmit}>
              
                <div className='form-control'>
                  <label htmlFor="fullName" >Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}/>
                    {formik.touched.fullName &&  formik.errors.fullName ? ( <div className='error'>{formik.errors.fullName }</div>): null }
                
                </div>

                <div className='form-control'>
                  <label htmlFor="email" >E-mail</label>
                  <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  value={formik.values.email}/>
                  {formik.touched.email &&  formik.errors.email ? (<div className='error'>{formik.errors.email}</div>):null}
                </div>

                <div className='form-control'>
                  <label htmlFor="channel" >Channel</label>
                  <input type="text"
                   id="channel"
                   name="channel" 
                   onChange={formik.handleChange} 
                   onBlur={formik.handleBlur}
                   value={formik.values.channel}/>
                  {formik.touched.channel &&  formik.errors.channel ? (<div className='error'>{formik.errors.channel}</div>):null}
                </div>
                   
                   {/* >>>>>>>>>>>>>>>>>>>>>>>>adding a nested values<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  */}
                <div className='form-control'>
                  <label htmlFor='facebook'>Facebook Profile</label>
                  <input 
                   type='text' 
                   id='facebook'
                   name='social.facebook'
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.facebook}
                    />
                </div>

                <div className='form-control'>
                  <label htmlFor='twitter'>Twitter Profile</label>
                  <input 
                   type='text' 
                   id='twitter'
                   name='social.twitter'
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.twitter}
                    />
                </div>

                <div className='form-control'>
                  <label htmlFor='PrimaryPhone'>PrimaryPhone</label>
                  <input 
                      type='text' 
                      id='PrimaryPhone' 
                      name='phone[0]' 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      value={formik.values.phone[0]}
                  />
                </div>
            

                <div className='form-control'>
                  <label htmlFor='SecondaryPhone'>SecondaryPhone</label>
                  <input 
                      type='text' 
                      id='SecondaryPhone' 
                      name='phone[1]' 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      value={formik.values.phone[1]}
                />
                </div>

                <button type='submit'>Submit</button>
          </form>
         </div>
    );
};
export default YouTubeForm;