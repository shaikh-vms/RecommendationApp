import React from "react";
import "./styles.css";
import { useState } from "react";

const sitesObject = {
  frontend: [
    {
      name: "THE ODIN PROJECT",
      link: "https://www.theodinproject.com/",
      png: "https://www.theodinproject.com/favicon-16x16.png"
    },
    {
      name: "CSS-TRICKS",
      link: "https://css-tricks.com/",
      png: "https://css-tricks.com/apple-touch-icon.png"
    },
    {
      name: "30SECONDS OF CODE",
      link: "https://www.30secondsofcode.org/",
      png: "https://www.30secondsofcode.org/favicon-32x32.png"
    },
    {
      name: "FRONTENDMENTOR",
      link: "https://www.frontendmentor.io/",
      png: "https://www.frontendmentor.io/static/favicon/favicon-32x32.png"
    }
  ],
  CodeEditors: [
    {
      name: "CODEPEN",
      link: "https://codepen.io/",
      png:
        "https://cpwebassets.codepen.io/assets/favicon/favicon-touch-de50acbf5d634ec6791894eba4ba9cf490f709b3d742597c6fc4b734e6492a5a.png"
    },
    {
      name: "CODESANDBOX",
      link: "https://codesandbox.io/",
      png: "https://codesandbox.io/csb-ios.svg"
    },
    {
      name: "CODESHARE",
      link: "https://codeshare.io/",
      png: "https://codeshare.io/-/img/codeshare-logo.svg?v=v3.1.0"
    },
    {
      name: "JSFIDDLE",
      link: "https://jsfiddle.net/",
      png: "https://jsfiddle.net/img/favicon.png"
    }
  ],
  codingChallenge: [
    {
      name: "CODERBYTE.COM",
      link: "https://coderbyte.com/",
      png: "https://coderbytestaticimages.s3.amazonaws.com/favicon_2.png"
    },
    {
      name: "HACKERRANK.COM",
      link: "https://www.hackerrank.com/",
      png:
        "https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_cursor_favicon_480px-150x150.png"
    },
    {
      name: "TOPCODER.COM",
      link: "https://www.topcoder.com/",
      png:
        "https://www.topcoder.com/wp-content/uploads/2020/05/cropped-TC-Icon-32x32.png"
    },
    {
      name: "LEETCODE.COM",
      link: "https://leetcode.com/",
      png:
        "https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png"
    }
  ],

  Blogging: [
    {
      name: "EVATOTUTS+",
      link: "https://tutsplus.com/",
      png:
        "https://static.tutsplus.com/assets/favicon-688766d44f4bd89247fc51a9c8c0d6a83321c3a27befd4c313b2359d23488aec.png"
    },
    {
      name: "FREECODECAMP",
      link: "https://www.freecodecamp.org/news/tag/blogging/",
      png: "https://www.freecodecamp.org/news/favicon.png"
    },
    {
      name: "SMASHINGMAGAZINE",
      link: "https://www.smashingmagazine.com/",
      png:
        " https://www.smashingmagazine.com/images/favicon/apple-touch-icon-iphone-retina-120x120.png"
    }
  ]
};

export default function App() {
  const [choosenType, setType] = useState("frontend");
  function typeClickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="ico1">
          🖥️
        </span>{" "}
        #Developer
        <span style={{ color: "#999999" }}>
          Sources{" "}
          <span role="img" aria-label="ico2">
            💻
          </span>
        </span>
      </h1>
      <h4>
        {" "}
        Checkout my personal bookmarks for best resources available online for
        web devs
      </h4>

      <div>
        {Object.keys(sitesObject).map((type) => (
          <button onClick={() => typeClickHandler(type)} className="buttons">
            {type}
          </button>
        ))}
      </div>
      <em>
        <span style={{ color: "#999999" }}>NOTE: </span>Click any of the
        following to land on the site 💻
      </em>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {sitesObject[choosenType].map((site) => (
            <li className="list-item" key={site.name}>
              <a
                href={site.link}
                className="link"
                rel="noreferrer"
                target="_blank"
              >
                <div className="item-wrapper">
                  <h3> {site.name} </h3>
                  <img alt="" className="icon" src={site.png} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
