export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "El campo de correo no puede estar vacío."
    if (!re.test(email)) return 'Ooops! Necesitamos un correo válido.'
    return ''
  }