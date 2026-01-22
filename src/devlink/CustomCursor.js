"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CustomCursor.module.css";

export function CustomCursor({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "custom-cursor")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "inner-dot")} tag="div" />
    </_Component>
  );
}
