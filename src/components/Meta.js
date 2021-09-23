import React from "react";
import { Helmet } from "react-helmet";

function Meta({ title = "" }) {
  return (
    <Helmet>
      <title>News - {title[0].toUpperCase() + title.slice(1)}</title>
      <meta name="author" content="Moniruzzaman Saikat" />
      <meta name="description" content="This is a demo website which consumes newsapi.org api's " />
    </Helmet>
  );
}

export default Meta;
