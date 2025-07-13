const element = {
  type: 'div',
  props: {
    id: 'app',
    style: 'background-color: red;width: 100px;height: 100px',
    children: [
      {
        type: 'TEXT_ELEMENT',
        props: {
          nodeValue: 'Hello, world!',
          children: [],
        },
      },
    ],
  },
}

// const textElement = {
//   type: 'TEXT_ELEMENT',
//   props: {
//     nodeValue: 'Hello, world!',
//   },
// }

const isProperty = key => key !== 'children'

function render(element, container) {
  const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type)
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => (dom[name] = element.props[name]))
  container.append(dom)
  element.props.children.forEach(child => render(child, dom))
  return dom
}

const root = document.getElementById('root')
render(element, root)
