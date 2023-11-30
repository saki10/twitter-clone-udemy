import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./TweetBox.css";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "saki",
      username: "saju0391",
      verified: "true",
      text: tweetMessage,
      avater:
        "https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA-%E3%82%A2%E3%83%83%E3%83%97%E5%86%99%E7%9C%9F%E3%81%A7%E8%8C%B6%E8%89%B2%E3%81%AE%E6%A4%8D%E7%89%A9-y6OwxwYKSQE",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <from>
        <div className="tweetBox_input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </from>
    </div>
  );
}

export default TweetBox;
