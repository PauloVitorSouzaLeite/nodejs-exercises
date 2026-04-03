function maior_numero(p_num = 0, s_num = 0) {
    if (p_num == s_num) {
        return "Os números tem o mesmo valor."
    } else if (p_num > s_num) {
        return `Maior número -> ${p_num}`
    } else if (p_num < s_num) {
        return `Maior número -> ${s_num}`
    }
}
let res = maior_numero(3,9)
console.log(res)