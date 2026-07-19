import { useProfile } from "../../context/ProfileContext";
import { processResume } from "../engine/processor";

export const useResume = () => {
  const { profile, setProfile } = useProfile();

  // Keep this helper for delete/replace operations
  const setResume = (resume: typeof profile.resume) => {
    setProfile((prev) => ({
      ...prev,
      resume,
    }));
  };

  // New: Process uploaded resume
  const uploadResume = async (file: File) => {
    const result = await processResume(file, profile);

    setProfile(result.profile);

    return result;
  };

  return {
    resume: profile.resume,
    setResume,
    uploadResume,
  };
};