/**
 * This is an example Ignite plugin generator. You can run it when it's installed to
 * your project by doing `ignite generate screen foo`.
 *
 * You can rename this command to anything you'd like, or add others.
 *
 * For more information on plugins, check out https://github.com/infinitered/gluegun/blob/master/docs/plugins.md.
 */

module.exports = {
  description: "Generates a custom screen",
  async run(toolbox) {
    // Learn more about toolbox: https://infinitered.github.io/gluegun/#/toolbox-api.md
    const { parameters, strings, print, filesystem, ignite } = toolbox;
    const { pascalCase, isBlank, trim } = strings;

    // validation
    if (isBlank(parameters.first)) {
      print.info(`ignite generate screen <name>\n`);
      print.info("A name is required.");
      return;
    }

    const name = pascalCase(parameters.first);
    const props = { name };

    // ask the user to enter the directory the screen is in
    const askPath = {
      type: "input",
      name: "path",
      message:
        "Which directory is you screen in? ex: for `EditProfile`, enter `Profile/Settings` \nscreens/"
    };
    const { path } = await toolbox.prompt.ask([askPath]);
    // removes additional space and "/" entered
    const pathName = trim(trim(path), "/");

    // adds a "/" if there is a directory entered, prevents additional "/" when no directory entered
    const directory = pathName === "" ? "" : `${pathName}/`;

    // Copies the template `.js.ejs` in templates/screen folder
    // into app/screens/_directory_/_name_/ as `.tsx`
    const jobs = [
      {
        template: "screen/component.js.ejs",
        target: `app/screens/${directory}${name}/component.tsx`
      },
      {
        template: "screen/index.js.ejs",
        target: `app/screens/${directory}${name}/index.tsx`
      },
      {
        template: "screen/props.js.ejs",
        target: `app/screens/${directory}${name}/props.ts`
      },
      {
        template: "screen/styles.js.ejs",
        target: `app/screens/${directory}${name}/styles.tsx`
      }
    ];

    // read the export screen/index.ts content and rewrite with new export
    const exportText = filesystem.read(`app/screens/index.ts`) || "";
    filesystem.write(
      `app/screens/index.ts`,
      `${exportText}export * from "./${directory}${name}";\n`
    );

    // make the templates and pass in props with the third argument here
    await ignite.copyBatch(toolbox, jobs, props);
  }
};
