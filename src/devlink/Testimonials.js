"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Testimonials.module.css";

export function Testimonials({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "testimonials_wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "testimonials_header-wrapper")}
        tag="div"
      >
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "text-size-medium",
            "text-weight-medium"
          )}
        >
          {"TESTIMONIALS"}
        </_Builtin.Paragraph>
        <_Builtin.Heading
          className={_utils.cx(_styles, "animated-chars")}
          tag="h2"
        >
          {"From Those Who Know Us Best"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "testimonial_swiper-container")}
        tag="div"
      >
        <_Builtin.NotSupported _atom="DynamoWrapper" />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "swiper-navigation-wrapper",
            "is-testimonials"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "swiper_nav-button-2",
              "testimonials-prev",
              "link-hover-ix"
            )}
            tag="div"
          >
            <_Builtin.DOM
              className={_utils.cx(_styles, "featured-works_arrow-icon")}
              tag="svg"
              slot=""
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 21 10"
              fill="none"
            >
              <_Builtin.DOM
                tag="path"
                slot=""
                d="M20.0405 5.58471C20.2836 5.3416 20.2836 4.94746 20.0405 4.70436L16.0789 0.742792C15.8358 0.49969 15.4417 0.49969 15.1986 0.742792C14.9555 0.985893 14.9555 1.38004 15.1986 1.62314L18.7199 5.14453L15.1986 8.66592C14.9555 8.90902 14.9555 9.30317 15.1986 9.54627C15.4417 9.78937 15.8358 9.78937 16.0789 9.54627L20.0405 5.58471ZM0.925293 5.76703H19.6003V4.52203H0.925293V5.76703Z"
                fill="currentColor"
              />
            </_Builtin.DOM>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "swiper_nav-button-2",
              "testimonials-next",
              "link-hover-ix"
            )}
            tag="div"
          >
            <_Builtin.DOM
              className={_utils.cx(_styles, "featured-works_arrow-icon")}
              tag="svg"
              slot=""
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 21 10"
              fill="none"
            >
              <_Builtin.DOM
                tag="path"
                slot=""
                d="M20.0405 5.58471C20.2836 5.3416 20.2836 4.94746 20.0405 4.70436L16.0789 0.742792C15.8358 0.49969 15.4417 0.49969 15.1986 0.742792C14.9555 0.985893 14.9555 1.38004 15.1986 1.62314L18.7199 5.14453L15.1986 8.66592C14.9555 8.90902 14.9555 9.30317 15.1986 9.54627C15.4417 9.78937 15.8358 9.78937 16.0789 9.54627L20.0405 5.58471ZM0.925293 5.76703H19.6003V4.52203H0.925293V5.76703Z"
                fill="currentColor"
              />
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
