import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const PageLoader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   
    setIsLoading(true);

   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading ? <Loading /> : null;
};

export default PageLoader;