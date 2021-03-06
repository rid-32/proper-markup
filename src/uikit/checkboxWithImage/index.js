import React from 'react'
import cn from 'classnames'

import './styles.scss'

const Checkbox = ({ className, label, onChange, labelProps, viewProps, ...props }) => {
  return (
    <label className={cn("checkboxWithImage", className)} {...labelProps}>
      <input type="checkbox" className="checkboxWithImage__control" onChange={onChange} {...props} />
      <span className="checkboxWithImage__view" {...viewProps} />

      { label }
    </label>
  )
}

Checkbox.defaultProps = {
  onChange: () => {},
  labelProps: {},
  viewProps: {},
}

export default Checkbox
