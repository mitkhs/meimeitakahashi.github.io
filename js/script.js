const Eventbutton = document.querySelector(".celebration")

const Birthdayalert = function() {
    alert("おめでとう！")
}

Eventbutton.addEventListener("click", Birthdayalert)

document.querySelector(".lucky").addEventListener("click", function() {
    alert("大吉です！！！！")
})