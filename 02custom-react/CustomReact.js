const root = document.querySelector("#root");

const element = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Link to Google.com",
};

const customRender = (element, root) => {
  const dom = document.createElement(element.type);
  dom.innerHTML = element.children;
  for (const prop in element.props) {
    dom.setAttribute(prop, element.props[prop]);
  }

  root.appendChild(dom);
};

customRender(element, root);
