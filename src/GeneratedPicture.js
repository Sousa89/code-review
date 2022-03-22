// GeneratedPicture.js

import axios from "axios";
import { useState, useEffect } from "react";

// this function generates an image with the returned data from the Bored API, into a search parameter for the Unsplash API
function GeneratedImage(searchParam) {
  const [finalImage, setFinalImage] = useState(!true);

  useEffect(() => {
    axios({
      url: "https://api.unsplash.com/search/photos",
      params: {
        client_id: "1YEO7ec4t59LFSTJWzsHQtYq1bYEsubt_Y349TCcKF0",
        query: searchParam,
      },
    }).then((pictureData) => {
      setFinalImage(pictureData.data.results[0].urls.small);
    });
  }, [searchParam]);

  return (
    <div className="generatedPictureBox">
      <div className="imgContainer">
        {/* Because finalImage is first rendered as empty in the GeneratedImage it causes an error for us when we try to display data the second time around Here's my janky work around */}
        {finalImage === false ? null : <img src={finalImage} alt="" />}
      </div>
    </div>
  );
}

export default GeneratedImage;
