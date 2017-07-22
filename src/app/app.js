const header = [
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    width: 105,
    cellRenderer: SwitchButton
    //this will be a renderer (a statesless component or a function) where you are using this component
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 140,
    cellRenderer: TextRenderer
    //this will be a renderer where you are using this component
  },
  {
    title: 'Age',
    dataIndex: 'age',
    cellRenderer: TextRenderer
    //this will be a renderer where you are using this component
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    cellRenderer: AnotherRenderer
    //this will be a renderer where you are using this component
  },
];
