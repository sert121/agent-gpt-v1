import React from "react";
import { FaListAlt } from "react-icons/fa";
import FadeIn from "./motions/FadeIn";
import Expand from "./motions/expand";

type TaskWindowProps = {
  tasks: string[];
};
export const TaskWindow = ({ tasks }: TaskWindowProps) => {
  return (
        <></>
  );
};

const Task = ({ task }: { task: string }) => {
  return (
    <FadeIn delay={1}>
      <div className="w-full rounded-md border-2 border-white/20 p-2 text-sm text-white hover:border-white/40">
        {task}
      </div>
    </FadeIn>
  );
};
