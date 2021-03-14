import express, { Response } from "express";
import fs from "fs";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = 8000;

const app = express();

app.use("^/$", (_, res: Response, __) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Unexpected error encountered");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "../", "build")));

app.listen(PORT, () => {
  console.log(`App launched on port ${PORT}`);
});
