function sumElect() {
    const electricity = document.getElementById("electricity").value;
    if (electricity <= 50) {
        document.getElementById("title").innerHTML = `Tổng số tiền phải trả là:${electricity * 1.678}VND thuộc TT bậc 1`
    } else if ( electricity > 51 && electricity <= 100) {
        document.getElementById("title").innerHTML = `Tổng số tiền phải trả là:${electricity * 1.734}VND thuộc TT bậc 2`
    } else if ( electricity > 101 && electricity <= 200) {
        document.getElementById("title").innerHTML = `Tổng số tiền phải trả là:${electricity * 2.014}VND thuộc TT bậc 3`
    } else if (electricity > 201 && electricity <= 300) {
        document.getElementById("title").innerHTML = `Tổng số tiền phải trả là:${electricity * 2.536}VND thuộc TT bậc 4`
    } else if (electricity > 301 && electricity <= 400) {
        document.getElementById("title").innerHTML = `Tổng số tiền phải trả là:${electricity * 2.834}VND thuộc TT bậc 5`
    } else {
        document.getElementById("title").innerHTML = `Tổng số tiền phải trả là:${electricity * 2.927}VND thuộc TT bậc 6`
    }
}