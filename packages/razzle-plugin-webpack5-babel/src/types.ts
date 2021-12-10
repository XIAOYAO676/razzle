import {
  Webpack5DefinePluginDefines,
  Webpack5OptionsInt,
  Webpack5RazzleConfigInt,
  Webpack5RazzleContextInt,
  Webpack5RazzlePathNames,
  Webpack5RazzlePluginInt,
} from "razzle-plugin-webpack5/types";

export interface Webpack5BabelRazzleContextInt<T extends string>
  extends Webpack5RazzleContextInt<T> {}

export interface Webpack5BabelOptionsInt<T extends string>
  extends Webpack5OptionsInt<T> {}

export interface Webpack5BabelPluginOptions {}

export type Webpack5BabelRazzlePathNames = Webpack5RazzlePathNames;

export type Webpack5BabelRazzleContext =
  Webpack5BabelRazzleContextInt<Webpack5BabelRazzlePathNames>;

export type Webpack5BabelDefinePluginDefines = Webpack5DefinePluginDefines;

export type Webpack5BabelOptions =
  Webpack5BabelOptionsInt<Webpack5BabelDefinePluginDefines>;

export type Webpack5BabelConfig = Webpack5RazzleConfigInt<
  Webpack5BabelConfig,
  Webpack5BabelRazzleContext,
  Webpack5BabelOptions
>;

export type Webpack5BabelRazzlePlugin = Webpack5RazzlePluginInt<
  Webpack5BabelPluginOptions,
  Webpack5BabelConfig,
  Webpack5BabelRazzleContext,
  Webpack5BabelOptions
>;