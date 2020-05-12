"use strict";

function addItem() {

    let text = document.getElementById("item").value;

    if (text.length > 0) {

        $('.list').append(`
            <li id=${id}>
                <div id="text">${text}</div>
                <button id="notReady" type="button">
                    <img src="./images/notReady.png" alt="notReady" class="buttonImages">                    
                </button>      
                <button id="trashBin" type="button">
                    <img src="./images/trashBin.png" alt="trashBin" class="buttonImages">         
                </button>                                       
            </li>        
        `);

        id++;
    }
    $('#item').val('');
}

function handleButtons() {
    // 'this' is the current button

    let id = $(this).attr(('id')),
        listId = $(this).parent().attr(('id'));

    console.log(id, listId);

    switch (id) {

        case "notReady": {
            // set to ready
            console.log(`notReady ${listId} pressed`);
            $(`#${listId} #notReady`).replaceWith(`
                <button id="ready" type="button">
                    <img src="./images/ready.png" alt="ready" class="buttonImages">                    
                </button> 
            `)

            $(`#${listId} #text`).css('background', 'lightgrey');
            break;
        }
        case "ready": {
            console.log(`ready ${listId} pressed`);
            $(`#${listId} #ready`).replaceWith(`
                <button id="notReady" type="button">
                   <img src="./images/notReady.png" alt="notReady" class="buttonImages">              
                </button> 
            `)

            $(`#${listId} #text`).css('background', 'red');
            break;
        }
        case "trashBin": {
            console.log(`trashBin ${listId} pressed`);
            $(`#${listId}`).remove();
            break;
        }
    }
}

let id = 0;

$('#add').click(addItem);

$(".list").on("click", "li button", handleButtons);



