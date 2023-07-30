function loadActivity() {
    chrome.runtime.sendMessage({message: "getActivity"}, function(response) {
      document.getElementById('activity').innerText = response.join('\n');
    });
  }
  
  document.getElementById('clear').addEventListener('click', function() {
    chrome.runtime.sendMessage({message: "clearActivity"}, function(response) {
      document.getElementById('activity').innerText = '';
    });
  });
  
  loadActivity();
  