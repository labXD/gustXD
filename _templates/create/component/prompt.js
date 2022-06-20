module.exports = [
  {
    type: "input",
    name: "component",
    message: "Name of component?",
    validate(value, state) {
      const regex = /^[a-zA-Z]+$/;
      const match = value.match(regex);

      if (!match) {
        state.input = "";
        return console.log("\nuse camelCase letters only\n");
      }

      console.log(`\n\nCreating ${state.input} component\n`);
      return true;
    },
  },
];
