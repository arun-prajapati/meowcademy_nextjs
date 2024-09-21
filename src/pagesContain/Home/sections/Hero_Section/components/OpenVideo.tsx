"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const OpenVideo = ({home}:{home:any}) => {
    const [openVideo, setOpenVideo] = useState(false);

  return (
    <div className="video-player flex items-center justify-center absolute top-0 left-0 bottom-0 right-0">
    {openVideo && (
      <div className=" absolute top-0 left-0 right-0 bottom-0">
        {home.video ? (
          <iframe
            src={
              `${home.video}?autoplay=1&loop=1&autopause=0`
              // "https://www.youtube.com/embed/aL27fX5kv9U?autoplay=1&loop=1&autopause=0"
            }
            allow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            }
            className="w-full h-full"
          ></iframe>
        ) : home.custom_video_url ? (
          <iframe
            src={
              `${home.custom_video_url}?autoplay=1&loop=1&autopause=0`
              // "https://www.youtube.com/embed/aL27fX5kv9U?autoplay=1&loop=1&autopause=0"
            }
            allow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            }
            className="w-full h-full"
          ></iframe>
        ) : (
          ""
        )}
      </div>
    )}
    <Image
    width={56}
    height={56}
      src={'/svg/pause.svg'}
      alt="pause"
      className=" cursor-pointer w-14 md:w-24"
      onClick={() => {
        setOpenVideo(!openVideo);
      }}
    />
  </div>
  )
}

export default OpenVideo
