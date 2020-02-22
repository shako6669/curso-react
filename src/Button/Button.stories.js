//@flow
import React from "react"
import Button from "." //con "." por defecto es ./index

export default {
  title: "Button",
  component: Button
}

export const defaultButton = () => (
  <Button onClick={() => {}}>Click aquí</Button>
)

export const mediumButton = () => (
  <Button onClick={() => {}} className="medium">
    Click aquí
  </Button>
)

export const underlineButton = () => (
  <Button onClick={() => {}} className="medium" underline>
    Click aquí
  </Button>
)
