function substitui(frase, dict) {
  let result = ''

  for (const letra of frase) {
    if (letra in dict) {
      result += dict[letra]
    } else {
      result += letra
    }
  }
  return result
}
