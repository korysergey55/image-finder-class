const BASE_URL = 'http://localhost:3033';
​
// ********************* READ  ********************* //
​
const getUsers = () => {
  return fetch(`${BASE_URL}/users`).then(res => res.json());
};
​
// getUsers()
//   .then(console.log)
//   .catch(err => console.log(err));
​
//////////////////
​
//file 1
const getUserById = userId => {
  return fetch(`${BASE_URL}/users/${userId}`).then(res => res.json());
};
​
//file 2
const userToFindId = 5;
​
// getUserById(userToFindId).then(console.log);
​
// ********************* CREATE  ********************* //
​
const saveUser = user => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
​
  const url = `${BASE_URL}/users`;
​
  return fetch(url, options).then(res => res.json());
};
​
const user = {
  first_name: 'John',
  last_name: 'Guff',
  email: 'guff3@lines.com',
  icon: 'https://robohash.org/corruptilaboresint.png?size=30x30&set=set1',
};
​
// saveUser(user).then(user => console.log(user));
​
// ********************* UPDATE  ********************* //
​
// PATCH
const editUser = (id, dataToUpdate) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(dataToUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}/users/${id}`;
​
  return fetch(url, options).then(res => res.json());
};
​
// const update = {
//   email: 'aaa@aaa.aa',
//   last_name: 'Sinatra',
// };
// const userId = 2;
​
// editUser(userId, update).then(console.log);
​
// PUT
const replaceUser = (id, dataToUpdate) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(dataToUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}/users/${id}`;
​
  return fetch(url, options).then(res => res.json());
};
​
// const update = {
//   first_name: 'Ret',
//   last_name: 'Guff',
//   email: 'guff3@lines.com',
//   icon: 'https://robohash.org/corruptilaboresint.png?size=30x30&set=set1',
// };
// // const update = {
// //   first_name: 'Jack',
// // };
// const userId = 1;
​
// replaceUser(userId, update).then(console.log);
​
// ********************* DELETE  ********************* //
​
const deleteUser = id => {
  return fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' }).then(res => res.json());
};
​
const userId = 6;
​
getUsers().then(users => {
  const lastUserId = users[users.length - 1].id;
​
  deleteUser(lastUserId).then(getUsers).then(console.log);
});
​
// deleteUser(userId).then(res => console.log(res));
// deleteUser(userId).then(getUsers).then(console.log);
​
export { getUsers, getUserById, saveUser, editUser, replaceUser, deleteUser };