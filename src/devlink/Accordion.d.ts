import * as React from "react";
import * as Types from "./types";

declare function Accordion(props: {
  as?: React.ElementType;
  accordionVisibility?: Types.Visibility.VisibilityConditions;
  faqQuestion?: React.ReactNode;
  faqAnswer?: React.ReactNode;
}): React.JSX.Element;
