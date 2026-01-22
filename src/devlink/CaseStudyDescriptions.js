"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CaseStudyDescriptions.module.css";

export function CaseStudyDescriptions({
  as: _Component = _Builtin.Block,
  caseStudyDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "case_study-texts-description")}
      tag="div"
    >
      <_Builtin.Paragraph>{caseStudyDescription}</_Builtin.Paragraph>
    </_Component>
  );
}
