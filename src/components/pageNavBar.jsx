import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="myNavBar">
      <div className="leftAndRight">
        <div className="leftNavBar">
          <div>
            <button className="btnThreeBars">&#8801;</button>
          </div>
          <div>
            <Link href="/">
              <Image
                className="logoDEV"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo DEV"
                width={50}
                height={40}
              />
            </Link>
          </div>
          <div className="searchBarContainer">
            <div className="btnSearchInput">
              <input
                className="inputSearch"
                type="search"
                placeholder="Search..."
              />
            </div>
            <div>
              <button className="btnSearchInput">&#128269;</button>
            </div>
          </div>
        </div>
        <div className="rightNavBar">
          <div>
            <button className="btnSearch">&#128269;</button>
          </div>
          <div>
            <Link href="/signin">
              <button className="btnLogIn">Log in</button>
            </Link>
          </div>
          <div>
            <Link href="/signup">
              <button className="btnCreateAccount">Create account</button>
            </Link>
          </div>
          <div>
            <Link href="/post">
              <button className="btnCreateAccount btnCreatePost">
                Create Post
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
