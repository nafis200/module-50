import auth from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
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
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="please give password"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="submit"
          value="register"
          className="bg-pink-500 w-full max-w-xs p-4 text-white"
        />
      </form>
    </div>
  );
};

export default Register;
