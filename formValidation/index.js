const btn = document.querySelector('#submit')

const userForm = {
  fname: '',
  lname: '',
  email: '',
  subject: ''
}

const sendData = async (userForm) => {
  const data = await userForm
  console.log(data);
}

const validation = (fname, lname, email, subject) => {
  let v = 0;
  if (/^[a-zA-Z]+$/.test(fname) && fname.length >= 4) {
    console.log('Valid first name')
    userForm.fname = fname
    v += 1
  }

  if (/^[a-zA-Z]+$/.test(lname) && lname.length >= 4) {
    console.log('Valid last name')
    userForm.lname = lname
    v += 1
  }

  if (/\S+@\S+\.\S+/.test(email)) {
    console.log('Valid email')
    userForm.email = email
    v += 1
  }

  if (subject.length > 10) {
    console.log('Valid subject')
    userForm.subject = subject
    v += 1
  }

  if (v == 4) {
    sendData(userForm)
    alert('Succes in your ')
  } else {
    alert("Error try again")
    for (const obj in userForm) {
      userForm[obj] = null
    }
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault()

  const firstName = document.querySelector('#name').value
  const lastName = document.querySelector('#surname').value
  const email = document.querySelector('#email').value
  const subject = document.querySelector('#subject').value

  let toggle = true

  if (firstName.length == 0 || lastName.length == 0 || email.length == 0 || subject.length == 0) {
    console.log("can't be emtpy")
    toggle = false
  }

  console.log(toggle);
  if (toggle) {
    validation(firstName, lastName, email, subject)
  }
})