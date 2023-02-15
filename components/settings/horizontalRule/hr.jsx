import React from 'react'

export const Hr = (props) => {
  const { color, style, width, marginTop, marginBottom } = props
  return (
    <hr
      className={`horizontal_rule`}
      style={{
        borderTopColor: color ? color : '',
        borderTopWidth: width ? width : '',
        borderTopStyle: style ? style : '',
        marginTop: marginTop ? marginTop : '',
        marginBottom: marginBottom ? marginBottom : '',
      }}

      // className="horizontal_rule"
    ></hr>
  )
}
