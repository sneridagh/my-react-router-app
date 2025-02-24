import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";
import { getAddonRoutesConfig } from "@plone/react-router";
import config from "@plone/registry";
// eslint-disable-next-line import/no-unresolved
import applyAddonConfiguration, { addonsInfo } from "../registry.loader";

// applyAddonConfiguration(config);

const routes: RouteConfig = [
  index("routes/home.tsx", { id: "index" }),
  ...getAddonRoutesConfig(config.routes || [], addonsInfo),
];

export default routes;
