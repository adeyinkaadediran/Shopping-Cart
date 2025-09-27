import React, {useState} from 'react'

function Register() {
  const [formData, setFormData] =useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
  try {
      const response = await fetch("http://localhost:5248/api/Users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          age: parseInt(formData.age, 10),
          address: formData.address,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        setMessage("✅ Registration successful! You can now log in.");
      } else {
        const errorData = await response.json();
        setMessage(`❌ ${errorData.message || "Something went wrong"}`);
      }
    } catch (err) {
      setMessage("⚠️ Error connecting to server.");
    }
  };



  return (
    <div className='flex flex-col gap-5 '>
      <div className='flex flex-col gap items-center relative'>
        <h1 className='text-3xl font-medium font-archivo'>Create an Account</h1>
        <p className='text-md font-normal text-gray-500 font-inter'>Join us and start your Journey</p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xl font-normal font-inter">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="e.g John"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]" require
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-normal font-inter">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="e.g Doe"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-normal font-inter">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Optional"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-normal font-inter">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="e.g 25"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]"
          />
        </div>

        <div className="flex flex-col gap-2 col-span-full">
          <label className="text-xl font-normal font-inter">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your address"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]"
          />
        </div>

        <div className="flex flex-col gap-2 col-span-full">
          <label className="text-xl font-normal font-inter">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-normal font-inter">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="*******"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-normal font-inter">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="*******"
            className="p-2 rounded-lg border-2 border-[#dee1e6ff]"
          />
        </div>

        <button
          type="submit"
          className="grid col-span-full border w-[70%] place-self-center p-3 rounded-md mt-2 items-center font-inter border border-[#dee1e6ff] text-black hover:text-[#171A1FFF]"
        >
          Sign Up
        </button>
      </form>
      {message && <p className="text-center text-red-500">{message}</p>}
      <span className="flex gap place-self-center ">
        <p className="text-[#565d6dff] font-inter">Already have an account?</p>
        <a href="/login" className="font-inter text-[#636ae8ff] hover:text-[#171A1FFF]">
          Sign in
        </a>
      </span>
    </div>
  )
}

export default Register