import React from "react"
import { IconCalendar } from "../ui/icons/IconCalendar"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  IconCalendar,
  "https://www.figma.com/design/PxA2x3qTLJjlSZ2TfExZFS?node-id=4039%3A13056",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
        "16": "16",
      }),
    },
    example: (props) => <IconCalendar />,
  },
)
