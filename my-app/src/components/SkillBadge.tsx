import { JSX } from "react";

// components/SkillBadge.tsx
export default function SkillBadge({
  name,
  icon,
}: {
  name: string;
  icon?: JSX.Element;
}) {
  return (
    <span className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
      {icon} {name}
    </span>
  );
}
