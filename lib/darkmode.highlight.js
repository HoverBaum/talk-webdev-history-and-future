const theme = {
  plain: {
    color: '#eee',
    backgroundColor: '#1e1e1e',
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: 'rgb(0, 0, 128)',
      },
    },
    {
      types: ['comment', 'punctuation'],
      style: {
        color: '#19b989',
      },
    },
    {
      types: ['builtin', 'tag', 'changed', 'keyword', 'operator'],
      style: {
        color: 'rgb(86, 156, 214)',
      },
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: 'rgb(181, 206, 168)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(100, 102, 149)',
      },
    },
    {
      types: ['attr-name', 'variable'],
      style: {
        color: 'rgb(156, 220, 254)',
      },
    },
    {
      types: ['deleted', 'string'],
      style: {
        color: 'rgb(206, 145, 120)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(220, 220, 170)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(78, 201, 176)',
      },
    },
    {
      types: ['char'],
      style: {
        color: 'rgb(209, 105, 105)',
      },
    },
  ],
}

export default theme
