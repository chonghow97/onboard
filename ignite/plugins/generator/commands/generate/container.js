/**
 * Container Generator
 * You can run it when it's installed to your project
 * by doing `ignite generate container foo`.
 *
 * For more information on plugins, check out https://github.com/infinitered/gluegun/blob/master/docs/plugins.md.
 */

module.exports = {
  description: "Generates a more complex component",
  async run(toolbox) {
    // Learn more about toolbox: https://infinitered.github.io/gluegun/#/toolbox-api.md
    const { parameters, strings, print, filesystem, ignite } = toolbox;
    const { pascalCase, isBlank } = strings;

    // validation
    if (isBlank(parameters.first)) {
      print.info(`ignite generate container <name>\n`);
      print.info("A name is required.");
      return;
    }

    const name = pascalCase(parameters.first);
    const props = { name };

    // Copies the template `.js.ejs` in your plugin's templates/container folder
    // into app/containers/${name} directory as `.tsx`
    const jobs = [
      {
        template: "container/hooks.js.ejs",
        target: `app/containers/${name}/hooks.tsx`
      },
      {
        template: "container/index.js.ejs",
        target: `app/containers/${name}/index.tsx`
      },
      {
        template: "container/props.js.ejs",
        target: `app/containers/${name}/props.ts`
      },
      {
        template: "container/styles.js.ejs",
        target: `app/containers/${name}/styles.tsx`
      }
    ];

    // read the export container/index.ts content and rewrite with new export
    const exportText = filesystem.read(`app/containers/index.ts`) || "";
    filesystem.write(
      `app/containers/index.ts`,
      `${exportText}export * from "./${name}";\n`
    );

    // make the templates and pass in props with the third argument here
    await ignite.copyBatch(toolbox, jobs, props);
  }
};
