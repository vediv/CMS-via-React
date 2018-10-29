// import ReactFlowPlayer from "react-flow-player";
import React, { Component } from 'react';
import Plyr from 'react-plyr';

export default class videoPlayer extends Component {
render() {
  return (
    <Plyr
        type="youtube" // or "vimeo"
        videoId="CDFN1VatiJA"
      

      />
  );
}

}


// <div>
// <ReactFlowPlayer
//   playerInitScript="http://releases.flowplayer.org/7.2.1/flowplayer.min.js"
//   playerId="reactFlowPlayer"
//   sources={[
//     {
//       type: "video/webm",
//       src: "http://edge.flowplayer.org/functional.webm"
//     }
//   ]}
//   customButton={[
//     {
//       component: <a id="custom-btn">Custom React Component</a>,
//       class: "fp-controls > .fp-volume",
//       id: "custom-btn",
//       place: "before"
//     }
//   ]}
// />
// </div>
