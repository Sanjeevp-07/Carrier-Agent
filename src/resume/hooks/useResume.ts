import { useProfile } from "../../context/ProfileContext";

export const useResume = () => {
  const { profile, setProfile } = useProfile();

  const setResume = (resume: typeof profile.resume) => {
    setProfile((prev) => ({
      ...prev,
      resume,
    }));
  };

  return {
    resume: profile.resume,
    setResume,
  };
};