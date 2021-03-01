import React, { useEffect } from "react";
import { getStorybookUI, configure } from "@storybook/react-native"; // eslint-disable-line

declare let module;

configure(() => {
  // eslint-disable-next-line
  require("./storybook-registry");
}, module);

const StorybookUI = getStorybookUI({
  port: 9001,
  host: "localhost",
  onDeviceUI: true,
  asyncStorage: require("@react-native-community/async-storage").default || null // eslint-disable-line global-require
});

export function StorybookUIRoot() {
  useEffect(() => {
    (async () => {
      if (typeof __TEST__ === "undefined" || !__TEST__) {
        const Reactotron = require("../app/services/reactotron"); // eslint-disable-line global-require
        const reactotron = new Reactotron.Reactotron();
        reactotron.setup();
      }
    })();
  }, []);

  return <StorybookUI />;
}

export default StorybookUIRoot;
