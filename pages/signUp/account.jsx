import Link from "next/link";

export default function AccountConfirmation() {
  return (
    <div className="backgroundColorConfirmationAccount">
      <div className="accountConfirmationContainer">
        <p className="confirmationIcon">✅</p>
        <h1> Great! Your account has been created. </h1>
        <p className="ConfirmationText">
          <Link href="/signin">
            <span className="blueTextConfirmation">Click here </span>
          </Link>
          to Log In and start creating amazing posts!
        </p>
        <div className="createAnotherAccount">
          <p>
            <Link href="/signup">
              <span className="blueTextConfirmation">Click here</span>
            </Link>{" "}
            if you want to make another account...
          </p>
        </div>
      </div>
    </div>
  );
}
