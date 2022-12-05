import { Fragment, useEffect, useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

import classes from "./Votes.module.css";

export default function Votes(props) {
  const [currVotes, setCurrVotes] = useState(props.votes);
  const [voteState, setVoteState] = useState(null);
  const [changeVoteBy, setChangeVoteBy] = useState(0);

  function upClick() {
    setCurrVotes(currVotes + 1);
    if (voteState === "down") {
      setVoteState(null);
      setChangeVoteBy(1);
    } else {
      setVoteState("up");
      setChangeVoteBy("1");
    }
  }

  function cancelUpClick() {
    setChangeVoteBy(-1);

    setCurrVotes(currVotes - 1);
    setVoteState(null);
  }

  function downClick() {
    setCurrVotes(currVotes - 1);

    if (voteState === "up") {
      setVoteState(null);
      setChangeVoteBy(-1);
    } else {
      setVoteState("down");
      setChangeVoteBy("-1");
    }
  }

  function cancelDownClick() {
    setChangeVoteBy(+1);
    setCurrVotes(currVotes + 1);
    setVoteState(null);
  }

  useEffect(() => {
    fetch(`https://be-news.cyclic.app/${props.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        inc_votes: changeVoteBy,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body.article.votes);
      });
  }, [changeVoteBy, props.id]);

  return (
    <Fragment>
      <div className={classes.voteCount}>
        {" "}
        {voteState !== "up" ? (
          <i className={classes.voteArrows} onClick={upClick}>
            {" "}
            <FaLongArrowAltUp />
          </i>
        ) : (
          <i
            className={classes.voteArrows}
            id={classes.upArrow}
            onClick={cancelUpClick}
          >
            {" "}
            <FaLongArrowAltUp />
          </i>
        )}
        <p className={classes.voteTxt}>{currVotes}</p>
        {voteState !== "down" ? (
          <i className={classes.voteArrows} onClick={downClick}>
            {" "}
            <FaLongArrowAltDown />
          </i>
        ) : (
          <i
            className={classes.voteArrows}
            id={classes.downArrow}
            onClick={cancelDownClick}
          >
            {" "}
            <FaLongArrowAltDown />
          </i>
        )}
      </div>
    </Fragment>
  );
}
