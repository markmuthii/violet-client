import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Likes from "./Likes";
import Dislikes from "./Dislikes";
import Cookies from "js-cookie";
import "../../../cssFiles/Likes.css";

const BookLikes = ({ id, bookLikes }) => {
  const token = Cookies.get("token");
  const [likes, setLikes] = useState(0);
  //const  { id } = useParams();

  const bookId = id;
  console.log(bookId)

  const [likeActive, setLikeActive] = useState(false);

  /* const handleLike = (id) => {
        if (likeActive) {
          bookLike(id);
        } else {
          bookDislike(id);
        }
        
      }; */

  console.log(likes);
 /*  if (bookLikes > 1) {
    setLikeActive(true);
  } */

  
  return (
    <>
     {/*  <div className="heartbox">
        <input type="checkbox" className="checkbox" id="checkbox" onClick={() => setLikeActive(!likeActive)}/>
        <label for="checkbox">
          <svg
            id="heart-svg"
            viewBox="467 392 58 57"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Group"
              fill="none"
              fill-rule="evenodd"
              transform="translate(467 392)"
            >
              <path
                d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                id="heart"
                fill="#AAB8C2"
              />
              <circle
                id="main-circ"
                fill="#E2264D"
                opacity="0"
                cx="29.5"
                cy="29.5"
                r="1.5"
              />

              <g id="heartgroup7" opacity="0" transform="translate(7 6)">
                <circle id="heart1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                <circle id="heart2" fill="#8CE8C3" cx="5" cy="2" r="2" />
              </g>

              <g id="heartgroup6" opacity="0" transform="translate(0 28)">
                <circle id="heart1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                <circle id="heart2" fill="#91D2FA" cx="3" cy="2" r="2" />
              </g>

              <g id="heartgroup3" opacity="0" transform="translate(52 28)">
                <circle id="heart2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                <circle id="heart1" fill="#8CE8C3" cx="4" cy="2" r="2" />
              </g>

              <g id="heartgroup2" opacity="0" transform="translate(44 6)">
                <circle id="heart2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                <circle id="heart1" fill="#CC8EF5" cx="2" cy="2" r="2" />
              </g>

              <g id="heartgroup5" opacity="0" transform="translate(14 50)">
                <circle id="heart1" fill="#91D2FA" cx="6" cy="5" r="2" />
                <circle id="heart2" fill="#91D2FA" cx="2" cy="2" r="2" />
              </g>

              <g id="heartgroup4" opacity="0" transform="translate(35 50)">
                <circle id="heart1" fill="#F48EA7" cx="6" cy="5" r="2" />
                <circle id="heart2" fill="#F48EA7" cx="2" cy="2" r="2" />
              </g>

              <g id="heartgroup1" opacity="0" transform="translate(24)">
                <circle id="heart1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                <circle id="heart2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
              </g>
            </g>
          </svg>
        </label>
      </div> */}

      {/* <div className="badge-numbers">
      {
      likeActive ? (
        <Likes id={bookId} token={token} setLikes={setLikes} likeActive={likeActive} setLikeActive={setLikeActive}/>
      ) : (
        
        <Dislikes id={bookId} token={token} setLikes={setLikes} likeActive={likeActive} setLikeActive={setLikeActive}/>  
      )
     // setLikeActive(!likeActive)
      }
    </div>
  <div className="likes">{bookLikes}</div> */}
    </>
  );
};

export default BookLikes;
