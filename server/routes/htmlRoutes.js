const path = require("path");

module.exports = (app) =>
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
  );

// or
// module.exports = function (app) {
//   app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
//   });
// };
