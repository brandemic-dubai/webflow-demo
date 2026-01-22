"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CaseStudyChallengeList.module.css";

export function CaseStudyChallengeList({
  as: _Component = _Builtin.Block,
  challengeListNumber = "01",
  challengeListText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  challengeListVisibility = true,
}) {
  return challengeListVisibility ? (
    <_Component
      className={_utils.cx(_styles, "case_study-challenge-list")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "challenge_number")}
        tag="div"
      >
        {challengeListNumber}
      </_Builtin.Block>
      <_Builtin.Paragraph className={_utils.cx(_styles, "text-weight-medium")}>
        {challengeListText}
      </_Builtin.Paragraph>
    </_Component>
  ) : null;
}
