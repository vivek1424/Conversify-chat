import React from 'react'
import GenderCheckbox from './GenderCheckbox.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {

    const [inputs, setinputs] = useState({
      fullName: '',
      username: '',
      password: '',
      confirmPassword:'',
      gender:''
    })
    const {loading, signup}=useSignup();

    const handleCheckboxChange = (gender)=>{
      setinputs({...inputs, gender})
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(inputs);
      await signup(inputs);
    }

  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign up <span className='text-blue-500'>Chatapp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' value={inputs.fullName} onChange={(e)=>setinputs({...inputs, fullName: e.target.value})}/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Username</span>
            </label>
            <input type="text" placeholder='username' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e)=> setinputs({...inputs, username:e.target.value})} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password </span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' value={inputs.password} onChange={(e)=>setinputs({...inputs, password:e.target.value})}/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password </span>
            </label>
            <input type="password" placeholder='confirm password' className='w-full input input-bordered h-10' value={inputs.confirmPassword} onChange={(e)=>setinputs({...inputs, confirmPassword:e.target.value})}/>
          </div>
          
         {/* //gender checkbox goes here  */}
          <GenderCheckbox onCheckboxChange= {handleCheckboxChange} selectedGender ={inputs.gender} />

         <Link to="/login" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account? </Link>

         <div>
          <button className='btn btn-block btn-sm mt-2 border border-slate-700'
          disabled={loading} >
            {loading? <span className='loading loading-spinner'></span>: "Signup"}</button>
         </div>
        </form>
      </div>
    </div>
  
}

export default Signup;



// import React from 'react'
// import GenderCheckbox from './GenderCheckbox.jsx';

// const signup = () => {
//   return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Sign up <span className='text-blue-500'>Chatapp</span>
//         </h1>

//         <form >
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'> Full Name</span>
//             </label>
//             <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'> Username</span>
//             </label>
//             <input type="text" placeholder='username' className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password </span>
//             </label>
//             <input type="text" placeholder='password' className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password </span>
//             </label>
//             <input type="text" placeholder='password' className='w-full input input-bordered h-10'/>
//           </div>
          
//          {/* //gender checkbox goes here  */}
//           <GenderCheckbox/>

//          <a href="#" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account? </a>

//          <div>
//           <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//          </div>
//         </form>
//       </div>
//     </div>
  
// }

// export default signup;
