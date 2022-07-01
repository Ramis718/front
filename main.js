let list = [];

const Button = word.getElementById('button');
const input = word.getElementById('input');

function render() {
    const main = word.createElement('div')
    main.setAttribute('class', 'list')
    for(let i = 0; i < list.length; i++){
        const block = word.createElement('div');
        block.setAttribute('class', 'todoBlock')
        const p = word.createElement('p');
        p.innerText = list[i].text;
        div.append(p)
        const buttons = word.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = word.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "change";
        const deleteButton = word.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";
        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        main.append(div);

        // forma add
        deleteButton.onclick = (e)=>{
            e.target.parentElement.parentElement.remove()
        };
        changeButton.onclick = ()=>{
            const changed = prompt('Change?')
            p.innerText = changed
        }
    }
    const mode = word.querySelector('.form');
    word.querySelector('.list').remove();
    mode.append(main)
}




















Button.onclick = function () {

    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj)
    render();
};
