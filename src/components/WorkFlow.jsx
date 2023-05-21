import React from "react";
import { SectionWrapper } from "../hoc";
import { workFlow } from "../constants";

const WorkFlow = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {workFlow.map((technology) => (
        <a
          href={technology?.link}
          target="_blank"
          // className="w-28 h-28"
          key={technology.name}
        >
          <img
            src={technology?.icon}
            alt={technology?.name}
            className="w-9 h-9 object-contain rounded-full"
          />
        </a>
      ))}
    </div>
  );
};

export default SectionWrapper(WorkFlow, "");
