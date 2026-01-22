"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Accordion.module.css";

export function Accordion({
  as: _Component = _Builtin.Block,
  accordionVisibility = true,
  faqQuestion = "What does Brandemic do?",
  faqAnswer = "We build brands!",
}) {
  return accordionVisibility ? (
    <_Component className={_utils.cx(_styles, "accordion")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion_toggle", "link-hover-ix")}
        tag="div"
      >
        <_Builtin.Paragraph className={_utils.cx(_styles, "faq_text")}>
          {faqQuestion}
        </_Builtin.Paragraph>
        <_Builtin.DOM
          className={_utils.cx(_styles, "plus_icon")}
          tag="svg"
          slot=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          fill="none"
        >
          <_Builtin.DOM
            tag="path"
            slot=""
            d="M11.5 11.5V5.5H13.5V11.5H19.5V13.5H13.5V19.5H11.5V13.5H5.5V11.5H11.5Z"
            fill="currentColor"
          />
        </_Builtin.DOM>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion_panel")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "faqs_wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "faq-panel-text")}
            tag="div"
          >
            {faqAnswer}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
