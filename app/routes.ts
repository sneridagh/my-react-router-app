import { type RouteConfig, index } from "@react-router/dev/routes";
import { getAddonRoutesConfig } from "@plone/react-router";
import config from "@plone/registry";
// The next file is generated by the Vite plugin registry loader
// eslint-disable-next-line import/no-unresolved
import { addonsInfo } from "../registry.loader";

export default [
  index("routes/home.tsx"),
  // This generates the routes from the addonsInfo read from the registry loader
  ...getAddonRoutesConfig(config.routes || [], addonsInfo),
] satisfies RouteConfig;
