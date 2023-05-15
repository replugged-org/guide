import React from "react";

interface QuickLinkProps {
  name: string;
  url: string;
}

export default (props: QuickLinkProps): JSX.Element => <a href={props.url}>{props.name}</a>;
