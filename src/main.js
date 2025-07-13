const element = {
  type: 'div',
  props: {
    id: 'app',
    style: 'background-color: red;width: 100px;height: 100px',
  },
}

const div = document.createElement(element.type)

Object.keys(element.props).forEach(name => (div[name] = element.props[name]))

const textElement = {
  type: 'TEXT_ELEMENT',
  props: {
    nodeValue: 'Hello, world!',
  },
}

const text = document.createTextNode(textElement.props.nodeValue)
Object.keys(textElement.props).forEach(name => (text[name] = textElement.props[name]))

div.appendChild(text)

const root = document.getElementById('root')
root.append(div)
