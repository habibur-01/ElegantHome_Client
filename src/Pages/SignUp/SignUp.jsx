import { FaArrowLeft } from "react-icons/fa";
import signuppic from "../../assets/signup.jpg";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import "./style.css";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          // photoURL: data?.data?.display_url
        });
        axiosSecure.post("/users", userInfo)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center relative w-full h-[800px] items-center">
        <div className="w-[50%] hidden md:block">
          <img src={signuppic} className="w-[80%] h-[80%]" alt="" />
        </div>
        <div className="w-[100%] md:w-[50%] p-8">
          <div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold uppercase">Sign Up</h1>
              <p>Please create your account to explore us.</p>
            </div>
            <form className="space-y-4 my-8" onSubmit={handleSignUp}>
              <div className="space-y-3">
                <label>Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="type name"
                  ></input>
                </div>
              </div>
              <div className="space-y-3">
                <label>Email</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="type email"
                  ></input>
                </div>
              </div>

              <div className="space-y-3">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="type password"
                  ></input>
                </div>
              </div>
              <div>
                <button className="uppercase btn w-[70%] rounded-lg">
                  Continue
                </button>
                <p className="text-sm mt-2">
                  Already have an account? Please{" "}
                  <a href="/login" className="text-blue-500">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:hidden block absolute top-12 left-10">
          <FaArrowLeft size={15} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
