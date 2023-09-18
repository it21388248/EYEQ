const { spawn } = require("child_process");
// const childPython = spawn("python", ["codeSpace.py"]);

const pythonProcess = spawn(
  `${__dirname}/../MERN WITH PYTHON/myenv/Scripts/python`,
  [`${__dirname}/../MERN WITH PYTHON/codeSpace.py`],
  {
    cwd: `${__dirname}/../MERN WITH PYTHON`, // Set the working directory to where main.py is located
  }
);

pythonProcess.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});
