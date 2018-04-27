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
url: 'https://graph.facebook.com/me?fields=feed.limit(4){picture}&access_token=' + myFacebookToken,
success: (response) => {

            
let myPic = response.feed.data;//Assign the data array to variable
                
for(i in myPic){
                console.log(myPic[i])
                console.log(myPic[i].picture);
                let tempRow = `<div class= row>User Post
                <div class="col" style ="margin-top: 5vh;"> <img src =" ${myPic[i].picture} " class="shadow1 content"/></div>
                </div>`
                $("#newsfeed").append(tempRow);
                
                }


}, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });// end ajax call 

}