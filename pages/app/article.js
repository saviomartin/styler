import React, { useEffect, useState } from "react";

// components
import { LeftSideBar, PlayGround } from "../../components";

// query functions of URL with queryString.parse
import queryString from "query-string";

// auth0
import { useUser } from "@auth0/nextjs-auth0";

// supabase
import { supabase } from "../../components/supabaseClient";

const article = (props) => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const { user, error, isLoading } = useUser(); // getting users from auth0 server

  let iframeSrc = "/demo/article";

  const appProps = {
    showLeftBar,
    setShowLeftBar,
  };

  const moreProps = {
    user,
    error,
    isLoading,
    iframeSrc,
  };

  useEffect(async () => {
    let id = queryString.parse(window.location.search).edit;

    if (id) {
      let { data, error } = await supabase
        .from("article")
        .select("*")
        .eq("id", id)
        .single();

      // getting single row with id

      props.setData(data.data); // using templates
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex bg-[#F7F7FC]">
      <LeftSideBar {...appProps} {...props} {...moreProps} />
      <PlayGround {...appProps} {...props} {...moreProps} />
    </div>
  );
};

export default article;
