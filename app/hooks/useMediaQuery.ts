import { useCallback, useEffect, useState } from "react";

function useMediaQuery(querySize: string, fromMinWidth?: boolean): boolean {
  const query = fromMinWidth
    ? `(min-width: ${querySize})`
    : `(max-width: ${querySize})`;

  const getMatches = (matchesQuery: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(matchesQuery).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = useCallback(() => {
    return setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [handleChange, query]);

  return matches;
}

export default useMediaQuery;
