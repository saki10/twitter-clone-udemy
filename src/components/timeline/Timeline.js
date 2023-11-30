import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import db from "../../firebase.js";
import {
  collection,
  // getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import FlipMove from "react-flip-move";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // リアルタイムでない場合のデータ取得
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avater={post.avater}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
