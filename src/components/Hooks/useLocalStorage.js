import React, { useState } from "react";

function useLocalStorage() {
  const [data, setData] = useState(null);
  const funToManipulate = () => {};
  return [data, funToManipulate];
}

export default useLocalStorage;
