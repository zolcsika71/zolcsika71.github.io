"use strict";

let photoArray = [],
    currentPhoto = 0,
    data1 = {
    photo:  './img/1.jpg',
    title: 'Last Year',
    description: 'It was before'
},
    data2 = {
        photo:  './img/2.jpg',
        title: 'This Year',
        description: 'It`s scary'
    },
    data3 = {
        photo:  './img/3.jpg',
        title: 'Science',
        description: 'It`s not that science'
    },
    data4 = {
        photo:  './img/4.jpg',
        title: 'Future',
        description: 'Will be told'
    },
    data5 = {
        photo:  './img/5.jpg',
        title: 'Shout',
        description: 'We must to say our words'
    },
    data6 = {
        photo:  './img/6.jpg',
        title: 'Play',
        description: 'Or play it gently'
    },
    data7 = {
        photo:  './img/7.jpg',
        title: `Holnap`,
        description: 'Tomorrow is Another Day'
    };

photoArray.push(data1, data2, data3, data4, data5, data6, data7);

let setCurrentThumbnailBorder = (thumbnailClicked) => {

        for (let i = 0; i < photoArray.length; i++) {

            if (i === thumbnailClicked)
                $(`#${i}`).css('border', 'red ridge');
            else
                $(`#${i}`).css('border', 'ridge');

        }
    },
    loadPhoto = (photoId) => {
        $('#photo').attr('src', photoArray[photoId].photo);
        $('#photo-title').html(photoArray[photoId].title);
        $('#photo-description').html(photoArray[photoId].description);
        setCurrentThumbnailBorder(photoId);
    },
    addThumbnail = (photoId) => {
        $('.thumbnails').append(`
            <div class='thumbnail'>              
                <img class="thumbnails-pictures" id=${photoId} data-number=${photoId}>
                <div class='thumbnails-title'>${photoArray[photoId].title}</div>               
            </div>
        `);
        $('.thumbnail:last-child .thumbnails-pictures').attr('src', photoArray[photoId].photo);

        if (photoId === 0)
            $(`#0`).css('border', 'red ridge');

    },
    clickThumbnail = () => {
        // it can be 'id', just example for data-number
        currentPhoto = Number($(event.target).attr('data-number'));
        loadPhoto(currentPhoto);
        setCurrentThumbnailBorder(currentPhoto);
    };

if (currentPhoto === 0)
    loadPhoto(currentPhoto);

for (let i = 0; i < photoArray.length; i++)
    addThumbnail(i);

$('#right').click(() => {
    if (currentPhoto < photoArray.length - 1) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    }
})

$('#left').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 6;
        loadPhoto(currentPhoto);
    }
})

$('.thumbnails').click((clickThumbnail));
















