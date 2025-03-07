import React from "react"
import { Tag } from "../ui/primitives/Tag/Tag"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Tag,
  "https://www.figma.com/design/PxA2x3qTLJjlSZ2TfExZFS?node-id=56%3A8830",
  {
    props: {
      label: figma.string("Label"),
      removable: figma.boolean("Removable"),
      scheme: figma.enum("Scheme", {
        Brand: "brand",
        Neutral: "neutral",
        Positive: "positive",
        Danger: "danger",
        Warning: "warning",
      }),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
      }),
    },
    example: (props) => <Tag />,
  },
)
