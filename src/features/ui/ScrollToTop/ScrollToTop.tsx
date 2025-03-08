import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { hash } = useLocation();

  useEffect(() => {
	window.scrollTo(0, 0); // Прокручиваем страницу вверх
  }, [hash]); // Срабатывает при изменении хеша

  return null;
};

export default ScrollToTop;
