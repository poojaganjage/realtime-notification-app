import React, {useState} from 'react';
import Heart from './heart.png';
import Comment from './chat.png';
import Share from './send.png';
import Info from './info.png';
import Heartfilled from './heartfilled.png';

function Card({post, socket, user}) {
  const [liked, setLiked] = useState(false);
  
  const handleNotification = (type) => {
    setLiked(true);
    socket.emit('sendNotification', {
      senderName: user,
      receiverName: post.username,
      type,
    });
  }

  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt='image' className='userimg' />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt='image' className='postimg' />
      <div className='interactions'>
        {liked ? (
          <>
            <img src={Heartfilled} alt='like button' className='card-icons' />
            <img src={Comment} alt='comment button' className='card-icons' />
            <img src={Share} alt='share button' className='card-icons' />
            <img src={Info} alt='info button' className='card-icons' />
          </>
        ) : (
          <>
            <img src={Heart} alt='like button' className='card-icons' onClick={() => handleNotification(1)} />
            <img src={Comment} alt='comment button' className='card-icons' onClick={() => handleNotification(2)} />
            <img src={Share} alt='share button' className='card-icons' onClick={() => handleNotification(3)} />
            <img src={Info} alt='info button' className='card-icons' />
          </>
        )}
      </div>
    </div>
  );
}
export default Card;
