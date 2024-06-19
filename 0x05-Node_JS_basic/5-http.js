const fs = require('fs').promises;
const http = require('http');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const nbr_lines = data.split('\n');
        const store = {};
        let students = -1;
        let result = '';
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
        result += `Number of students: ${students}\n`;
        for (const key in store) {
          if (Object.hasOwnProperty.call(store, key)) {
            result += `Number of students in ${key}: ${store[key].length}. List: ${store[key].join(', ')}\n`;
          }
        }
        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404);
    res.end('Not foundx');
  }
});

app.listen(1245);

module.exports = app;
