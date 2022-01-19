const createInvisibleTextAreaWithValue = value => {
  const $textarea = document.createElement('textarea')
  $textarea.value = value
  $textarea.setAttribute('readonly', '')
  $textarea.style.position = 'absolute'
  $textarea.style.left = '-9999px'
  document.body.appendChild($textarea)
  return $textarea
}

export const copyTextOf = text => {
  const $textarea = createInvisibleTextAreaWithValue(text)
  $textarea.select()
  document.execCommand('copy')
  document.body.removeChild($textarea)
}
