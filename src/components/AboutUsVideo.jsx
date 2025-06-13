import React from "react";

const VideoThumbnail = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-[800px] rounded-xl overflow-hidden shadow-lg">
        <img
          src="src/assets/video.png"
          alt="Video Thumbnail"
          className="w-full h-auto object-cover"
        />
        <button className="absolute inset-0 flex justify-center items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center shadow-md hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.5 5.5a.5.5 0 01.8-.4l7 4.5a.5.5 0 010 .8l-7 4.5a.5.5 0 01-.8-.4v-9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoThumbnail;
