"use strict";

let photoArray = [],
    currentPhoto = 0,
    data1 = {
    photo:  './img/1.jpg',
    title: '1st title',
    description: '1st description'
},
    data2 = {
        photo:  './img/2.jpg',
        title: '2nd title',
        description: '2nd description'
    },
    data3 = {
        photo:  './img/3.jpg',
        title: '3rd title',
        description: '3rd description'
    },
    data4 = {
        photo:  './img/4.jpg',
        title: '4th title',
        description: '4th description'
    },
    data5 = {
        photo:  './img/5.jpg',
        title: '5th title',
        description: '5th description'
    },
    data6 = {
        photo:  './img/6.jpg',
        title: '6th title',
        description: '6th description'
    },
    data7 = {
        photo:  './img/7.jpg',
        title: '7th title',
        description: '7th description'
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
















