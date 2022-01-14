import React, { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  state = {
    informations: [
      {
        id: 1,
        title: "Australia agrees to delay deporting Djokovic",
        summary:
          "The tennis star's lawyers say he could have to play on Monday night and so they want their appeal heard quickly.",
        tag: "Australia",
        imgSrc:
          "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/0C95/production/_122712230_novakgetty.jpg",
        imgAlt: "Novak Djokovic practises in Melbourne",
      },

      {
        id: 2,
        title: "The politics behind Australia's Djokovic decision",
        summary: "",
        tag: "Australia",
        imgSrc:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/0907/production/_122711320_gettyimages-1335785331.jpg",
        imgAlt: "Australian PM Scott Morrison",
      },

      {
        id: 3,
        title: "Secret audio sheds light on dictator's frantic last hours",
        summary: "",
        tag: "Africa",
        imgSrc:
          "https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/F370/production/_122702326_super_promo_new_safe_zone.jpg",
        imgAlt: "Ben Ali on plane",
      },

      {
        id: 4,
        title: "How the return-to-office date 'died'",
        summary: "",
        tag: "Worklife",
        imgSrc:
          "https://ichef.bbc.co.uk/wwhp/304/ibroadcast/images/live/p0/bh/1r/p0bh1r1n.jpg",
        imgAlt: "(Credit: Getty Images)",
      },

      {
        id: 5,
        title: "The UK's plan to return to space",
        summary: "",
        tag: "Future",
        imgSrc:
          "https://ichef.bbc.co.uk/wwhp/304/ibroadcast/images/live/p0/bg/c3/p0bgc3nn.jpg",
        imgAlt: "The UK's plan to return to space",
      },
    ],
  };

  render() {
    return (
      <div>
        <Box informations={this.state.informations} />
      </div>
    );
  }
}

export default App;
