import { useEffect, useState } from "react";

const useMatchesMediaQuery = (matches: boolean) => {
  const [mobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    if (matches) {
      return setIsMobileView(true);
    }

    setIsMobileView(false);
  }, [matches]);

  return {
    mobileView,
  };
};

export default useMatchesMediaQuery;
