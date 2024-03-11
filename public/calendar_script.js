function generateCalendar(year) {
    const calendarDiv = document.getElementById('calendar');
  
    for (let month = 0; month < 3; month++) {
      const monthDiv = document.createElement('div');
      monthDiv.classList.add('month');
  
      const date = new Date(year, month, 1);
      const monthName = date.toLocaleString('default', { month: 'long' });
  
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      const table = document.createElement('table');
      const headerRow = table.createTHead().insertRow();
      headerRow.innerHTML = `<th colspan="7">${monthName} ${year}</th>`;
  
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const headerRow2 = table.createTHead().insertRow();
      daysOfWeek.forEach(day => {
        headerRow2.innerHTML += `<th>${day}</th>`;
      });
  
      let currentDay = 1;
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
  
      for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
  
        for (let j = 0; j < 7; j++) {
          const cell = row.insertCell();
          if ((i === 0 && j < firstDayOfMonth) || currentDay > daysInMonth) {
            cell.textContent = '';
          } else {
            cell.textContent = currentDay;
            currentDay++;
          }
        }
  
        if (currentDay > daysInMonth) break;
      }
  
      monthDiv.appendChild(table);
      calendarDiv.appendChild(monthDiv);
    }
  }
  
  // Utilizare: Apelăm funcția generateCalendar() cu anul dorit ca argument
  generateCalendar(2024);
  