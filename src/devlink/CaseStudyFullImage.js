"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CaseStudyFullImage.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-324":{"id":"e-324","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-325"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5343e5c5-7b1c-f491-28bf-8f8712895134","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5343e5c5-7b1c-f491-28bf-8f8712895134","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1767558409878}},"actionLists":{"a-12":{"id":"a-12","title":"Image [Fade-In]","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6799d0c43846b6c6b4c3d995|95853f5d-9b89-aa9c-d381-7b26524f395d"},"yValue":80,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-12-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6799d0c43846b6c6b4c3d995|95853f5d-9b89-aa9c-d381-7b26524f395d"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":800,"target":{"useEventTarget":true,"id":"6799d0c43846b6c6b4c3d995|95853f5d-9b89-aa9c-d381-7b26524f395d"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-12-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":800,"target":{"useEventTarget":true,"id":"6799d0c43846b6c6b4c3d995|95853f5d-9b89-aa9c-d381-7b26524f395d"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1746536379402}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CaseStudyFullImage({
  as: _Component = _Builtin.Image,
  fullHeightImage = "https://cdn.prod.website-files.com/6784bd18b70916c654145eaa/69576a0269e9daf9f2292d12_Placeholder.png",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "case_study-image",
        "is-full-height",
        "image-reveal"
      )}
      id={_utils.cx(
        _styles,
        "w-node-_5343e5c5-7b1c-f491-28bf-8f8712895134-12895134"
      )}
      data-w-id="5343e5c5-7b1c-f491-28bf-8f8712895134"
      loading="lazy"
      width="auto"
      height="auto"
      alt=""
      src={fullHeightImage}
    />
  );
}
