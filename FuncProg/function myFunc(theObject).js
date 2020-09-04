
function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); // Подумайте над этим: дайте мне функцию,
                          // который передай 3
  console.log(fn_inside)
  
  result = fn_inside(5); // возвращает 8
  console.log(result)

  result0 = fn_inside(8); // возвращает 8
  console.log(result0)

  result1 = outside(4)(5); // возвращает 8
  console.log(result1)

  try1 = outside(8)(8); // возвращает 8
  console.log(try1)
