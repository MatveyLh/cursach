const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://127.0.0.1:3001', true);

xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.response);
    }
};