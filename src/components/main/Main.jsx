import React, { useState } from "react";
import "./Main.css";
import logoMastercraft from "../../images/logo-mastercraft.svg";
import ibookmark from "../../images/icon-bookmark.svg";
import ibookmarked from "../../images/icon-bookmarked.svg";
import Container from "../UI/Container";
import ProgressBar from "../UI/ProgressBar";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import Reward from "./Reward";
import Divider from "../UI/Divider";

const Main = ({ toggleModal, rewards, totalBackers, backedMoney }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const progressBarW = (backedMoney * 100) / 100000;

  return (
    <div className="main">
      <Container>
        <div className="m-intro">
          <div className="logo-container">
            <img
              src={logoMastercraft}
              alt="logo mastercraft"
              title="logo mastercraft"
            />
          </div>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="intro-footer">
            <Button className="btn btn-primary" onClick={toggleModal}>
              <span className="btn-title">Back this project</span>
            </Button>
            <Button
              className="btn btn-bookmark"
              onClick={() => setBookmarked(!bookmarked)}
            >
              <img
                src={bookmarked ? ibookmarked : ibookmark}
                alt="bookmark this project"
              />
              <span
                className={`btn-title collapse ${
                  bookmarked ? "bookmarked" : undefined
                }`}
              >
                {bookmarked ? "Bookmarked" : "Bookmark"}
              </span>
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="statistics">
          <div className="stats-col">
            <h2>${backedMoney}</h2>
            <p>of $100,000 backed</p>
            <Divider />
          </div>
          <div className="stats-col">
            <h2>{totalBackers}</h2>
            <p>total backers</p>
            <Divider />
          </div>
          <div className="stats-col">
            <h2>56</h2>
            <p>days left</p>
          </div>
        </div>
        <ProgressBar width={progressBarW} height={1} />
      </Container>
      <Container>
        <div className="about">
          <h3>About this project</h3>
          <Paragraph>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
            <br />
            <br />
            <br />
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </Paragraph>
        </div>
        {rewards.map((reward) => {
          return (
            <Reward
              key={reward.id}
              reward={reward}
              disabled={reward.amount === 0}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Main;
