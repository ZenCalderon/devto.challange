import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateAccount() {
  const router = useRouter();
  const [createAccountText, setCreateAccountText] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateAccountText((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createAccountText);
    fetch("http://localhost:3001/users", {
      method: "Post",
      body: JSON.stringify(createAccountText),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    router.push("/signup/account_confirmation");
  };
  return (
    <div className="pageCenterCA">
      <div className="backgroundCA">
        <form className="flexContainerCA" onSubmit={handleSubmit}>
          <h1>Create your account</h1>
          <p>Profile image</p>
          <div className="fileContainerCA">
            <button className="btnSelectFileCA">Select File</button>
            <span>No file selected</span>
          </div>
          <p>Name</p>
          <input name="name" type="text" onChange={handleChange} required />
          <p>Username</p>
          <input name="username" type="text" onChange={handleChange} required />
          <p>Email</p>
          <input name="email" type="email" onChange={handleChange} required />
          <p>Password</p>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
          <p>Password Confirmation</p>
          <input type="password" required />
          <button type="submit" className="btnSignUpCA">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
