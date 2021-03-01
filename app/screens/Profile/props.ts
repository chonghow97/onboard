// stores props used in rendering component.tsx, passed from index.tsx
import { User } from "graphql";

export interface ProfileProps {
  userData: Pick<User, "avatar" | "email" | "username">;
  onPressEditProfile: () => void;
}
