const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrCode = []
    const arrFil = []
    let morse = ''
    let result = ''
  
    for (let i = 0; i < expr.length; i += 10) {
      arrCode.push(expr.slice(i, (i + 10))) 
    }
  
    arrCode.forEach(elem => {
      for (let i = 0; i < elem.length; i += 1) {
        if (elem[i] !== '0') {
          arrFil.push(elem.slice(i))
          break
        }
      }
    })
  
    arrFil.forEach(elem => {
      for (let i = 0; i < elem.length; i += 2) {
        if (elem[i + 1] === '0') {
          morse += '.'
        } else if (elem[i + 1] === '1') {
          morse += '-'
        } else if (elem[i] === '*') {
          morse += '*'
          break
        }
      }
  
      morse += ' '
    })
  
    const arrMorse = morse.trim().split(' ')
  
    arrMorse.forEach(elem => {
      if (elem === '*') {
        result += ' '
      } else {
        result += MORSE_TABLE[elem]
      }
    })
  
    return result
}

module.exports = {
    decode
}