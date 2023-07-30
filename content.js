let userActivity = [];

document.addEventListener('click', function (event) {
  const activity = `Clicked on ${event.target.tagName} element.`;
  userActivity.push(activity);
});

document.addEventListener('submit', function (event) {
  const activity = `Form submitted on page.`;
  userActivity.push(activity);
});

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let timeDiv = document.getElementById('timeDisplayExtension');
  let computedStyle = window.getComputedStyle(document.body);

  if (timeDiv) {
    timeDiv.textContent = time;
    timeDiv.style.backgroundColor = computedStyle.backgroundColor;
  } else {
    timeDiv = document.createElement('div');
    timeDiv.id = 'timeDisplayExtension';
    timeDiv.style.position = 'fixed';
    timeDiv.style.bottom = '10px';
    timeDiv.style.right = '10px';
    timeDiv.style.padding = '10px';
    timeDiv.style.border = '1px solid black';
    timeDiv.style.zIndex = 999999;
    timeDiv.textContent = time;
    timeDiv.style.backgroundColor = computedStyle.backgroundColor;
    document.body.appendChild(timeDiv);
  }
}, 1000);

window.onbeforeunload = function () {
  if (userActivity.length > 0) {
    chrome.runtime.sendMessage({message: "userActivity", data: userActivity});
  }
};
