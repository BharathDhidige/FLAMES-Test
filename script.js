function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
}

function calculate() {
    let yourName = document.getElementById("your-name").value;
    yourName = yourName.toLowerCase();
    yourName = Array.from(yourName);
    yourName = removeItemAll(yourName,' ');

    let crushName = document.getElementById("crush-name").value;
    crushName = crushName.toLowerCase();
    crushName = Array.from(crushName);
    crushName = removeItemAll(crushName,' ');

    const flamesArray = {
        'F': "Friendship",
        'L': "Love",
        'A': "Affection",
        'M': "Marriage",
        'E': "Enemy",
        'S': "Siblings"
    };

    let flames = 'FLAMES';

    for (let i=0; i<yourName.length; i++){
        let letter = yourName[i];
        if (crushName.includes(letter)){
            yourName = removeItemOnce(yourName,letter);
            crushName = removeItemOnce(crushName,letter);
        }
    }

    count = yourName.length + crushName.length;
    
    while (flames.length > 1){
        let index = count % flames.length;
        if (index === 0){
            index = flames.length - 1;
        } else{
            index -= 1;
        }
        flames = flames.slice(index + 1) + flames.slice(0, index);
    }
    if (yourName!='' && crushName!=''){
        document.getElementById("results").innerHTML = flamesArray[flames];
    } else{
        document.getElementById("results").innerHTML = "Please enter the details";
        document.getElementById("results").style.fontSize = '30px';
    }

}

function reset() {
    location.reload();
}