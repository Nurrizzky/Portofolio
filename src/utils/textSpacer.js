export default function textSpacer(text) {
   return text.split("").map(char => char === " " ? "\u00A0" : char);
}