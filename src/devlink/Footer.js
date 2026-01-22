"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SocialLinks } from "./SocialLinks";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-small",
          "is-footer"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer_top-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer_main-content-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_sitemap-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "footer_brandemic-logo")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Brandemic Logo"
                  src="https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/6790d03ad14b554072b3ca57_brandemic-logo.png"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_sitemap")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer_link",
                      "link--animated"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"About Us"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer_link",
                      "link--animated"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Portfolio"}</_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer_link",
                      "link--animated"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_sitemap")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer_link",
                      "is-policy-link",
                      "link--animated"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Privacy Policy"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer_link",
                      "is-policy-link",
                      "link--animated"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Terms of Use"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.FormWrapper
                className={_utils.cx(_styles, "footer_newsletter")}
              >
                <_Builtin.FormForm
                  name="wf-form-Newsletter-Footer"
                  data-name="Newsletter Footer"
                  method="get"
                  id="wf-form-Newsletter-Footer"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "newsletter_label")}
                    htmlFor="email-2"
                  >
                    {"STAY UP TO DATE"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "newsletter_form-wrapper")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "newsletter_form-field")}
                      name="Email"
                      maxLength={256}
                      data-name="Email"
                      placeholder="Subscribe With Email"
                      disabled={false}
                      type="email"
                      required={true}
                      autoFocus={false}
                      id="Email"
                    />
                    <_Builtin.FormButton
                      className={_utils.cx(
                        _styles,
                        "newsletter_button",
                        "link-hover-ix"
                      )}
                      type="submit"
                    />
                  </_Builtin.Block>
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage>
                  <_Builtin.Block tag="div">
                    {"Thank you! Your submission has been received!"}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage>
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer_limitless")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_cta-wrapper")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer_link",
                    "is-mail",
                    "link--animated"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "mailto:info@brandemic.ae",
                  }}
                >
                  {"info@brandemic.ae"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer_link",
                    "is-mail",
                    "link--animated"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"CONNECT TODAY"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "think-limitless")}
                tag="div"
              >
                {"THINK LIMITLESS"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global", "is-footer-bottom")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer_bottom-wrapper")}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-size-small",
                "text-weight-normal"
              )}
            >
              {"© "}
              <_Builtin.Span className={_utils.cx(_styles, "copy_year")}>
                {"year"}
              </_Builtin.Span>
              {" Brandemic. All rights reserved."}
            </_Builtin.Paragraph>
            <_Builtin.Block className={_utils.cx(_styles, "made_by")} tag="div">
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "text-weight-medium")}
              >
                {"Made with passion by"}
              </_Builtin.Paragraph>
              <_Builtin.Image
                className={_utils.cx(_styles, "brandemic_logo")}
                id={_utils.cx(
                  _styles,
                  "w-node-_251afda7-b296-c88c-0698-20302f4963aa-2f49636f"
                )}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Brandemic icon"
                src="https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/6784fe0eec8e1373b9b2bf10_Brandemic%20favicon.svg"
              />
            </_Builtin.Block>
            <SocialLinks />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
