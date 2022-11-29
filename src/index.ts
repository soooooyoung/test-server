"use strict";
import "reflect-metadata";
import { TestServer } from "./server";

async function start(): Promise<void> {
  const server = new TestServer();
  await server.startServer();
}

start().catch((err) => {
  // TODO: Logger implementation - 작업 생략
  //   logError(
  //     `SERVER SETUP ERROR
  //         ${err.message}`
  //   );
  console.log(err.message);
  process.exit(-1);
});
