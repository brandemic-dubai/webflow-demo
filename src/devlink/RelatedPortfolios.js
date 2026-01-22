"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RelatedPortfolios.module.css";

export function RelatedPortfolios({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_case_study-related")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "spacer-xhuge")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-xlarge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "case_study-seperator")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "spacer-xhuge")}
            tag="div"
          />
          <_Builtin.Heading tag="h3">{"CHECK OUT MORE"}</_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.Block
        className={_utils.cx(_styles, "spacer-xxhuge")}
        tag="div"
      />
    </_Component>
  );
}
