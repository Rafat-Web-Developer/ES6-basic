const friends = ['jubairAhmedJunjun', 'fahim', 'sayem', 'NuratJahan', 'MuniaRahman'];

const outputUsingMap = friends.map(friend => friend.length);
console.log("------Using Map(Return an array)-------");
console.log(outputUsingMap);

const outputUsingFilter = friends.filter(friend => friend.length > 5);
console.log("------Using Filter(Return an array)-------");  
console.log(outputUsingFilter);

const outputUsingFind = friends.find(friend => friend.length > 5);
console.log("------Using Find(Return a property)-------");  
console.log(outputUsingFind);