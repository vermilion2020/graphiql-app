import { Component, Locales, translates } from "../model/transaltes";

export const getTexts = (locale: Locales, component: Component) => {
  return translates.get(locale)![component];
};