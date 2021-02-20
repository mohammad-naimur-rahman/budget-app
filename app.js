const totalInc = document.getElementById('total-inc');
const totalBal = document.getElementById('total-bal');
const totalExp = document.getElementById('total-exp');

const inputText = document.getElementById('input-text');
const inputNumber = document.getElementById('input-number');
const inputType = document.getElementById('input-type');
const inputTypeVal = inputType.value;
const inputBtn = document.getElementById('input-btn');

const tableInc = document.getElementById('table-inc');
const tableExp = document.getElementById('table-exp');

function updateInc() {
    const totalIncCount = parseFloat(totalInc.innerText);
    return totalIncCount;
}

function updateExp() {
    const totalExpCount = parseFloat(totalExp.innerText);
    return totalExpCount;
}

tableInc.addEventListener('click', e => {
    if (e.target.innerText == "Delete") {
        const child = e.target.parentNode.parentNode;
        const childValue = e.target.parentNode.parentNode.childNodes[3].innerText;
        tableInc.removeChild(child);
        const totalInc = document.getElementById('total-inc');
        const totalBal = document.getElementById('total-bal');
        let totalBalCount = parseFloat(totalBal.innerText);
        let totalIncCount = parseFloat(totalInc.innerText);
        totalBal.innerText = totalBalCount - parseFloat(childValue);
        totalIncCount -= parseFloat(childValue);
        totalInc.innerText = totalIncCount;
    }
})

tableExp.addEventListener('click', e => {
    if (e.target.innerText == "Delete") {
        const child = e.target.parentNode.parentNode;
        console.log(child);
        const childValue = e.target.parentNode.parentNode.childNodes[3].innerText;
        tableExp.removeChild(child);
        const totalBal = document.getElementById('total-bal');
        const totalExp = document.getElementById('total-exp');
        const totalBalCount = parseFloat(totalBal.innerText);
        let totalExpCount = parseFloat(totalExp.innerText);
        totalBal.innerText = totalBalCount + parseFloat(childValue);
        totalExpCount -= parseFloat(childValue);
        totalExp.innerText = totalExpCount;
    }
})

inputBtn.addEventListener('click', function () {
    const inputTextVal = inputText.value;
    const inputNumberVal = inputNumber.value;
    const inputTypeVal = inputType.value;

    if (inputTextVal != '' && inputNumberVal != '') {
        if (inputTypeVal == 'inc') {
            let totalIncCount = updateInc();
            totalIncCount += parseFloat(inputNumberVal);
            tableInc.innerHTML += `
                <tr>
                    <td scope="row">${inputTextVal}</td>
                    <td class="text-success inc-val">${inputNumberVal}</td>
                    <td><span class="text-danger del-btn">Delete</span></td>
                </tr>
            `
            totalInc.innerHTML = totalIncCount;
        }

        if (inputTypeVal == 'exp') {
            let totalExpCount = updateExp();
            totalExpCount += parseFloat(inputNumberVal);
            tableExp.innerHTML += `
                <tr>
                    <td scope="row">${inputTextVal}</td>
                    <td class="text-danger exp-val">${inputNumberVal}</td>
                    <td><span class="text-danger del-btn">Delete</span></td>
                </tr>
            `
            totalExp.innerHTML = totalExpCount;
        }
        inputText.value = '';
        inputNumber.value = '';
        {
            const totalInc = document.getElementById('total-inc');
            const totalBal = document.getElementById('total-bal');
            const totalExp = document.getElementById('total-exp');
            let totalIncCount = parseFloat(totalInc.innerText);
            let totalExpCount = parseFloat(totalExp.innerText);
            totalBal.innerText = totalIncCount - totalExpCount;
        }
    }

});