const pa11y = require("pa11y");

async function run() {
  const response = await pa11y("https://www.google.com/");
  console.log(response);
}

run();
