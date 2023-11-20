import React, { useState, useEffect } from "react";
import { LoaderContent } from "./Loader.styled";

export const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return showLoader ? <LoaderContent /> : null;
};
