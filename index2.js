// main document ready function to check if dom is loaded fully or not

let myFacebookToken;

$(document).ready(() => {

    myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No usr Token found");

    } else {

        getAllDetails();

    } // end if condition

}); // end document.ready function

let getAllDetails = () => {


    // API call to get user details

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://graph.facebook.com/me?fields=name,feed.limit(3){picture,expanded_width,expanded_height},hometown,cover,picture.type(large),last_name,first_name&access_token=' + myFacebookToken,
        success: (response) => {

            $('#dataSection').css('display', 'block');

            console.log(response);
            
            

            $('#userName').append(response.name);
            $('#firstName').append(response.first_name);
            $('#lastName').append(response.last_name);



            $('#hometown').append(response.hometown.name);

            $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');

             $('#cover').css('background-image', 'url(' + response.cover.source + ')');
// let myPic = response.feed.data;
//             for(i in myPic){
//                 console.log(myPic[i])
//                 console.log(myPic[i].picture);
//                 let tempRow = `<div class= row>
//                 <div class="col" style ="margin-top: 5vh;"> <img src =" ${myPic[i].picture} " class="profileHeight"/></div>
//                 </div>`
//                 $("#newsfeed").append(tempRow);
//                 // $("#newsfeed").html('<img src ="' + myPic[i]['picture'] + ' " class="img-fluid profileHeight"/>')

//             }
// $('#newsfeed').append(response.feed());


        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });// end ajax call 

}