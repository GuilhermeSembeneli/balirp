import React from "react";
import {TitleProps} from '../interface/types'

export default function Title({ title} : TitleProps) {
  React.useEffect(() => {
    document.title = `Bali RP | ${title}`;
  }, [title]);

  return null;
}
