import React from 'react'
import GenderCheckbox from './GenderCheckbox.jsx';

const Signup = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign up <span className='text-blue-500'>Chatapp</span>
        </h1>

        <form >
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Username</span>
            </label>
            <input type="text" placeholder='username' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password </span>
            </label>
            <input type="text" placeholder='password' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password </span>
            </label>
            <input type="text" placeholder='password' className='w-full input input-bordered h-10'/>
          </div>
          
         {/* //gender checkbox goes here  */}
          <GenderCheckbox/>

         <a href="#" className=' text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account? </a>

         <div>
          <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
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
