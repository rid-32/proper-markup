import React from 'react'
import cn from 'classnames'

import './styles.scss';

const Radio = ({ label, className, ...props }) => {
  return (
    <label className={cn('radio', className)}>
      <input type="radio" className="radio__control" {...props} />
      <span className="radio__view" />

      { label }
    </label>
  )
}

export default Radio
