import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        let output = 'This is the list of our students\n';
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            output += `Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}\n`;
          }
        }
        return res.status(200).send(output);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (!['CS', 'SWE'].includes(req.params.major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(process.argv[2])
      .then((data) => {
        if (!data[req.params.major]) {
          return res.status(500).send('Cannot load the database');
        }
        return res.status(200).send(`List: ${data[req.params.major].join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
