// Method 1: Using $.getJSON
function getTeamDataWithGetJSON() {
    $.getJSON('team.json', function (data) {
      // Clear existing content
      $('#team').empty();
  
      // Loop through the team data and append it to the #team div
      $.each(data.team, function (index, member) {
        var memberDiv = $('<div>');
        memberDiv.append($('<h2>').text(member.name));
        memberDiv.append($('<h5>').text(member.position));
        memberDiv.append($('<p>').text(member.bio));
        $('#team').append(memberDiv);
      });
    })
    .fail(function() {
      // Display an error message if the request fails
      $('#team').text('Error: Content could not be retrieved.');
    });
  }
  
  // Method 2: Using $.ajax
  function getTeamDataWithAjax() {
    // Display "Loading..." message
    $('#team').text('Loading...');
  
    $.ajax({
      url: 'team.json',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        // Clear the "Loading..." message
        $('#team').empty();
  
        // Loop through the team data and append it to the #team div
        $.each(data.team, function (index, member) {
          var memberDiv = $('<div>');
          memberDiv.append($('<h2>').text(member.name));
          memberDiv.append($('<h5>').text(member.position));
          memberDiv.append($('<p>').text(member.bio));
          $('#team').append(memberDiv);
        });
      },
      error: function () {
        // Display an error message if the request fails
        $('#team').text('Error: Content could not be retrieved.');
      }
    });
  }
  
  // Call one of the methods within the jQuery ready function to display the data
  $(document).ready(function () {
    // You can choose which method to call here
    getTeamDataWithGetJSON();
  });
  