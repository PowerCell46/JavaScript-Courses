function arrayManipulations(commands) {
  let array = commands[0].split(" ");

  for (let index = 1; index < Number(commands.length); index++) {
    let currentCommands = commands[index].split(" ");

    switch (currentCommands[0]) {
      case "Add":
        array.push(currentCommands[1]);
        break;
      case "Remove":
        array = array.filter((el) => el !== currentCommands[1]);
        break;
      case "RemoveAt":
        array.splice(currentCommands[1], 1);
        break;
      case "Insert":
        array.splice(currentCommands[2], 0, currentCommands[1]);
        break;
    }
  }
  console.log(array.join(" "));
}
