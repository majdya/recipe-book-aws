const express = require("express");
const cluster = require("cluster");
const app = require("./app");

if (cluster.isMaster) {
  // Count the machine's CPUs
  var cpuCount = require("os").cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < 1; i += 1) {
    cluster.fork();
  }
  console.log("Application running!");
} else {
  const port = app.get("port");
  app.listen(port, () => {
    console.log("Worker %d running! on port %d", cluster.worker.id, port);
  });
}
