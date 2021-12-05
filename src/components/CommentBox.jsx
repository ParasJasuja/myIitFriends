import React from "react";
import "../Styles/CommentBox.css";
import CloseIcon from "@material-ui/icons/Close";
import Comment from "./Comment";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function CommentBox(props) {
  return (
    <div className="CommentBox">
      <div className="comment-box-header">
        <div className="heading-box">
          <h2 className="commentbox-heading">Comments</h2>
          <span className="comments-count">55</span>
        </div>
        <CloseIcon fontSize="large" onClick={props.toggleCommentBox} />
      </div>
      <div className="all-comments">
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
        <Comment
          imgLink="https://picsum.photos/48/48"
          name="Name Surname"
          comment="comment is here ....afajifbaudfbiu iuanfiua fubasiuf asdufiuas bfaf
          babf bafba yfa, fiafids finaskjfb iuabifn si f"
        />
      </div>
      <div className="add-comment">
        <div className="">
          <span>Comment as</span>
          <h3>Name Surname</h3>
        </div>
        <div className="write-comment">
          <input name="comment" type="text" placeholder="Write Comment here" />
          <button>
            <ArrowUpwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
