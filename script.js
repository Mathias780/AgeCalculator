//Get element

//each input number
const dayOfBirth = document.getElementById('day')
const monthOfBirth = document.getElementById('month')
const yearOfBirth = document.getElementById('year')


//worng input message
const badDayInput = document.getElementById('wrongDay')
const badMonthInput = document.getElementById('wrongMonth')
const badYearInput = document.getElementById('wrongYear')

//label 
const dayLabel = document.querySelector('label[for="day"]');
const monthLabel = document.querySelector('label[for="month"]');
const yearLabel = document.querySelector('label[for="year"]');

//submit button 
const BtnSubmitForm = document.getElementById('submitBirthInformation')


//Age span
const spanYear = document.getElementById('yearAge')
const spanMonth = document.getElementById('monthsAge')
const spanDay = document.getElementById('daysAge')

BtnSubmitForm.addEventListener('click', (event) => {
    event.preventDefault()

    const day = parseInt(dayOfBirth.value, 10);
    const month = parseInt(monthOfBirth.value, 10) -1;
    const year = parseInt(yearOfBirth.value, 10);

    if (!isValidDate(day, month, year)) {
        if (!isValidDay(day)) {
          badDayInput.classList.remove('hideparagraphe')
          dayLabel.style.color = 'hsl(0, 100%, 67%)';
          dayOfBirth.classList.add('inputError')
        } else {
          badDayInput.classList.add('hideparagraphe')
          dayLabel.classList.remove('inputError')
          dayLabel.style.color = 'hsl(0, 1%, 44%)';
          
        }
    
        if (!isValidMonth(month)) {
          badMonthInput.classList.remove('hideparagraphe')
          monthLabel.style.color = "hsl(0, 100%, 67%)"
          monthOfBirth.classList.add('inputError')
        } 
    
        if (!isValidYear(year)) {
          badYearInput.classList.remove('hideparagraphe')
          yearLabel.style.color = "hsl(0, 100%, 67%)"
          yearOfBirth.classList.add('inputError')
        } 
    
        return;
      } else {
        badYearInput.classList.add('hideparagraphe')
        yearLabel.style.color = 'hsl(0, 1%, 44%)';
        yearLabel.classList.remove('inputError')
        badMonthInput.classList.add('hideparagraphe')
        monthLabel.style.color = 'hsl(0, 1%, 44%)';
        monthLabel.classList.remove('inputError')
        badDayInput.classList.add('hideparagraphe')
        dayLabel.classList.remove('inputError')
        dayLabel.style.color = 'hsl(0, 1%, 44%)';
        
      }

      const birthDate = new Date(year, month, day)
      const age = calculateAge(birthDate)

      spanYear.textContent = age.years
      spanMonth.textContent = age.months
      spanDay.textContent = age.days
})

 function calculateAge(birthDate) {
    const today = new Date()
    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDate() - birthDate.getDate()

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0 ) {
        years -= 1;
        months += 12;
    }

    return { years, months, days};

 }

  function isValidDate(day, month, year) {
    const date = new Date(year, month, day)
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;

  }

  function isValidDay(day) {
    return day >= 1 && day <= 31;
  }

  function isValidMonth(month) {
    return month >= 0 && month <= 11
  }

  function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return year <= currentYear;
  }

