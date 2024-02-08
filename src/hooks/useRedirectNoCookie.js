import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useRedirectNoCookies = (cookie) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie) {
      navigate("/login");
    }
  }, [cookie, navigate]);
};

export default useRedirectNoCookies;
