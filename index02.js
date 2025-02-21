const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const parseurl = url.parse(req.url, true);
    console.log(parseurl);

    if (parseurl.pathname === "/menu/veg") {
      if (parseurl.query.item === "panner") {
        res.writeHead(202, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            category: "veg",
            item:parseurl.query.item,
            message: "Thank you for your order!",
            price: parseurl.query.quantity * 120,
          })
        );
      } else if (parseurl.query.item === "gobi") {
        res.writeHead(202, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            category: "veg",
            item:parseurl.query.item,
            message: "Thank you for your order!",
            price: parseurl.query.quantity * 150,
          })
        );
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid veg item" }));
      }
    } else if (parseurl.pathname === "/menu/non_veg") {
      if (parseurl.query.item === "chicken") {
        res.writeHead(202, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            category: "non_veg",
            item:parseurl.query.item,
            message: "Thank you for your order!",
            price: parseurl.query.quantity * 120,
          })
        );
      } else if (parseurl.query.item === "fish") {
        res.writeHead(202, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            category: "non_veg",
            item:parseurl.query.item,
            message: "Thank you for your order!",
            price: parseurl.query.quantity * 220,
          })
        );
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid non-veg item" }));
      }
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid path" }));
    }
  } else if (req.method === "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "POST request handling not available yet" }));
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

server.listen(2009, () => {
  console.log("Server is running on port 2009");
});
