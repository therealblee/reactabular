If you want to override the default elements, pass a React component through the `components` prop. It should render `children` like this:

```code
lang: jsx
---
const wrapper = ({ children }) => (
  <div className="table">
    {children}
  </div>
);

...

<Table.Provider components={{ table: wrapper }} ...>
  <Table.Body />
</Table.Provider>
```

The defaults are as follows:

```code
lang: js
---
{
  components: {
    table: 'table',
    header: {
      wrapper: 'thead',
      row: 'tr',
      cell: 'th'
    },
    body: {
      wrapper: 'tbody',
      row: 'tr',
      cell: 'td'
    }
  }
};
```

## See Also

* [Fixed Width Columns](/examples/fixed-width-columns)