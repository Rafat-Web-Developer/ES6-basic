const friends = ['Fahim', 'Jubair', 'Sayem', 'Rubab', 'Mamun'];
const length = friends.length;
const root = document.getElementById('root');
const div = document.createElement('div');
div.innerHTML = `<h1>You have ${length} friends.</h1><p>All friends are ${friends[0]}, ${friends[1]}, ${friends[2]}, ${friends[3]}, ${friends[4]}.</p>
`;
root.appendChild(div);
