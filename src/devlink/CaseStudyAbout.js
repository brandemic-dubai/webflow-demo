"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CaseStudyAbout.module.css";

export function CaseStudyAbout({
  as: _Component = _Builtin.Section,
  aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  service1 = "Service1",
  service2 = "Service2",
  service3 = "Service3",
  service3Visibility = true,
  service2Visibility = true,
  service1Visibility = true,
  service4 = "Service4",
  service5 = "Service5",
  service4Visibility = true,
  service5Visibility = true,
  industry1 = "Industry1",
  industry1Visibility = true,
  industry2 = "Industry2",
  industry2Visibility = true,
  industry3 = "Industry3",
  industry3Visibility = true,
  industry4 = "Industry4",
  industry4Visibility = true,
  industry5 = "Industry5",
  industry5Visibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_case_study-about")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "case_study-info-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "case_study-about-wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "text-color-secondary")}
                tag="h4"
              >
                {"ABOUT"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "case_study-about-line")}
                tag="div"
              />
              <_Builtin.Paragraph>{aboutText}</_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "case_study-tags-wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "opacity-40")}
                tag="h4"
              >
                {"SERVICE"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "case_study-tags")}
                tag="div"
              >
                {service1Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {service1}
                  </_Builtin.Paragraph>
                ) : null}
                {service2Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {service2}
                  </_Builtin.Paragraph>
                ) : null}
                {service3Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {service3}
                  </_Builtin.Paragraph>
                ) : null}
                {service4Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {service4}
                  </_Builtin.Paragraph>
                ) : null}
                {service5Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {service5}
                  </_Builtin.Paragraph>
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "case_study-tags-wrapper")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "opacity-40")}
                tag="h4"
              >
                {"INDUSTRY"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "case_study-tags")}
                tag="div"
              >
                {industry1Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {industry1}
                  </_Builtin.Paragraph>
                ) : null}
                {industry2Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {industry2}
                  </_Builtin.Paragraph>
                ) : null}
                {industry3Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {industry3}
                  </_Builtin.Paragraph>
                ) : null}
                {industry4Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {industry4}
                  </_Builtin.Paragraph>
                ) : null}
                {industry5Visibility ? (
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-large",
                      "text-weight-medium"
                    )}
                  >
                    {industry5}
                  </_Builtin.Paragraph>
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
