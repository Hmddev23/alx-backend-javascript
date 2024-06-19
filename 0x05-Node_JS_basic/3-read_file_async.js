const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const nbr_lines = data.split('\n');
        const store = {};
        let students = -1;
        for (const line of nbr_lines) {
          if (line.trim() !== '') {
            const cols = line.split(',');
            const field = cols[3];
            const firstName = cols[0];
            if (students >= 0) {
              if (!Object.hasOwnProperty.call(store, field)) {
                store[field] = [];
              }
              store[field] = [...store[field], firstName];
            }
            students += 1;
          }
        }
        console.log(`Number of students: ${students}`);
        for (const key in store) {
          if (Object.hasOwnProperty.call(store, key)) {
            console.log(`Number of students in ${key}: ${store[key].length}. List: ${store[key].join(', ')}`);
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
