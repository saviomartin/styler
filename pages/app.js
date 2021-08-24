import React, { useEffect, useState } from "react";

// components
import { LeftSideBar, PlayGround } from "../../components";

// auth0
import { useUser } from "@auth0/nextjs-auth0";

// query functions of URL with queryString.parse
import queryString from "query-string";

// supabase
import { supabase } from "../../components/supabaseClient";

const app = (props) => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const { user, error, isLoading } = useUser(); // getting users from auth0 server

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

      // getting single row with id

      props.setData(data.data); // using templates
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
