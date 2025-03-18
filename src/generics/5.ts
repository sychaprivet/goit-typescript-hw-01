export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type BasicRole = Record<UserRole, string>;

const RoleDescription: BasicRole = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
