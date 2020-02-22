//@flow
import React from "react"
import Styled from "styled-components"
import classnames from "classnames"

type Props = {
  children: any,
  size?: "normal" | "medium" | "small",
  underline: boolean,
  onClick: () => void
}

const StyledButton = Styled.button`
    background: props.theme.color.gray;
    color: white;
    border: none;
    border-radius: 5px; 

    &.normal{
        font-size: 12px;
        padding: 10px;
    }
    &.medum{
        font-size: 15px;
        padding: 15px;
    }
    &.underline{
        background: white;
        border: props.theme.color.gray;
        color: props.theme.color.gray;
    }

`

const Button = ({ size, children, underline, onClick }: Props) => {
  const btnClass = classnames({
    // normal: size === "normal",
    // medium: size === "medium",
    // small: size === "small",
    [size]: size,
    // 'underline': underline
    underline
  })
  return (
    <StyledButton onClick={onClick} className={btnClass}>
      {children}
    </StyledButton>
  )
}

Button.dafaultProps = {
  size: "normal",
  underline: false
}

export default Button
