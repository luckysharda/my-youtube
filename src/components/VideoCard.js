import React from "react";

const VideoCard = ({ info }) => {
  // Check if info or snippet is undefined/null before destructuring
  if (!info || !info.snippet) {
    return null; // or return some placeholder indicating that info is missing
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // Check if thumbnails is undefined/null before accessing its properties
  const thumbnailUrl = thumbnails?.medium?.url || ""; // Handle possible undefined/null

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnailUrl} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
