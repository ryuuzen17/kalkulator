const hasil = document.getElementById('hasil')
let tampung = ''
let tampung2 = ''
//angka
const angka = document.querySelectorAll('.angka')

//operator
const operator = document.querySelectorAll('.operator')

angka.forEach(m => {
    m.addEventListener('click', function () {
        container(m.value)
    })
})
operator.forEach(m => {
    m.addEventListener('click', function () {
        container(m.value)
    })
})
function container(m) {
    tampung += m
    tampung2 = tampung
    hasil.innerHTML = tampung
    const samaDengan = document.getElementById('samaDengan')
    const reset = document.getElementById('reset')
    samaDengan.addEventListener('click', function () {
        try {
            let cek = eval(tampung2)
            if (isNaN(cek)) {
                hasil.innerHTML = 'NaN,silakan coba lagi!'
                setTimeout(() => {
                    hasil.innerHTML = 0
                    tampung = ''
                }, 2000)
            } else {
                hasil.innerHTML = cek
                tampung = ''
            }
        } catch (error) {
            hasil.innerHTML = 'Error,silakan coba lagi!'
            setTimeout(() => {
                hasil.innerHTML = 0
                tampung = ''
            }, 2000)
        }
    })
    reset.addEventListener('click', function () {
        hasil.innerHTML = 0
        tampung = ''
    })
}