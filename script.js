const entertainment = document.querySelector(".entment_btn");
const sports = document.querySelector(".sports_btn");
const business = document.querySelector(".business_btn");
const tech = document.querySelector(".technology_btn");
const health = document.querySelector(".health_btn");
const general = document.querySelector(".general_btn");
const sciene = document.querySelector(".science_btn");
const newsContainer = document.querySelector(".news_container");

const renderError = function (msg) {
  newsContainer.insertAdjacentText("beforeend", msg);
};

let key = "ffcb6435fa1b44b0ad8a0559783e661a";

let bookmarks = [];

async function generalData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${key}`
    );

    let data = await response.json();
    console.log(data);

    general.addEventListener("click", function () {
      allData(data.articles);
    });
  } catch (err) {
    console.error("something wrong");
    renderError(` Something Wrong. try again`);
  }
}

generalData();

////////////////////////////////////////////////////////////////////////////////////////////

async function businessData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`
    );
    const data = await response.json();
    console.log(data);

    business.addEventListener("click", function () {
      allData(data.articles);
    });
  } catch (error) {
    console.log("something wrong");
  }
}

businessData();

///////////////////////////////////////////////////////////////////////

async function techData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${key}`
    );
    const data = await response.json();
    console.log(data);

    tech.addEventListener("click", function () {
      allData(data.articles);
    });
  } catch (error) {
    console.log("something wrong");
  }
}

techData();

////////////////////////////////////////////////////////////////////////////////////////////////

async function entData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`
    );

    const data = await response.json();
    console.log(data);

    entertainment.addEventListener("click", function () {
      allData(data.articles);
    });
  } catch (error) {}
}

entData();

////////////////////////////////////////////////////////////////////////////////////////

async function healthData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`
    );
    const data = await response.json();
    console.log(data);

    health.addEventListener("click", function () {
      allData(data.articles);
    });
  } catch (error) {}
}

healthData();

////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

async function sciData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${key}`
    );
    const data = await response.json();
    console.log(data);

    sciene.addEventListener("click", function () {
      allData(data.articles);
    });
  } catch (error) {}
}

sciData();

///////////////////////////////////////////////

///////////////////////////////////////////////////

async function sportsData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`
    );
    if (!response.status) throw new Error("error");
    const data = await response.json();
    console.log(data);

    sports.addEventListener("click", function () {
      allData(data.articles);
    });
  } catch (error) {}
}
sportsData();

/////////////////////////////////

/////////////////////////////////////////////////////////

function allData(data) {
  for (let key in data) {
    console.log(key);

    const html = `
      <div class="news">
      <div class="news_box">
        <img class="news_img" src="${data[key].urlToImage}" />
        <div class="news_info">
        <div class="news_publishedAt">
        <p>
        ${data[key].publishedAt}
        </p>
    
        </div>
          <div class="news_title">
            <h1>${data[key].title}</h1>
          </div>
    
          <br>
          <div class="news_content">
            <p>
                  &nbsp
                   ${data[key].content}.<a href='${data[key].url}' target='_blank'>Read more here</a>
            </p>
          </div>
          <div class="bookmark"></div>
        </div>
      </div>`;

    newsContainer.insertAdjacentHTML("afterend", html);
  }
}
