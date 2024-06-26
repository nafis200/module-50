import { useState } from "react";
import auth from "../../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
 

    const [registerError, setRegisterError] = useState('');

    const [success, setSuccess] = useState('')

    const [showPassword,setShowPassword] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked
    const name = e.target.name.value
    console.log(email, password,accepted,name);
    setRegisterError('')
    setSuccess('')

    if(password.length < 6){
        setRegisterError('password should be 6 character nafis vai')
        return; 
    }
    else if(! /[A-Z]/.test(password)){
        setRegisterError('Your password should have atleast one uppercase character')
        return
    }

    else if(!accepted){
      setRegisterError('please fill up terms and condition')
      return
    }


    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        console.log(user);
        setSuccess('User Created succesfully')
        // ...

        updateProfile(result.user, {
           displayName: name,
           photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(()=> console.log('profile updated'))
        .catch(error=>{
           console.log(error);
        })

        sendEmailVerification(result.user)
        .then(()=> alert('Please check your email and verify your account'))
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message)
        // ..
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Please register</h2>
      <form onSubmit={handleRegister} className="space-y-4 mt-5">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Your name"
          className="input input-bordered w-full max-w-xs" required
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="please give me email"
          className="input input-bordered w-full max-w-xs" required
        />
        <br />
        <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id=""
          placeholder="please give password"
          className="input input-bordered w-full max-w-xs relative" required
        />
      
        
        <span className=" inline-block absolute top-[10px] right-[250px] " onClick={()=> setShowPassword(!showPassword)}>Show</span>
        
        </div>
        <br />
        <div className="mb-2">
        <input type="checkbox" name="Accepted" id="terms" />
        <label htmlFor="terms" className="ml-2" >Accout our <a href="">Terms and condition</a> </label>
        </div>
        <br />
        <input
          type="submit"
          value="register"
          className="bg-pink-500 w-full max-w-xs p-4 text-white"
        />
      </form>
      {
        registerError && <p className="text-red-700">{registerError}</p>
      }
      {
         success && <p className="text-green-600">{success}</p>
      }
      <p>Already have an account? <Link to="/login" className="bg-red-400">Login</Link> </p>
    </div>
  );
};

export default Register;
