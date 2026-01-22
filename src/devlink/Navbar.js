"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5320a293-3be4-0349-545b-72567cd6388c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5320a293-3be4-0349-545b-72567cd6388c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-3-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1737550800773},"e-93":{"id":"e-93","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2e142100-1522-ac90-13c5-798abb8142c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2e142100-1522-ac90-13c5-798abb8142c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":94},{"continuousParameterGroupId":"a-8-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":10}],"createdOn":1738667811301},"e-95":{"id":"e-95","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8f63faa6-006b-044a-2a46-a483ba5e8d3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8f63faa6-006b-044a-2a46-a483ba5e8d3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-3-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1739877583564}},"actionLists":{"a-3":{"id":"a-3","title":"Button [Follow Hover]","continuousParameterGroups":[{"id":"a-3-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"useEventTarget":true,"id":"6784bd18b70916c654145efe|259fcb31-3cb3-7d3e-675e-7cfc44ec46e6"},"xValue":-8,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":50,"actionItems":[{"id":"a-3-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6784bd18b70916c654145efe|259fcb31-3cb3-7d3e-675e-7cfc44ec46e6"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"useEventTarget":true,"id":"6784bd18b70916c654145efe|259fcb31-3cb3-7d3e-675e-7cfc44ec46e6"},"xValue":8,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-3-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"useEventTarget":true,"id":"6784bd18b70916c654145efe|259fcb31-3cb3-7d3e-675e-7cfc44ec46e6"},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":50,"actionItems":[{"id":"a-3-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6784bd18b70916c654145efe|259fcb31-3cb3-7d3e-675e-7cfc44ec46e6"},"xValue":null,"yValue":0,"xUnit":"%","yUnit":"px","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"useEventTarget":true,"id":"6784bd18b70916c654145efe|259fcb31-3cb3-7d3e-675e-7cfc44ec46e6"},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1737538255606},"a-8":{"id":"a-8","title":"Menu Gradient [Move Hover]","continuousParameterGroups":[{"id":"a-8-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega_menu-gradient","selectorGuids":["cfb7b39e-f921-e605-7aa4-42365dd9fe2c"]},"xValue":-120,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":94,"actionItems":[{"id":"a-8-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega_menu-gradient","selectorGuids":["cfb7b39e-f921-e605-7aa4-42365dd9fe2c"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega_menu-gradient","selectorGuids":["cfb7b39e-f921-e605-7aa4-42365dd9fe2c"]},"xValue":12,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-8-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega_menu-gradient","selectorGuids":["cfb7b39e-f921-e605-7aa4-42365dd9fe2c"]},"yValue":-12,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":10,"actionItems":[{"id":"a-8-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega_menu-gradient","selectorGuids":["cfb7b39e-f921-e605-7aa4-42365dd9fe2c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega_menu-gradient","selectorGuids":["cfb7b39e-f921-e605-7aa4-42365dd9fe2c"]},"yValue":120,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1738667816183}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav_fixed")}
      tag="div"
      config={{
        animation: "default",
        collapse: "none",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "nav_component")}
        data-w-id="a76f66de-dec7-94d9-bbfb-48940b6762e6"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_container")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "nav_brand", "link-hover-ix")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "nav_logo")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Brandemic Logo"
                src="https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/6790d03ad14b554072b3ca57_brandemic-logo.png"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "nav_menu")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "button",
                  "is-fill",
                  "mobile-hidden"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_8f63faa6-006b-044a-2a46-a483ba5e8d3a-63dfdea9"
                )}
                data-w-id="8f63faa6-006b-044a-2a46-a483ba5e8d3a"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "button__flair")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "button__label")}
                  tag="div"
                >
                  {"Get In Touch"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "hamburger_link",
                  "link-hover-ix"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "hamburger")}
                  tag="div"
                  id="hamburger"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "line")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "nav_button")}
              tag="div"
            >
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "mega_menu")}
        data-w-id="2e142100-1522-ac90-13c5-798abb8142c6"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "mega_menu-gradient")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "padding-global",
            "padding-section-medium",
            "is-mobile-menu"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large", "is-mobile-menu")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "mega_menu-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nav_link-wrapper")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link-block")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.DOM
                    className={_utils.cx(_styles, "nav_arrow-icon")}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 27 24"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807613 14.9792 0.807613 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM-1.31134e-07 13.5L25 13.5L25 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    {"About"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav_image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Brandemic Team "
                    src="https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/6792291e05f3bb882b7a5bb7_Team%20image%201.webp"
                  />
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "",
                    "nav_link-block-services",
                    "link-hover-ix"
                  )}
                  tag="div"
                >
                  <_Builtin.DOM
                    className={_utils.cx(_styles, "nav_arrow-icon")}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 27 24"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807613 14.9792 0.807613 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM-1.31134e-07 13.5L25 13.5L25 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    {"Services"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "sub_nav-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "sub_nav-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Branding"}</_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "sub_nav-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"Packaging"}</_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "sub_nav-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"UI/UX"}</_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "sub_nav-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"Web Development"}
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "sub_nav-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">{"SEO"}</_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link-block")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.DOM
                    className={_utils.cx(_styles, "nav_arrow-icon")}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 27 24"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807613 14.9792 0.807613 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM-1.31134e-07 13.5L25 13.5L25 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    {"Portfolio"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav_image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Chinlung Project"
                    src="https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/6791fdc6c7ee4f881dbd9753_Chinlung%20thumbnail.webp"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link-block")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.DOM
                    className={_utils.cx(_styles, "nav_arrow-icon")}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 27 24"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807613 14.9792 0.807613 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM-1.31134e-07 13.5L25 13.5L25 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    {"Blogs"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav_image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Marketing illustration"
                    src="https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/695a7cd6fc71a1c3ef4a048d_blog.webp"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav_link-block")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.DOM
                    className={_utils.cx(_styles, "nav_arrow-icon")}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 27 24"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807613 14.9792 0.807613 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM-1.31134e-07 13.5L25 13.5L25 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link")}
                    tag="div"
                  >
                    {"Contact"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav_image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Brandemic Team"
                    src="https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/67fccb5de710e9b50acf67dd_Team%20image%202.webp"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "mega_menu-cta")}
                tag="div"
              >
                <_Builtin.FormWrapper
                  className={_utils.cx(_styles, "header_newsletter")}
                >
                  <_Builtin.FormForm
                    name="wf-form-Newsletter-Header"
                    data-name="Newsletter Header"
                    method="get"
                    id="wf-form-Newsletter-Header"
                  >
                    <_Builtin.FormBlockLabel
                      className={_utils.cx(_styles, "newsletter_label")}
                      htmlFor="email-3"
                    >
                      {"STAY UP TO DATE"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "newsletter_form-wrapper")}
                      tag="div"
                    >
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "newsletter_form-field")}
                        name="Email-Header"
                        maxLength={256}
                        data-name="Email Header"
                        placeholder="Subscribe With Email"
                        disabled={false}
                        type="email"
                        required={true}
                        autoFocus={false}
                        id="Email-Header"
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
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "social_links-wrapper",
                    "is-mega-menu"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_2e142100-1522-ac90-13c5-798abb8142e0-63dfdea9"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-bd4f39b0-27b5-4961-36d6-0e7917e00755-63dfdea9"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://dotme.bio/brandemic",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.DOM
                      className={_utils.cx(
                        _styles,
                        "social_link-icon",
                        "is-mega-menu"
                      )}
                      tag="svg"
                      slot=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 687 692"
                      fill="none"
                    >
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M539.942 104.743C525.003 94.5258 507.381 87.9746 489.393 87.9746C482.929 87.9746 476.405 88.816 469.941 90.6792C445.49 97.1703 421.831 117.665 405.002 148.738C385.123 182.756 384.148 223.566 398.355 251.634C412.075 279.702 440.307 295.629 475.307 295.629C476.1 295.629 476.832 295.629 477.624 295.629C528.6 295.389 568.967 251.273 577.808 212.327C586.04 175.845 570.491 126.5 540.003 104.803L539.942 104.743Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M577.812 212.301C569.275 249.985 531.165 292.538 482.506 295.423C487.994 291.817 495.128 286.528 502.445 279.195C506.896 274.748 518.116 262.847 526.043 246.56C544.824 207.914 533.116 168.787 531.958 165C528.726 154.663 520.189 128.939 494.152 111.028C479.579 100.991 465.189 97.3248 456.347 95.7622C460.859 93.5985 465.372 91.9156 469.945 90.6534C494.396 83.7416 519.58 90.8337 539.946 104.717C570.495 126.414 586.044 175.759 577.751 212.241L577.812 212.301Z"
                        fill="white"
                        fill-opacity="0.56"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M380.736 260.364C362.748 224.964 365.553 177.483 387.748 139.318C398.785 118.943 412.565 102.415 428.053 90.4544C402.26 39.3672 343.662 17.3095 233.539 11.6599L3.23174 0L0 383.635L230.978 361.457C324.028 352.502 380.553 333.509 411.833 296.426C398.602 287.29 387.87 275.09 380.736 260.364ZM225.551 241.192L217.136 241.612L217.929 131.985H226.344C253.905 131.985 261.527 143.825 261.222 185.777C260.917 227.729 253.112 239.93 225.551 241.192Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M684.946 161.506L685.311 74.0569L650.982 72.8549L651.104 43.4046L550.493 38.2959L550.249 88.2411C550.249 88.2411 550.859 88.6619 551.164 88.8422L551.347 88.9624L551.53 89.0826C587.445 114.626 607.445 170.642 597.079 216.62C591.957 239.038 578.908 261.877 560.249 279.908C573.176 305.512 598.481 314.107 639.884 309.96C656.47 308.337 666.897 305.452 684.336 298.3L684.824 193.361C677.628 197.207 670.982 198.95 664.519 199.191C653.787 199.551 650.433 195.644 650.433 184.946L650.555 162.107L684.946 161.506Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M327.288 648.168L211.128 636.07V499.605L202.495 499.718L185.876 633.47L100.429 624.595L86.5697 500.905H79.6401V622.39L3.2373 614.476V403.56L127.737 389.879L135.019 508.989H142.712L150.229 387.392L327.347 367.889V648.168H327.288Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M686.49 482.896C686.49 499.965 684.082 523.413 681.028 531.859L495.058 529.732C497.467 548.219 514.853 554.361 560.67 555.601C597.911 556.665 626.165 553.83 665.462 545.856L671.394 689.673C628.397 693.334 582.756 692.685 534.59 687.133C395.084 671.127 344.861 623.759 344.861 523.649C344.861 423.539 390.561 381.014 506.043 369.969C625.049 358.57 686.432 393.712 686.432 482.778L686.49 482.896ZM493.59 492.937L534.59 492.405C534.061 461.397 529.597 452.833 513.796 453.483C498.348 454.074 494.06 462.756 493.59 492.937Z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-f7ec79f5-7472-a7ba-a2f6-c741935203cf-63dfdea9"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.instagram.com/brandemic_design/",
                    }}
                  >
                    <_Builtin.DOM
                      className={_utils.cx(
                        _styles,
                        "social_link-icon",
                        "is-mega-menu"
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-_2e142100-1522-ac90-13c5-798abb8142e1-63dfdea9"
                      )}
                      tag="svg"
                      slot=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M10.1404 1.88202C12.7494 1.88202 13.0557 1.89393 14.0869 1.94156C15.0405 1.98522 15.5561 2.14795 15.9011 2.28687C16.3586 2.46944 16.6842 2.68377 17.0254 3.03305C17.3665 3.38232 17.5797 3.71572 17.7542 4.18407C17.886 4.53731 18.0488 5.06519 18.0915 6.04158C18.138 7.09734 18.1496 7.4109 18.1496 10.0821C18.1496 12.7532 18.138 13.0668 18.0915 14.1225C18.0488 15.0989 17.8899 15.6268 17.7542 15.9801C17.5759 16.4484 17.3665 16.7818 17.0254 17.1311C16.6842 17.4804 16.3586 17.6987 15.9011 17.8773C15.5561 18.0122 15.0405 18.1789 14.0869 18.2226C13.0557 18.2702 12.7494 18.2821 10.1404 18.2821C7.53137 18.2821 7.22511 18.2702 6.19391 18.2226C5.24024 18.1789 4.72465 18.0162 4.37962 17.8773C3.92217 17.6947 3.59653 17.4804 3.25538 17.1311C2.91423 16.7818 2.70101 16.4484 2.52656 15.9801C2.39475 15.6268 2.23193 15.0989 2.18929 14.1225C2.14277 13.0668 2.13114 12.7532 2.13114 10.0821C2.13114 7.4109 2.14277 7.09734 2.18929 6.04158C2.23193 5.06519 2.39088 4.53731 2.52656 4.18407C2.70489 3.71572 2.91423 3.38232 3.25538 3.03305C3.59653 2.68377 3.92217 2.46547 4.37962 2.28687C4.72465 2.15192 5.24024 1.98522 6.19391 1.94156C7.22511 1.88996 7.53524 1.88202 10.1404 1.88202ZM10.1404 0.0800781C7.48872 0.0800781 7.15533 0.0919852 6.1125 0.139614C5.07355 0.187242 4.36411 0.357911 3.74384 0.603992C3.10031 0.85801 2.55758 1.20332 2.01484 1.75898C1.4721 2.31465 1.13871 2.87428 0.886723 3.52918C0.646368 4.16422 0.479671 4.89056 0.43315 5.95823C0.38663 7.02193 0.375 7.36327 0.375 10.0781C0.375 12.7929 0.38663 13.1343 0.43315 14.2019C0.479671 15.2656 0.646368 15.992 0.886723 16.631C1.13483 17.2898 1.4721 17.8455 2.01484 18.4012C2.55758 18.9568 3.10419 19.2982 3.74384 19.5562C4.36411 19.8022 5.07355 19.9729 6.11638 20.0205C7.15921 20.0682 7.48872 20.0801 10.1443 20.0801C12.7998 20.0801 13.1293 20.0682 14.1721 20.0205C15.2111 19.9729 15.9205 19.8022 16.5447 19.5562C17.1882 19.3021 17.7309 18.9568 18.2737 18.4012C18.8164 17.8455 19.1498 17.2859 19.4018 16.631C19.6421 15.9959 19.8088 15.2696 19.8554 14.2019C19.9019 13.1343 19.9135 12.7969 19.9135 10.0781C19.9135 7.3593 19.9019 7.02193 19.8554 5.95426C19.8088 4.89056 19.6421 4.16422 19.4018 3.52521C19.1537 2.86635 18.8164 2.31068 18.2737 1.75501C17.7309 1.19935 17.1843 0.85801 16.5447 0.600023C15.9244 0.353942 15.215 0.183273 14.1721 0.135645C13.1254 0.0919852 12.792 0.0800781 10.1404 0.0800781Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M10.1414 4.94629C7.37348 4.94629 5.125 7.24436 5.125 10.0822C5.125 12.9201 7.3696 15.2182 10.1414 15.2182C12.9133 15.2182 15.1579 12.9201 15.1579 10.0822C15.1579 7.24436 12.9133 4.94629 10.1414 4.94629ZM10.1414 13.4123C8.34265 13.4123 6.88502 11.9199 6.88502 10.0783C6.88502 8.23662 8.34265 6.74426 10.1414 6.74426C11.9402 6.74426 13.3978 8.23662 13.3978 10.0783C13.3978 11.9199 11.9402 13.4123 10.1414 13.4123Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M15.3583 5.93832C16.0049 5.93832 16.529 5.40166 16.529 4.73967C16.529 4.07767 16.0049 3.54102 15.3583 3.54102C14.7117 3.54102 14.1875 4.07767 14.1875 4.73967C14.1875 5.40166 14.7117 5.93832 15.3583 5.93832Z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_3fdb6126-7175-cc9a-9d09-826ba89354d1-63dfdea9"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.linkedin.com/company/brandemi-design/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.DOM
                      className={_utils.cx(
                        _styles,
                        "social_link-icon",
                        "is-mega-menu"
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-_2e142100-1522-ac90-13c5-798abb8142e5-63dfdea9"
                      )}
                      tag="svg"
                      slot=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M3.38396 2.56288H0.671875V0.0800781H3.38396V2.56288ZM0.671875 3.79013H3.38396V14.0801H0.671875V3.79013Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M11.6516 3.54468C12.7089 3.54468 13.5723 3.82474 14.2417 4.38487C14.9174 4.9387 15.2552 5.8607 15.2552 7.15088V14.0801H12.515V7.82114C12.515 7.2799 12.443 6.86452 12.2991 6.57502C12.0364 6.04636 11.5359 5.78203 10.7976 5.78203C9.89047 5.78203 9.26797 6.16909 8.93013 6.94319C8.75496 7.35227 8.66737 7.87464 8.66737 8.51029V14.0801H6.00221V3.80901H8.58291V5.31002C8.92701 4.78136 9.25233 4.4006 9.55889 4.16774C10.1094 3.75236 10.807 3.54468 11.6516 3.54468Z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-e9a47eba-e7f3-037e-9dd2-135512a220db-63dfdea9"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.youtube.com/@Brandemic_Design",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.DOM
                      className={_utils.cx(
                        _styles,
                        "social_link-icon",
                        "is-mega-menu"
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-_2e142100-1522-ac90-13c5-798abb8142e8-63dfdea9"
                      )}
                      tag="svg"
                      slot=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <_Builtin.DOM
                        tag="g"
                        slot=""
                        clip-path="url(#clip0_30_580)"
                      >
                        <_Builtin.DOM
                          tag="path"
                          slot=""
                          d="M19.962 5.27117C19.7299 4.4145 19.0502 3.73905 18.1881 3.50841C16.6131 3.08008 10.3132 3.08008 10.3132 3.08008C10.3132 3.08008 4.01336 3.08008 2.43838 3.49194C1.59287 3.72258 0.896568 4.4145 0.664467 5.27117C0.25 6.83624 0.25 10.0817 0.25 10.0817C0.25 10.0817 0.25 13.3436 0.664467 14.8922C0.896568 15.7489 1.57629 16.4243 2.43838 16.655C4.02993 17.0833 10.3132 17.0833 10.3132 17.0833C10.3132 17.0833 16.6131 17.0833 18.1881 16.6715C19.0502 16.4408 19.7299 15.7654 19.962 14.9087C20.3765 13.3436 20.3765 10.0982 20.3765 10.0982C20.3765 10.0982 20.3931 6.83624 19.962 5.27117Z"
                          fill="currentColor"
                        />
                        <_Builtin.DOM
                          className={_utils.cx(_styles, "youtube_play-button")}
                          tag="path"
                          slot=""
                          d="M8.3125 13.0807L13.5514 10.0823L8.3125 7.08398V13.0807Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                    </_Builtin.DOM>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_7c38db93-2403-0ea0-b5dd-982701a5d9aa-63dfdea9"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://x.com/brandemicglobal",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.DOM
                      className={_utils.cx(
                        _styles,
                        "social_link-icon",
                        "is-mega-menu"
                      )}
                      tag="svg"
                      slot=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_93d3b07a-80fe-cd41-86d0-c80086217ea5-63dfdea9"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.facebook.com/brandemic.design#",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.DOM
                      className={_utils.cx(
                        _styles,
                        "social_link-icon",
                        "is-mega-menu"
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-_2e142100-1522-ac90-13c5-798abb8142ee-63dfdea9"
                      )}
                      tag="svg"
                      slot=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <_Builtin.DOM
                        tag="g"
                        slot=""
                        clip-path="url(#clip0_30_584)"
                      >
                        <_Builtin.DOM
                          tag="path"
                          slot=""
                          d="M14.5601 11.1869L15.0817 7.77425H11.8192V5.56066C11.8192 4.6268 12.2741 3.716 13.7353 3.716H15.2195V0.810661C15.2195 0.810661 13.8732 0.580078 12.5865 0.580078C9.8984 0.580078 8.14307 2.21491 8.14307 5.17328V7.77425H5.15625V11.1869H8.14307V19.4371C8.74273 19.5317 9.35618 19.5801 9.98111 19.5801C10.6061 19.5801 11.2195 19.5317 11.8192 19.4371V11.1869H14.5601Z"
                          fill="currentColor"
                        />
                      </_Builtin.DOM>
                    </_Builtin.DOM>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_40b6029d-2e94-8956-cf5f-75abb50c5484-63dfdea9"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.behance.net/brandemic",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.DOM
                      className={_utils.cx(
                        _styles,
                        "social_link-icon",
                        "is-mega-menu"
                      )}
                      id={_utils.cx(
                        _styles,
                        "w-node-_2e142100-1522-ac90-13c5-798abb8142f1-63dfdea9"
                      )}
                      tag="svg"
                      slot=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 15"
                      fill="none"
                    >
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M3.70955 2.45359V5.46683H7.142C7.75517 5.46683 8.25138 5.35557 8.63066 5.13306C9.01626 4.90436 9.20906 4.50259 9.20906 3.92776C9.20906 3.29112 8.95621 2.87081 8.4505 2.66683C8.01434 2.52467 7.45807 2.45359 6.78169 2.45359H3.70955ZM3.70955 7.72908V11.3728H7.142C7.75517 11.3728 8.23242 11.2924 8.57377 11.1317C9.19325 10.835 9.503 10.2664 9.503 9.42577C9.503 8.71496 9.20273 8.22666 8.60221 7.96087C8.26719 7.81253 7.79625 7.73527 7.18941 7.72908H3.70955ZM7.71092 0.0800781C9.42398 0.104802 10.6377 0.590012 11.352 1.53571C11.7818 2.11672 11.9967 2.81209 11.9967 3.6218C11.9967 4.45624 11.7818 5.12688 11.352 5.63372C11.1118 5.91805 10.7578 6.17765 10.29 6.41253C11.0043 6.66595 11.5416 7.06772 11.9019 7.61783C12.2685 8.16794 12.4519 8.83549 12.4519 9.62047C12.4519 10.4302 12.2433 11.1565 11.8261 11.7993C11.5606 12.2258 11.2287 12.5843 10.8305 12.8748C10.3817 13.2086 9.85067 13.4373 9.2375 13.5609C8.63066 13.6845 7.97009 13.7463 7.25578 13.7463H0.921875V0.0800781H7.71092Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        slot=""
                        d="M18.7668 5.55028C18.141 5.55028 17.6543 5.74189 17.3066 6.12511C16.9653 6.50833 16.7503 7.02754 16.6618 7.68273H20.8623C20.8181 6.98427 20.6 6.4558 20.2081 6.0973C19.8225 5.73262 19.342 5.55028 18.7668 5.55028ZM18.7668 3.37147C19.6265 3.37147 20.4009 3.52908 21.0899 3.84432C21.7789 4.15955 22.3478 4.65712 22.7966 5.33703C23.2012 5.93659 23.4635 6.63195 23.5836 7.42312C23.6532 7.8867 23.6816 8.55425 23.669 9.42577H16.5955C16.6334 10.4395 16.9589 11.1503 17.5721 11.5582C17.945 11.8116 18.3939 11.9384 18.9185 11.9384C19.4748 11.9384 19.9268 11.7838 20.2744 11.4748C20.4641 11.3079 20.6316 11.0761 20.777 10.7794H23.5362C23.4667 11.379 23.1475 11.9878 22.5785 12.6059C21.6936 13.5887 20.4546 14.0801 18.8616 14.0801C17.5468 14.0801 16.3869 13.6659 15.3818 12.8377C14.3767 12.0094 13.8742 10.662 13.8742 8.79531C13.8742 7.04608 14.3261 5.7048 15.2301 4.77147C16.1403 3.83814 17.3192 3.37147 18.7668 3.37147Z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
