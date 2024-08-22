import React from "react";
import RingLoader from "react-spinners/RingLoader";
const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center space-x-2 bg-white dark:invert">
      <RingLoader />
    </div>
  );
};

export default Loading;
