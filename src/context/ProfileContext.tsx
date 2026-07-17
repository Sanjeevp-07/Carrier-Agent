import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { Profile } from "../types/profile";
import { defaultProfile } from "../data/defaultProfile";
import { loadProfile } from "../services/profileStorage";

interface ProfileContextType {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

export function ProfileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [profile, setProfile] = useState(
  loadProfile() ?? defaultProfile
);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfile must be used inside ProfileProvider");
  }

  return context;
}