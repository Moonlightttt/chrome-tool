let changeJsonBtn = document.getElementById("changeJson");
let orginJson = document.getElementById("orginJson");
let currentJson = document.getElementById("currentJson");

//点击事件
changeJsonBtn.addEventListener("click", async () => {
  axios.post('http://localhost:8899/JsonTool/ConvertToCamel'
  ,{
    jsonStr: orginJson.value
  })
  .then(function (response) {
    console.log(response);
    currentJson.value = JSON.stringify(response.data);;
  })
  .catch(function (error) {
    console.log(error);
  });
  //let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setJsonResult,
  // });
});

function setJsonResult() {
}