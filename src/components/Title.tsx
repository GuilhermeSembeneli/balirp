import React from "react";
import {TitleProps} from '../interface/index'

export default function Title({ title} : TitleProps) {
  React.useEffect(() => {
    document.title = `Bali RP | ${title}`;
  }, [title]);

  return null;
}
