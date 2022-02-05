import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "../InputOption/InputOption";
import "./Post.css";
import { 
    ShareOutlined, 
    SendOutlined, 
    ChatOutlined, 
    ThumbUpAltOutlined
} from "@material-ui/icons";
const Post = forwardRef(({ name, description, message, imgURL }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <Avatar src={imgURL}>
          {name[0]}
          </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
          <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} color={"gray"} title={"Like"} />
        <InputOption Icon={ChatOutlined} color={"gray"} title={"Comment"} />
        <InputOption Icon={ShareOutlined} color={"gray"} title={"Share"} />
        <InputOption Icon={SendOutlined} color={"gray"} title={"Send"} />
      </div>
    </div>
  );
})

export default Post;
