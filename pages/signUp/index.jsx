import Image from "next/image";
import Buttons from "../../src/components/Buttons";
import { identifyWith } from "../../src/constants/identifyWith";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="signUpPageContainer">
      <div className="mySignUpContainerFull">
        <div className="signUpContainer">
          <div>
            <div className="imageContainer">
              <Link href="/">
                <Image
                  className="logoDEVSignUp"
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                  alt="Logo DEV"
                  width={60}
                  height={50}
                />
              </Link>
            </div>
            <h1 className="joinDEV">Join the DEV Community</h1>
            <p>DEV Community is a community of 1,382,651 amazing developers </p>
            <div className="btnsSignUpContainer">
              {identifyWith.map((identifyWith, index) => {
                return (
                  <Buttons
                    key={`identifyWith-${index}`}
                    icon={identifyWith.icon}
                    name={identifyWith.name}
                  />
                );
              })}
              <Link href="/signup/create_account">
                <button>
                  <div> 🔴</div> <div>Sign up with Email</div>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <p className="termsAndConduct">
              By signing up, you are agreeing to our <span> </span>
              <span className="blueLinks">privacy policy, terms of use</span>
              <br />
              and <span className="blueLinks">code of conduct.</span>
            </p>
            <hr />
            <p className="alreadyAccount">
              Already have an account?
              <Link href="/signin">
                <span className="blueLinks"> Log in.</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
