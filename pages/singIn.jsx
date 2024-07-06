import { identifyWithSignIn } from "@/src/constants/identifyWithSignIn";
import { useState } from "react";
import Buttons from "@/src/components/Buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignIn() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "",
        username: "",
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log(json.data);
        if (json.data) {
          localStorage.setItem("token", json.data);
          setEmail("");
          setPassword("");
          router.push("/");
          return;
        }
        setError("¡Usuario o contraseña incorrectos!");
      })
      .catch((error) => {
        console.error("Login error: ", error);
      });
  }

  return (
    <section className="signInPageContainer">
      <div className="mySignInContainerFull">
        <div className="signInContainer">
          <div className="signInImage">
            <Link href="/">
              <Image
                className="logoDEVSignIn"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo DEV"
                width={60}
                height={50}
              />
            </Link>
          </div>
          <h1 className="joinDEVSignIn">Join the DEV Community</h1>
          <p className="joinDEVSignInP">
            DEV Community is a community of 1,382,651 amazing developers{" "}
          </p>
          <div className="btnsSignInContainer">
            {identifyWithSignIn.map((identifyWithSignIn, index) => {
              return (
                <Buttons
                  key={`identifyWithSignIn-${index}`}
                  icon={identifyWithSignIn.icon}
                  name={identifyWithSignIn.name}
                />
              );
            })}
          </div>
          <p className="signInOr">OR</p>
        </div>
        <form className="signInSection" onSubmit={handleSubmit}>
          <div className="signInContainerInputs">
            <div className="emailInputContainer">
              <p>Email</p>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              ></input>
            </div>
            <div className="passwordInputContainer">
              <p>Password</p>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              ></input>
            </div>
          </div>
          <div className="signInbottomContainer">
            <div className="rememberForgotContainer">
              <div className="rememberOption">
                <input type="checkbox" name="rememberMe" value="Remember" />{" "}
                Remember me
              </div>
              <div className="forgotPassword">
                <p>Forgot password?</p>
              </div>
            </div>
            <div>{error && <p className="errorUoC">{error}</p>}</div>
            <div>
              <button className="btnSubmitLogIn">Log in</button>
            </div>
          </div>
          <div>
            <p className="termsAndConductSignIn">
              By signing up, you are agreeing to our <span> </span>
              <span className="blueLinksSignIn">
                privacy policy, terms of use
              </span>
              <br />
              and <span className="blueLinksSignIn">code of conduct.</span>
            </p>
            <hr />
            <p className="alreadyAccountSignIn">
              New to DEV Community?
              <Link href="/signup">
                <span className="blueLinksSignIn"> Create account.</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
