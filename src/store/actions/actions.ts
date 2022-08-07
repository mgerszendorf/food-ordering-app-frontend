export const TOGGLE_MENU = "TOGGLE_MENU";

export type ActionTypes = { type: typeof TOGGLE_MENU };

export const toggleMenu = (state: boolean): ActionTypes => ({
  type: TOGGLE_MENU,
});
