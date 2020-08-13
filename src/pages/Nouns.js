import React, { useEffect } from "react";

import Title from "../components/global/title";
import Categories from "../components/nouns/categories";

export default function Learn() {
  useEffect(() => {
    document.title = "Yumiru | Nouns";
  }, []);
  return (
    <>
      <Title />
      <Categories />
    </>
  );
}
