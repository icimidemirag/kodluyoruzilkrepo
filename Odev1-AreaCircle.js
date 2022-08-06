function areaCircle(r){
    const result = 3.14 * r ** 2
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${result}`)
}

areaCircle(process.argv.slice(2))
