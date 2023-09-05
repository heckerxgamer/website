$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});




async function sendContact(ev) {
    ev.preventDefault();

    const senderEmail = document
      .getElementById('emailInput').value;
      const senderdc = document
      .getElementById('dcInput').value;
    const senderMessage = document
      .getElementById('messageInput').value;

    const webhookBody = {
      embeds: [{
        title: '@ꜰᴏᴜɴᴅᴇʀꜱ Form Submitted' ,
        fields: [
          { name: 'Sender Email', value: senderEmail },
          { name: 'Discord Id', value: senderdc },
          { name: 'Message', value: senderMessage },
          

        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1017717849516691457/oaQft3tcodSaNvDbfIEcyFre_38GZXDXbVtJYh8oi3CV_XMi1BFq6ueIyxzPIQkjxxI0';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      alert('Message Sent');
    } else {
      alert('There was an error! did u fully fill the form? Try again later or DM me in discord!');
    }
  }