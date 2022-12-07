dirList = { '/': { size: 0, dirs: [], files: {} } };

function aoc() {
  minSize = 100000;

  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  curDir = ["/"];
  for (i = 0; i < inpt.length; i++) {
    command = inpt[i].split(" ");
    if (command[0] == "$") {
      switch (command[1]) {
        case "cd":
          switch (command[2]) {
            case "..":
              curDir.splice(-1);
              break;
            case "/":
              curDir = ["/"];
              break;
            default:
              curDir.push(command[2]);
              break;
          }
          break;
        case "ls":
          break;
      }
    } else if (command[0] == "dir") {
      path = curDir.join('-') + '-' + command[1];
      if (!dirList[path])
        dirList[path] = { size: 0, dirs: [], files: {} };
      if (dirList[curDir.join('-')].dirs.filter(v => v == path).length < 1)
        dirList[curDir.join('-')].dirs.push(path);
    } else if (command.length > 1) {
      dirList[curDir.join('-')].files[command[1]] = parseInt(command[0]);
    }
  }

  sizeDir("/");

  ttl = 0;
  for (dir in dirList) {
    if (dirList[dir].size <= minSize)
      ttl += dirList[dir].size
  }
  console.log(ttl);
}

function sizeDir(dir) {
  dirList[dir].size = Object.values(dirList[dir].files).reduce((a, b) => a + b, 0);
  for (newDir in dirList[dir].dirs) {
    dirList[dir].size += sizeDir(dirList[dir].dirs[newDir]);
  }
  return dirList[dir].size;
}