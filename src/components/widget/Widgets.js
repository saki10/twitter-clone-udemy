import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widets_widetConteiner">
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId={"1723126228616692056"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saju0391"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/saju0391"}
          options={{ text: "#React勉強中テスト", via: "saju0391" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
