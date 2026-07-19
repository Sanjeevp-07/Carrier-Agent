import SectionCard from "../components/profile/SectionCard";
import TextInput from "../components/profile/TextInput";
import TextArea from "../components/profile/TextArea";
import SkillInput from "../components/profile/SkillInput";
import SaveButton from "../components/profile/SaveButton";

import { saveProfile } from "../services/profileStorage";
import { useProfile } from "../context/ProfileContext";

import ResumeUploader from "../resume/components/ResumeUploader";


export default function Profile() {
  const { profile, setProfile } = useProfile();

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Profile
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage your personal information and resume.
        </p>
      </div>

      {/* Resume */}
      <SectionCard
        title="Resume"
        description="Upload your latest resume."
      >
        <div className="max-w-xl">
          <ResumeUploader />
        </div>
      </SectionCard>

      {/* Personal Information */}
      <SectionCard
        title="Personal Information"
        description="Basic details used during job applications."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <TextInput
            label="Full Name"
            value={profile.personal.fullName}
            onChange={(value) =>
              setProfile({
                ...profile,
                personal: {
                  ...profile.personal,
                  fullName: value,
                },
              })
            }
            placeholder="John Doe"
          />

          <TextInput
            label="Email"
            type="email"
            value={profile.personal.email}
            onChange={(value) =>
              setProfile({
                ...profile,
                personal: {
                  ...profile.personal,
                  email: value,
                },
              })
            }
            placeholder="john@example.com"
          />

          <TextInput
            label="Phone"
            value={profile.personal.phone}
            onChange={(value) =>
              setProfile({
                ...profile,
                personal: {
                  ...profile.personal,
                  phone: value,
                },
              })
            }
            placeholder="+91 XXXXX XXXXX"
          />

          <TextInput
            label="Location"
            value={profile.personal.location}
            onChange={(value) =>
              setProfile({
                ...profile,
                personal: {
                  ...profile.personal,
                  location: value,
                },
              })
            }
            placeholder="New Delhi"
          />

        </div>
      </SectionCard>

      {/* Education */}
      <SectionCard
        title="Education"
        description="Your academic information."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <TextInput
            label="College"
            value={profile.education.college}
            onChange={(value) =>
              setProfile({
                ...profile,
                education: {
                  ...profile.education,
                  college: value,
                },
              })
            }
            placeholder="ABC University"
          />

          <TextInput
            label="Degree"
            value={profile.education.degree}
            onChange={(value) =>
              setProfile({
                ...profile,
                education: {
                  ...profile.education,
                  degree: value,
                },
              })
            }
            placeholder="B.Tech Computer Science"
          />

          <TextInput
            label="CGPA"
            value={profile.education.cgpa}
            onChange={(value) =>
              setProfile({
                ...profile,
                education: {
                  ...profile.education,
                  cgpa: value,
                },
              })
            }
            placeholder="8.5"
          />

          <TextInput
            label="Graduation Year"
            value={profile.education.graduationYear}
            onChange={(value) =>
              setProfile({
                ...profile,
                education: {
                  ...profile.education,
                  graduationYear: value,
                },
              })
            }
            placeholder="2027"
          />

        </div>
      </SectionCard>

      {/* Professional */}
      <SectionCard
        title="Professional"
        description="Experience and projects."
      >
        <div className="space-y-5">

          <TextArea
            label="Projects"
            value={profile.professional.projects}
            onChange={(value) =>
              setProfile({
                ...profile,
                professional: {
                  ...profile.professional,
                  projects: value,
                },
              })
            }
            placeholder="Describe your projects..."
          />

          <TextArea
            label="Experience"
            value={profile.professional.experience}
            onChange={(value) =>
              setProfile({
                ...profile,
                professional: {
                  ...profile.professional,
                  experience: value,
                },
              })
            }
            placeholder="Internships or work experience..."
          />

        </div>
      </SectionCard>

      {/* Social Links */}
      <SectionCard
        title="Social Links"
        description="Professional online profiles."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <TextInput
            label="GitHub"
            value={profile.social.github}
            onChange={(value) =>
              setProfile({
                ...profile,
                social: {
                  ...profile.social,
                  github: value,
                },
              })
            }
            placeholder="https://github.com/username"
          />

          <TextInput
            label="LinkedIn"
            value={profile.social.linkedin}
            onChange={(value) =>
              setProfile({
                ...profile,
                social: {
                  ...profile.social,
                  linkedin: value,
                },
              })
            }
            placeholder="https://linkedin.com/in/username"
          />

          <TextInput
            label="Portfolio"
            value={profile.social.portfolio}
            onChange={(value) =>
              setProfile({
                ...profile,
                social: {
                  ...profile.social,
                  portfolio: value,
                },
              })
            }
            placeholder="https://portfolio.com"
          />

          <TextInput
            label="LeetCode"
            value={profile.social.leetcode}
            onChange={(value) =>
              setProfile({
                ...profile,
                social: {
                  ...profile.social,
                  leetcode: value,
                },
              })
            }
            placeholder="https://leetcode.com/u/username"
          />

        </div>
      </SectionCard>

      {/* Skills */}
      <SectionCard
        title="Skills"
        description="Skills used for AI-powered job matching."
      >
        <SkillInput
          skills={profile.skills}
          onChange={(skills) =>
            setProfile({
              ...profile,
              skills,
            })
          }
        />
      </SectionCard>

      

      {/* Save */}
      <div className="flex justify-end gap-3">
        <SaveButton
          onClick={() => {
            saveProfile(profile);
            console.log("Profile Saved");
            console.log(profile);
          }}
        />
      </div>

    </div>
  );
}