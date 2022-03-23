const data = [
   {
      id: 0,
      text: "First todo",
      tags: ["Work", "Urgent"],
   },
   {
      id: 1,
      text: "Second todo",
      tags: ["Home"],
   },
   {
      id: 2,
      text: "Third todo",
      tags: [],
   },
];
// CRUD - create, read, update, delete, query
function createTodo(newTodo, data) {
   const newId = data[data.length - 1].id + 1;
   data.push({ ...newTodo, id: newId });
   return newId;
}
function readTodo(searchId, data) {
   const item = data.find((todo) => todo.id === searchId);
   if (!item) {
      throw 'не найдено элемента по переданному идентификатору';
   }
   return item;
}
function deleteTodo(todoId, data) {
   const itemIndex = data.findIndex((todo) => todo.id === todoId);
   if (itemIndex === -1) {
      throw 'не найдено элемента по переданному идентификатору';
   }
   data.splice(itemIndex, 1);
   return true;
}
function updateTodo(todoId, newData, data) {
   const element = readTodo(todoId, data);
   for (const key in newData) {
      if (newData.hasOwnProperty(key) && element.hasOwnProperty(key)) {
         element[key] = newData[key];
      }
   }
}
function searchByText(searchString, data) {
   const lowerCasedSearch = searchString.toLowerCase();

   return data.filter((item) => item.text.toLowerCase().includes(lowerCasedSearch))
}
const newId = createTodo({ id: null, text: 'new todo', tags: [] }, data);
updateTodo(newId, { text: 'old', newKey: 'SQL INJECTION ALARM' }, data);
// deleteTodo(0, data);
console.log(searchByText('first', data));