var GetBtn = document.getElementById('getImage')
var gallary = document.getElementById('Gallary')
// https://picsum.photos/id/1/200/300

function getelemet() {
    var image = new XMLHttpRequest();
    image.open('GET', 'https://jsonplaceholder.typicode.com/photos');
    image.send();

    function readystatechangeHandler(e) {
        // console.log(e.target.response)
        var Images =JSON.parse(e.target.response);
        console.log(Images)
        for (var index = 4950; index < Images.length; index++) {
            var element = Images[index];
            console.log(element.thumbnailUrl)

            var IamgeList = document.createElement('img');
            IamgeList.src=element.url;
            // IamgeList.setAttribute('alt','Image')
            IamgeList.style.height='250px'
            IamgeList.style.width='250px'
            gallary.appendChild(IamgeList);


            
        }

    }

    image.addEventListener('readystatechange', readystatechangeHandler)
}

GetBtn.addEventListener('click', getelemet)