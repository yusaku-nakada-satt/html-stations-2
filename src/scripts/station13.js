function changeBackgroundColor(e) {
  console.log("チェックボックスが押されたらtrue",check.checked);
  if (check.checked) {
    document.getElementById('text').style.backgroundColor = "red";
  } else {
    document.getElementById('text').style.backgroundColor = "white";
  }
}
