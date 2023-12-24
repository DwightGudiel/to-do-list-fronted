import FormLogin from "@/components/formLogin";

function Login() {

  return (
    
    <div className="px-10 xl:px-0 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-4xl mb-10 font-extrabold text-center text-indigo-700">
          Login PWG
        </h1>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;