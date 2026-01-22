"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CaseStudyTicker.module.css";

export function CaseStudyTicker({
  as: _Component = _Builtin.Section,
  tickerImage1 = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
  tickerImage2 = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
  tickerImage3 = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
  tickerImage4 = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
  tickerImage5 = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
  tickerImage6 = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
  imageVisibility1 = true,
  imageVisibility2 = true,
  imageVisibility3 = true,
  imageVisibility4 = false,
  imageVisibility5 = false,
  imageVisibility6 = false,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_case_study-ticker")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-section-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-full")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "case_studies-ticker-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "case_studies-ticker-element")}
              tag="div"
            >
              {imageVisibility1 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage1}
                />
              ) : null}
              {imageVisibility2 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage2}
                />
              ) : null}
              {imageVisibility3 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage3}
                />
              ) : null}
              {imageVisibility4 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage4}
                />
              ) : null}
              {imageVisibility5 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage5}
                />
              ) : null}
              {imageVisibility6 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage6}
                />
              ) : null}
              {imageVisibility1 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage1}
                />
              ) : null}
              {imageVisibility2 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage2}
                />
              ) : null}
              {imageVisibility3 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage3}
                />
              ) : null}
              {imageVisibility4 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage4}
                />
              ) : null}
              {imageVisibility5 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage5}
                />
              ) : null}
              {imageVisibility6 ? (
                <_Builtin.Image
                  className={_utils.cx(_styles, "case_study-ticker-image")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt=""
                  src={tickerImage6}
                />
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
