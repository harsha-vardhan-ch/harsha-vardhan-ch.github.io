// import data from './data_index.json';
// const data = require('./data_index.json');

const data ={
    "cards": [
      {
        "category": "Web App",
        "title": "Housease",
        "description": "Web application that simplifies the process of finding student housing ensuring a secure user experience.",
        "image": "assets/img/tree.png",
        "link": "https://github.com/harsha-vardhan-ch/housing"
      },
      {
        "category": "Game",
        "title": "Word Puzzle",
        "description": "Puzzle game using Unity This was implemented as a part of CSCI course during MS.",
        "image": "assets/img/tree.png",
        "link": "https://github.com/harsha-vardhan-ch/word-puzzle"
      },
      {
        "category": "Web App",
        "title": "Community Media",
        "description": "Interactive social media platform to share events within a community.",
        "image": "assets/img/tree.png",
        "link": "https://github.com/harsha-vardhan-ch/MemoryMedia"
      },
      {
        "category": "Web3 App",
        "title": "WavePortal",
        "description": "A Webapplication using Solidity Contract",
        "image": "assets/img/tree.png",
        "link": "https://github.com/harsha-vardhan-ch/web3-folio"
      },
      {
        "category": "Web App",
        "title": "Music Player",
        "description": "Web music player application using Spotify API.",
        "image": "assets/img/tree.png",
        "link": "https://github.com/harsha-vardhan-ch/music-player"
      }
    ]
};

const html = data.cards
	.map(
		(card) => `
    <div class="col-md-4">
      <div class="card card-blog">
        <div class="card-img">
          <a href="${card.link}" target="_blank">
            <img src="${card.image}" alt="" class="img-fluid">
          </a>
        </div>
        <div class="card-body">
          <div class="card-category-box">
            <div class="card-category">
              <h6 class="category">${card.category}</h6>
            </div>
          </div>
          <h3 class="card-title">
            <a href="${card.link}" target="_blank">${card.title}</a>
          </h3>
          <p class="card-description">${card.description}</p>
        </div>
      </div>
    </div>
  `
	)
	.join("");

    window.onload = function () {
        console.log(html);
        // your JavaScript code that modifies the DOM here
        document.getElementById("projects_data").innerHTML = html;
      };
      

