import Route1 from "./pages/Route1.svelte";
import Users from "./pages/Users.svelte";
import Tree from "./pages/Tree.svelte";
import List from "./pages/List.svelte";
import NotFound from "./pages/NotFound.svelte";
import Error from "./pages/Error.svelte";
import LocaleEditor from "./pages/LocaleEditor.svelte";
import Components from "./pages/Components.svelte";

import { _ } from "svelte-i18n";

import { categories } from "./user-controls/component-examples/components";
export const ComponentsSubroutes = [
  { name: "all", title: "All", icon: "far", route: "/components" },
].concat(
  categories.map((c) => {
    return {
      name: c,
      title: c,
      icon: "far",
      route: fillParams("/components/:category", { category: c }),
    };
  })
);

export const Routes = [
  {
    name: "Components",
    title: "Components",
    route: '/components/:category?',
    breadcrumb: ["Components"],
    icon: "fas fa-file",
    nesting: true,
    subroutes: ComponentsSubroutes,
  },
  {
    name: "ComponentsDetail",
    title: "Components",
    route: "/components/show/:code",
    breadcrumb: ["Components"],
    icon: "fas fa-file",
    hide: true,
  },
  {
    name: "UserProfileInfo",
    title: "Profile Info",
    route: "/",
    breadcrumb: ["Profile Info"],
    icon: "fas fa-id-badge",
  },
  {
    name: "Error",
    title: "Error",
    route: "/error",
    breadcrumb: ["Error"],
    hide: true,
  },
  {
    name: "Users",
    title: "Users",
    route: "/users",
    breadcrumb: ["Users"],
    icon: "fas fa-users",
  },
  {
    name: "Tree",
    title: "Tree",
    route: "/tree",
    breadcrumb: ["Tree"],
    icon: "fas fa-stream",
  },
  {
    name: "List",
    title: "List",
    route: "/list",
    breadcrumb: ["List"],
    icon: "fas fa-list-ul",
  },
  {
    name: "Locale",
    title: "Locale editor",
    route: "/localeEditor",
    breadcrumb: ["Locale editor"],
    icon: "fas fa-language",
  },


];

export const Urls = Routes.reduce((acc, x) => {
  acc[x.name] = x.route;
  return acc;
}, {});

export function fillParams(route, params) {
  return Object.keys(params).reduce(
    (acc, key) => acc.replace(`:${key}`, params[key]),
    route
  );
}

export function routeToRegex(route) {
  return "^" + route.replace(/\/:\w+(\??)/, "/?([\\w-d]+)$1") + "$";
}

export function getRoute(name){
  return Routes.find((o) => o.name === name).route;
}

export default {
  [Urls.ComponentsDetail]: Components,
  [Urls.UserProfileInfo]: Route1,
  [Urls.Users]: Users,
  [Urls.Tree]: Tree,
  [Urls.List]: List,
  [Urls.Error]: Error,
  [Urls.Locale]: LocaleEditor,
  [Urls.Components]: Components,
  // The catch-all route must always be last
  "*": NotFound,
};
