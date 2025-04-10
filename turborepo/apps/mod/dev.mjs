import { spawn } from "child_process";
import readline from "readline";
import path from "path";

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user
rl.question("Are you on Windows or Linux? (w/l): ", (answer) => {
  rl.close();

  let command;
  let args = [];

  const scriptDir = path.join("scripts");

  if (answer.trim().toLowerCase() === "w") {
    command = "cmd";
    args = ["/c", path.join(scriptDir, "dev.bat")];
  } else if (answer.trim().toLowerCase() === "l") {
    command = "bash";
    args = [path.join(scriptDir, "dev.sh")];
  } else {
    console.error("Invalid input. Please enter 'w' for Windows or 'l' for Linux.");
    process.exit(1);
  }

  const child = spawn(command, args, { stdio: "inherit" });

  child.on("exit", (code) => {
    process.exit(code);
  });
});
