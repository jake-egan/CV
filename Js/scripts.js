function getBirthday(Birthdate) {
    const birthday = new Date(Birthdate);
    const diff = Date.now() - birthday.getTime();
    const age = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    return age;
}


const Birthdate = '2003-02-03';
const age = getBirthday(Birthdate);

document.getElementById('age').textContent = `DOB: ${Birthdate} | Age: ${age}`;
$('.carousel').carousel()

