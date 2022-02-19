// //--normal use of template string--//
const info = {
    fname : "Rafat",
    lname : "Hossain",
    phone : '01876903613',
    email : 'rafat.webdeveloper@gmail.com'
};
const string = `Asslamualaikom. My name is ${info.fname} ${info.lname}. And my mobile number is ${info.phone}. My email address is ${info.email}.`;
console.log(string);


// //--using template sting in DOM--//

// const friends = ['Fahim', 'Jubair', 'Sayem', 'Rubab', 'Mamun'];
// const length = friends.length;
// const root = document.getElementById('root');
// const div = document.createElement('div');
// div.innerHTML = `<h1>You have ${length} friends.</h1><p>All friends are ${friends[0]}, ${friends[1]}, ${friends[2]}, ${friends[3]}, ${friends[4]}.</p>
// `;
// root.appendChild(div);
