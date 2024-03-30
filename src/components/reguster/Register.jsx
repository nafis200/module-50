import { useState } from "react";
import auth from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
 

    const [registerError, setRegisterError] = useState('');

    const [success, setSuccess] = useState('')

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setRegisterError('')
    setSuccess('')

    if(password.length < 6){
        setRegisterError('password should be 6 character nafis vai')
        return; 
    }


    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        console.log(user);
        setSuccess('User Created succesfully')
        // ...
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
          type="email"
          name="email"
          id=""
          placeholder="please give me email"
          className="input input-bordered w-full max-w-xs" required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="please give password"
          className="input input-bordered w-full max-w-xs" required
        />
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
    </div>
  );
};

export default Register;
