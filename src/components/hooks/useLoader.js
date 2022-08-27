import React, { useState } from "react";
import PageLoader from "../loader/PageLoader";

const useLoader = () => {
  const [loading, setLoading] = useState(true);

  return [loading ? <PageLoader /> : null, () => setLoading(false)];
};

export default useLoader;
