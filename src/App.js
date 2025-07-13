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

export default element
