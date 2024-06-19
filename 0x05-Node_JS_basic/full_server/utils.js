import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) reject(Error('Cannot load the database'));
    else {
      const store = {};
      const nbr_lines = data.split('\n');
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
      resolve(store);
    }
  });
});

export default readDatabase;
