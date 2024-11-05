// YOUR CODE HERE

//Exercise: Clicking this button should change the color of the text in the box on the right to "red"
//Select btn1
const redText = document.querySelector('#btn1')

//Select output1
const output = document.querySelector('#output1')

//Event btn1
redText.addEventListener('click', () => {
    output.style.color = 'red'
})


//Exercise: Clicking this button should create a span element with the text 'Hello word' and append it after the paragraph on the box on the right
const btn2 = document.querySelector('#btn2')

//Select output2
const output2 = document.querySelector('#output2')
//Event btn2
btn2.addEventListener('click', () => {
    const spanWorld = document.createElement('span')
    spanWorld.textContent = 'Hello World'
    output2.append(spanWorld)
})

//Exercise: Clicking this button should remove the class 'small-text' from the paragraph element on the box on the right
const btn3 = document.querySelector('#btn3')

//Select output3
const output3 = document.querySelector('#output3')
const paragraph = output3.querySelector('p')
//Event btn3
btn3.addEventListener('click', () => {
    paragraph.classList.remove('small-text')
    })

//Exercise: Clicking this button should change both paragraphs on the right box to color 'red'
//Select btn4
const btn4 = document.querySelector('#btn4')

//Select output4
const output4 = document.querySelector('#output4')
const paragraphs = output4.querySelectorAll('p')

//Event btn4
btn4.addEventListener('click', () => {
    output4.style.color = 'red'
})

//Exercise: Clicking this button should get the value of the input field on the box on the right and console.log it
//Select btn5
const btn5 = document.querySelector('#btn5')

//Select output5
const output5 = document.querySelector('#output5')
const inputText = output5.querySelector('input')

//Event btn5
btn5.addEventListener('click', () => {
    console.log(inputText.value)
})