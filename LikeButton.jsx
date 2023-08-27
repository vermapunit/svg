import React from 'react';

import { useState } from 'react'


const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
    setBgOpacity(Math.min(1, bgOpacity + 0.1));
  };

  return (
    <div>
      <img
        src="like.svg"
        id="like-btn-img"
        style={{ backgroundColor: `rgba(255, 0, 0, ${bgOpacity})`, cursor: 'pointer', width: '50px' }}
        alt="Like"
        onClick={handleLikeClick}
      />
      <span id="like-counter">Likes: {likeCount}</span>
    </div>
  );
};

export default LikeButton;


