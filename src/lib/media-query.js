import { useMediaQuery } from "react-responsive";

export const DesktopLarge = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1824 });
  return isDesktop ? children : null;
};

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1823 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 376, maxWidth: 767 });
  return isMobile ? children : null;
};

export const MobileSmall = ({ children }) => {
  const isMobileSmall = useMediaQuery({ maxWidth: 375 });
  return isMobileSmall ? children : null;
};
