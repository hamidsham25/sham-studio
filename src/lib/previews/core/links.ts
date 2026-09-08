/** Klickbare Links aus den Kontaktdaten der Config. */

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailHref(email: string) {
  return `mailto:${email}`;
}

/** wa.me erwartet die Nummer nur aus Ziffern, inkl. Ländervorwahl. */
export function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}
