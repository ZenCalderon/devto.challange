import Link from "next/link";
import Buttons from "@/src/components/Buttons";
import BasicCard from "@/src/components/postsCard";
import { leftMainOptions } from "@/src/constants/leftMainOptions";
import { leftOtherOptions } from "@/src/constants/leftOtherOptions";
import { popularTags } from "@/src/constants/popularTags";
import { rightDiscuss } from "@/src/constants/rightDiscuss";
import { rightWatercooler } from "@/src/constants/rightWatercooler";
import { rightTrending } from "@/src/constants/rightTrending";
import { rightRecentrlyQueried } from "@/src/constants/rightRecentrlyQueried";
import NavBar from "@/src/components/pageNavBar";
import Center from "@/src/components/PageCenter";

export default function Home(props) {
  return (
    <main>
      <NavBar />
      <div className="mainflexCenterContainer">
        <div className="mainFlexContainer">
          <aside className="leftSideContainer">
            <div className="introductionToDev">
              <p className="introductionComunity">
                DEV Community is a community of 1,382,651 amazing developers
              </p>
              <p>
                We´re a place where coders share, stay up-to-date and grow their
                careers.
              </p>
              <Link href="/signup">
                <button className="btnIntroductionCreateAccount">
                  Create Account
                </button>
              </Link>
              <Link href="/signin">
                <button className="btnIntroductionLogIn">Log in</button>
              </Link>
            </div>
            <div className="mainOptionsContainer">
              {leftMainOptions.map((option, index) => (
                <Buttons
                  key={`leftMainOptions-${index}`}
                  icon={option.icon}
                  name={option.name}
                />
              ))}
            </div>
            <p className="leftOtherP">Other</p>
            <div className="otherOptionsContainer">
              {leftOtherOptions.map((option, index) => (
                <Buttons
                  key={`leftOtherOptions-${index}`}
                  icon={option.icon}
                  name={option.name}
                />
              ))}
            </div>
            <div className="socialMediaIconsContainer">
              <p>Iconos de redes sociales</p>
            </div>
            <p className="leftOtherP">Popular Tags</p>
            <div className="popularTagsContainer">
              {popularTags.map((tag, index) => (
                <Buttons
                  key={`popularTags-${index}`}
                  icon={tag.icon}
                  name={tag.name}
                />
              ))}
            </div>
            <div className="leftFooter">
              <p>
                <span className="devComunityFooter">DEV Community</span> A
                constructive and inclusive social network for software
                developers. With you every step of your journey.
              </p>
              <p>
                Built on <span>Forem</span> — the <span>open source</span>{" "}
                software that powers <span>DEV</span> and other inclusive
                communities.
              </p>
              <p>
                Made with love and <span>Ruby on Rails.</span> DEV Community ©
                2016 - 2024.
              </p>
            </div>
          </aside>
          <Center />
          <aside className="rightSideContainer">
            <div className="rigthDiscutionsContainer">
              <p className="discussTitle">#discuss</p>
              <p className="discussDescription">
                Discussion threads targeting the whole community
              </p>
              <div className="rightDiscussPosts">
                {rightDiscuss.map((post, index) => (
                  <BasicCard
                    key={`rightDiscuss-${index}`}
                    title={post.title}
                    comments={post.comments}
                  />
                ))}
              </div>
            </div>
            <div className="rigthWatercoolerContainer">
              <p className="discussTitle">#Watercooler</p>
              <p className="discussDescription">
                Light, and off-topic conversation.
              </p>
              <div className="rightDiscussPosts">
                {rightWatercooler.map((post, index) => (
                  <BasicCard
                    key={`rightWatercooler-${index}`}
                    title={post.title}
                    comments={post.comments}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="rightTrendingTitle">trending guides/resources</p>
              <div className="trendingPosts">
                {rightTrending.map((post, index) => (
                  <BasicCard
                    key={`rightTrending-${index}`}
                    title={post.title}
                  />
                ))}
              </div>
            </div>
            <hr />
            <div className="recentlyQueriedContainer">
              <p className="queriedTitle">recently queried</p>
              <div className="queriedPosts">
                {rightRecentrlyQueried.map((post, index) => (
                  <BasicCard
                    key={`rightRecentrlyQueried-${index}`}
                    title={post.title}
                  />
                ))}
              </div>
            </div>
            <hr />
          </aside>
        </div>
      </div>
    </main>
  );
}
