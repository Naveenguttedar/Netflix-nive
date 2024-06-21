import { request } from "https";
import { writeFile } from "fs";
const options = {
  method: "GET",
  hostname: "movies-api14.p.rapidapi.com",
  port: null,
  path: "/home",
  headers: {
    "x-rapidapi-key": "bc89a9122bmsha2a23d3675dff9dp18d18cjsn922b2dcbdf9a",
    "x-rapidapi-host": "movies-api14.p.rapidapi.com",
  },
};

const req = request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    const jsonData = JSON.parse(body);
    writeFile("data.json", JSON.stringify(jsonData, null, 4), (err) => {
      if (err) {
        console.error("error in writeing file ", err);
      } else console.log("data written successfully ");
    });
  });
});

req.end();
