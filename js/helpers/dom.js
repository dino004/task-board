export function createElement(tagName, textContent, className) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  element.classList.add(className);
  return element;
}
