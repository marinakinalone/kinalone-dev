import React from 'react'
import BolderText from '../components/ui/BolderText'

const interpolate = (text: string) => {
  const parts = text.split(/({{bold}}|{{\/bold}})/)

  let isBold = false
  const interpolatedText = parts.map((part, index) => {
    if (part === '{{bold}}') {
      isBold = true
      return null
    } else if (part === '{{/bold}}') {
      isBold = false
      return null
    } else {
      return isBold ? <BolderText key={index}>{part}</BolderText> : part
    }
  })

  return <React.Fragment>{interpolatedText}</React.Fragment>
}

export default interpolate
