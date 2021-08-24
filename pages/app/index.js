import React, { useEffect, useState } from "react";
import { LeftSideBar, PlayGround } from "../../components";
// pages/index.js
import { useUser } from "@auth0/nextjs-auth0";
import queryString from "query-string";
import { supabase } from "../../components/supabaseClient";

const app = (props) => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const { user, error, isLoading } = useUser();

  const appProps = {
    showLeftBar,
    setShowLeftBar,
  };

  const userProps = {
    user,
    error,
    isLoading,
  };

  useEffect(async () => {
    let id = queryString.parse(window.location.search).edit;

    if (id) {
      let { data, error } = await supabase
        .from("home")
        .select("*")
        .eq("id", id)
        .single();

      props.setData(data.data);
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex bg-[#F7F7FC]">
      <LeftSideBar {...appProps} {...props} {...userProps} />
      <PlayGround {...appProps} {...props} {...userProps} />
    </div>
  );
};

export default app;
