const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
  const {yesterday: yesterday, today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  // change code above this line
  
  console.log(yesterday) // should be not defined
  console.log(highToday); // should be 77
  console.log(highTomorrow); // should be 80
  
// example 2
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // change code below this line
    
  const {today: {low:lowToday, high:highToday}}=LOCAL_FORECAST;
  // change code above this line
  
  console.log(lowToday); // should be 64
  console.log(highToday); // should be 77
  