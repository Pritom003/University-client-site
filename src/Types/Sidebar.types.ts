import { ReactNode } from "react";
export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;}
export type TUserPaths = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPaths[];

  };
  export type TRoute = {
    path: string;
    element: ReactNode;
  };
  export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;