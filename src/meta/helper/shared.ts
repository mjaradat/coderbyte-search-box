const sanitizeHTML = (unsafeText: string) => {
  const div = document.createElement('div')
  div.innerText = unsafeText
  return div.innerHTML
}

export { sanitizeHTML }
