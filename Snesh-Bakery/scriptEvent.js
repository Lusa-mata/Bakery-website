// Function to show the cookie card after 3 seconds
function showCookieCard() {
    var cookieCard = document.getElementById('cookieCard');
    cookieCard.style.display = 'block';
  }

  // Set a timeout to call the showCookieCard function after 3 seconds
  setTimeout(showCookieCard, 3000);





// Function to hide the cookie card when "Accept" is clicked
function acceptCookies() {
    var cookieCard = document.getElementById('cookieCard');
    cookieCard.style.opacity = '0';
    
  }


      function openModal() {
          document.getElementById('successModal').style.display = 'block';
          document.getElementById('overlay').style.display = 'block';
      }

      function closeModal() {
          document.getElementById('successModal').style.display = 'none';
          document.getElementById('overlay').style.display = 'none';
        // Clear all input fields in the form
    var form = document.querySelector('.form');
    form.reset();
        }

      document.addEventListener('DOMContentLoaded', function () {
          // Add event listener to the form
          document.querySelector('.form').addEventListener('submit', function (event) {
              // Prevent the default form submission
              event.preventDefault();
              // You can perform any additional actions here

              // Open the modal
              openModal();
          });
      });

      //code for chatbot below
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"40157420759a61b0be89365c64326a1c","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */


      
  