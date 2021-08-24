import React, { useEffect, useState } from "react";
import { LeftSideBar, PlayGround } from "../../components";
import queryString from "query-string";
// pages/index.js
import { useUser } from "@auth0/nextjs-auth0";
import { supabase } from "../../components/supabaseClient";

const article = (props) => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const { user, error, isLoading } = useUser();
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

      props.setData(data.data);
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
