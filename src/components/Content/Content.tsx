import "./Content.css";
import { FC, useEffect, useState } from "react";
import classNames from "classnames";

type Props = {};

export const Content: FC<Props> = ({}) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleNetworkChange() {
      setIsOnline(navigator.onLine);
    }
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);
    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  return (
    <div className={classNames("wrapper", { online: isOnline, offline: !isOnline })}>
      <span className="circle"></span>
      <div className="string">{isOnline ? "Online" : "Offline"}</div>
    </div>
  );
};
