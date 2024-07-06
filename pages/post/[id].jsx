import NavBar from "@/src/components/pageNavBar";
import PostFooter from "@/src/components/PostFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PostID() {
  const router = useRouter();
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/post/${router.query.id}`)
      .then((res) => res.json())
      .then((info) => setUserPost(info.data));
  }, [router]);

  return (
    <main>
      <p></p>
      <NavBar />
      <article className="postIDGridContainerPostFooter">
        <div className="postIDUser">
          <div className="postTopSectionCenter">
            <div className="postUserPhotoCenter">👨🏿‍🦳</div>
            <div className="postDataInfoCenter">
              <p className="postUserNameCenter postIDNameOfUser">
                Alexis Fuentes
              </p>
              <p className="postDateCenter">Apr 6</p>
            </div>
          </div>
          <div className="postIDTitle">
            <p>{userPost.title}</p>
          </div>
          <div className="postTagsContainerCenter">
            <div className="postTagsCenter">#begginers</div>
            <div className="postTagsCenter">#JavaScript</div>
          </div>
          <div className="postIDPostofUser">
            <p>{userPost.post}</p>
          </div>
          <div className="postIDBottomSection">
            <div className="postIDTopSuscribeContainer">
              <div className="postIDTopComments">
                <p>Top comments (0)</p>
              </div>
              <div className="postIDbtnSuscribe">
                <button type="text">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="postIDCommentContainer">
            <div className="postIDLogo">
              <Image
                className="logoDEVID"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo DEV"
                width={30}
                height={20}
              />
            </div>
            <textarea
              className="postIDTextArea"
              placeholder="Add to the discussion"
            ></textarea>
          </div>
          <div className="postIDCodeReport">
            <div className="postIDCode">
              <p>Code of Conduct</p>
            </div>
            <div className="postIdAPoint">⋆</div>
            <div className="postIDReport">
              <p>Report abuse</p>
            </div>
          </div>
        </div>
        <PostFooter />
      </article>
    </main>
  );
}
