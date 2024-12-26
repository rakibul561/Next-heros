import React from "react";

interface IconCloudProps {
  iconSlugs: string[];
}

const IconCloud: React.FC<IconCloudProps> = ({ iconSlugs }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {iconSlugs.map((slug, index) => (
        <div
          key={index}
          className="p-2 bg-gray-200 rounded shadow text-sm font-medium"
        >
          {slug}
        </div>
      ))}
    </div>
  );
};

export default IconCloud;
