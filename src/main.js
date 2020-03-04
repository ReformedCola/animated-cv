let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/* Hello, my name is Jason.
 * Now I will show my frontend skills.
 * First, let me make a div.
 **/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* Now I will change the div into a Bagua Map.
 * Please take a look.
 * First, change the div into a circle.
 **/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* Bagua is made by Yin and Yang,
 * which is black and white.
 **/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* Add Spirit Pearl and Demon Orb */
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ''
let n = 0

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            // if it is newline, then add newline element.
            string2 += '<br>'
        } else if (string[n] === ' ') {
            // if it is space, then add space element.
            string2 += '&nbsp;'
        } else {
            // if it is not newline, then just copy the string.
            string2 += string[n]
        }

        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        // length 55
        if (n < string.length - 1) {
            // n = 53
            // n is not the last character, then continue.
            n += 1; // 54
            step()
        } else {
            // n is the last character, then end.
        }
    }, 50)
}

step()
