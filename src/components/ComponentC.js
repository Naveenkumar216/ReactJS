import React from "react";
import ComponentE from "./ComponentE";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function Componentc() {
  return (
    <div>
      <UserContext.Provider value={"Naveen"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default Componentc;
