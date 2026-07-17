interface SaveButtonProps {
  onClick: () => void;
}

export default function SaveButton({
  onClick,
}: SaveButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-medium text-white"
    >
      Save Profile
    </button>
  );
}