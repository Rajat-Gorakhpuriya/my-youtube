import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCardsList from './VideoCardsList';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  useEffect(()=>{
    getVedios();
  },[]);
  const [videos, setVideos] = useState([]);

  const getVedios = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json  = await data.json();
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {
        videos.map(v => {
        return (
          <Link to={"/watch?v="+ v.id}>
            <VideoCardsList key={v.id} info={v}></VideoCardsList>
          </Link>
        )
        })
      }
    </div>
  )
}

export default VideoContainer