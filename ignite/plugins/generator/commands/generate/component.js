/**
 * Simple Component Generator
 * You can run it when it's installed to your project
 * by doing `ignite generate component foo`.
 *
 * For more information on plugins, check out https://github.com/infinitered/gluegun/blob/master/docs/plugins.md.
 */

module.exports = {
  description: "Generates a simple reusable component",
  async run(toolbox) {
    // Learn more about toolbox: https://infinitered.github.io/gluegun/#/toolbox-api.md
    const { parameters, strings, print, filesystem, ignite } = toolbox;
    const { pascalCase, isBlank } = strings;

    // validation
    if (isBlank(parameters.first)) {
      print.info(`ignite generate component <name>\n`);
      print.info("A name is required.");
      return;
    }

    const name = pascalCase(parameters.first);
    const props = { name };

    // Copies the template `.js.ejs` in your plugin's templates/component folder
    // into app/components/${name} directory as `.tsx`
    const jobs = [
      {
        template: "component/index.js.ejs",
        target: `app/components/${name}/index.tsx`
      },
      {
        template: "component/props.js.ejs",
        target: `app/components/${name}/props.ts`
      },
      {
        template: "component/styles.js.ejs",
        target: `app/components/${name}/styles.tsx`
      }
    ];

    // read the export component/index.ts content and rewrite with new export
    const exportText = filesystem.read(`app/components/index.ts`) || "";
    filesystem.write(
      `app/components/index.ts`,
      `${exportText}export * from "./${name}";\n`
    );

    // make the templates and pass in props with the third argument here
    await ignite.copyBatch(toolbox, jobs, props);
  }
};
