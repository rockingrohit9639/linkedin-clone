import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Post/Post";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // for different timezones
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title={"Photo"} color="#70B5F9" />
          <InputOption
            Icon={SubscriptionIcon}
            title={"Video"}
            color="#E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title={"Event"} color="#C0CBCD" />
          <InputOption
            Icon={CalenderViewDayIcon}
            title={"Write Article"}
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data }) => (
          <Post
            key={id}
            name={data.name}
            description={data.description}
            message={data.message}
            imgURL={data.photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
