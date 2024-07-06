import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Center() {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/post")
      .then((res) => res.json())
      .then((info) => setUserPost(info.data));
  }, []);
  return (
    <center className="centerContainer">
      <div className="centerBtnsContainer">
        <button className="btnRelevantCenter">Relevant</button>
        <button className="btnLatestCenter">Latest</button>
        <button className="btnTopCenter">Top</button>
      </div>
      <div className="welcomeDevCommunityCenter">
        <p className="p0_5WelcomeCenter">DEV Community</p>
        <Image
          priority={true}
          className="welcomeDevCommunityImgCenter"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s---UXjdvws--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wixrm7ejmrua4su7agha.jpg"
          alt="Welcome Image DEV"
          width={735}
          height={376}
        ></Image>
        <div className="textWelcomeCenter">
          <p className="p1_5WelcomeCenter">
            Need to stay up-to-date with the most relevant trends in software,
            such as generate AI, cloud computing, and all things frontend?
          </p>
          <p className="p2_5WelcomeCenter">Look no further.</p>
          <p className="p3_5WelcomeCenter">
            You can do so much more once you
            <span> create your account. </span>
            Follow the devs and topics you care about, and keep up-to-date.
          </p>
          <Link href="/signup">
            <p className="p4_5WelcomeCenter">Join the community</p>
          </Link>
          <p className="p5_5WelcomeCenter">Happy coding ❤️</p>
        </div>
      </div>
      <section>
        {userPost.map((post, index) => {
          return (
            <article key={`post-${post.title}`}>
              <div className="postUserContainerCenter">
                <div className="postTopSectionCenter">
                  <div className="postUserPhotoCenter">👨🏿‍🦳</div>
                  <div className="postDataInfoCenter">
                    <p className="postUserNameCenter">Alexis Fuentes</p>
                    <p className="postDateCenter">Apr 6</p>
                  </div>
                </div>
                <div className="postTitleCenter">
                  <Link href={`post/${post._id}`}>
                    <p>{post.title}</p>
                  </Link>
                </div>
                <div className="postTagsContainerCenter">
                  <div className="postTagsCenter">#begginers</div>
                  <div className="postTagsCenter">#JavaScript</div>
                </div>
                <div className="postBottomSection">
                  <div className="postBottomSectionLeft">
                    <div className="postReactionsCenter">
                      🔥⭐🎉😔 41{" "}
                      <span className="postBottomTextReactionComments">
                        reactions
                      </span>
                    </div>
                    <div className="postCommentsCenter">
                      💬 1{" "}
                      <span className="postBottomTextReactionComments">
                        Add Comment
                      </span>
                    </div>
                  </div>
                  <div className="postBottomSectionRight">
                    <div className="postReadingTime">16 min read</div>
                    <div className="postSaveOption">🔳</div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <div className="postContainerCenter"></div>
    </center>
  );
}
