'use strict';

fetch('./people.json')
  .then((response) => response.json())
  .then((people) => {
    const table = document.querySelector('.dashboard');

    people.forEach((person) => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');

      nameCell.textContent = person.name;

      const genderCell = document.createElement('td');

      genderCell.textContent = person.sex === 'm' ? 'Male' : 'Female';

      const bornCell = document.createElement('td');

      bornCell.textContent = person.born;

      const diedCell = document.createElement('td');

      diedCell.textContent = person.died;

      const ageCell = document.createElement('td');

      ageCell.textContent = person.died - person.born;

      const centuryCell = document.createElement('td');

      centuryCell.textContent = Math.ceil(person.died / 100);

      row.append(
        nameCell,
        genderCell,
        bornCell,
        diedCell,
        ageCell,
        centuryCell,
      );

      table.append(row);
    });
  });
