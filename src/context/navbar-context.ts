import {createContext} from "react";

export interface VisibleNavbarPayload {
  [link: string]: boolean
}

export interface NavbarContextProps {
  item: VisibleNavbarPayload
  setItem: (updatedNav: VisibleNavbarPayload) => void
}

export const NavbarContext = createContext<NavbarContextProps>({
  item: {},
  setItem: () => {
  }
});
