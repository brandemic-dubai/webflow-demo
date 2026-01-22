"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CaseStudyHero.module.css";

export function CaseStudyHero({
  as: _Component = _Builtin.Section,
  portfolioTitle = "Title",
  portfolioSlogan = "Slogan of the portfolio",
  caseStudyImage = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_case_study-hero")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-large"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-xlarge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "case_study-hero-header")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "hero-timeline-1")}
              tag="h1"
            >
              {portfolioTitle}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "hero-timeline-2")}
            >
              {portfolioSlogan}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "container-xlarge",
            "is-case_study-hero"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "case_study-hero-image",
              "parallax-image-container",
              "hero-timeline-3"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "parallax-image")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src={caseStudyImage}
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
