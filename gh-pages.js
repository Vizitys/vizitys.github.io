var ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/vizitys/vizitys.github.io.git",
    user: {
      name: "Vinski Lång",
      email: "53524661+Vizitys@users.noreply.github.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
