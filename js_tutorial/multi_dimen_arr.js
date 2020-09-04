// Create complex multi-dimensional arrays
let nestedArray = [ // top, or first level - the outer most array
    ['deep1'], // an array within an array, 2 levels of depth
    [
      ['deeper2'], ['deeper2'] // 2 arrays nested 3 levels deep
    ],
    [
      [
        ['deepest4'], ['deepest4'] // 2 arrays nested 4 levels deep
      ],
      [
        [
          ['deepest-est?'] // an array nested 5 levels deep
        ]
      ]
    ]
  ];
  console.log(nestedArray[2][0][0]);
