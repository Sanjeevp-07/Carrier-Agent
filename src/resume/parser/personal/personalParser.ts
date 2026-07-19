import { parseEmail } from "./emailParser";
import { parsePhone } from "./phoneParser";
import { parseLinks } from "./linkParser";
import { parseName } from "./nameParser";

export function parsePersonal(text: string) {
  const links = parseLinks(text);

  return {
    fullName: parseName(text),

    email: parseEmail(text),

    phone: parsePhone(text),

    location: "",

    headline: "",

    ...links,
  };
}