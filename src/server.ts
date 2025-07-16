/**
 * Main Application file:
 */

import server from "./app";
import { envConfig } from "./configs/env.config";
import { serverConfig } from "./configs/server.config";
import process from "node:process";

const _beforeStart = async (): Promise<void> => {
  if (envConfig.allowed.indexOf(envConfig.current) === -1) {
    console.error(
      `❌ NODE_ENV is set to ${
        envConfig.current
      }, but only ${envConfig.allowed.toString()} are valid.`
    );
    process.exit(1);
  }

  return Promise.resolve();
};

// Initialize server
_beforeStart()
  .then(() => {
    server.listen(serverConfig.port, () => {
      console.log(`🚀 Server running on port: ${serverConfig.port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Could not start server", error);
  });

let isShuttindDown = false;
const _gracefulShutdown = (exit = false) => {
  // If we already started shutting down, don't do it again.
  if (isShuttindDown) return;
  isShuttindDown = true;

  console.warn(`⚠️ Received SIGINT or SIGTERM. Shutting down gracefully...`);
  const exitCode = exit ? 1 : 0;

  server.close(() => {
    console.info("🚪Closed out remaining connections.");
    process.exit(exitCode);
  });

  // Force stop after 5 seconds
  setTimeout(() => {
    console.warn(
      "⚠️ Could not close HTTP connections in time, forcibly shutting down"
    );
    process.exit(exitCode);
  }, 5 * 1000);
};

// Handle process signals
process.on("SIGINT", () => _gracefulShutdown(false));
process.on("SIGTERM", () => _gracefulShutdown(false));

// Handle process error
process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhanlded Rejection at: ", promise, "reason: ", reason);
});

process.on("uncaughtException", (err, origin) => {
  console.error("🔥 Uncaught Exception: ", err);
  _gracefulShutdown(true);
});
