import { React, useState } from "react";

const Form = () => {
  // implementing state and hooks

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      alert(`User Created!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}
         
         Thank you for registering`);
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="w-full  mx-auto py-20 px-10  text-center  bg-zinc-800 my-10">
    

      <form onSubmit={handleSubmit}>
        <div className=" md:mx-[100px] md:grid flex justify-center gap-10   text-xl text-left pb-10">
          <div>
            <h2 className="font-thin text-left pb-4 text-5xl">
              Contact The Agent
            </h2>
            <div>
              <label className="">Full Name</label>
              <input
                className="formInput"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={inputs.name}
                placeholder="Enter full name"
                required
              />
            </div>
            <div>
              <label>Email Address</label>
              <input
                className="formInput"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                placeholder="email@email.com"
                required
              />
            </div>
            <div>
              <label>Your Message</label>
              <input
                className="formInput"
                type="textarea"
                
                onChange={handleInputChange}
                value={inputs.email}
                placeholder="Your Message :"
                required
              />
            </div>
           
          </div>

          
        </div>

        <div className="mx-auto text-center text-2xl">
          <button type="submit button" className="px-14 py-6">
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};

export default Form;
