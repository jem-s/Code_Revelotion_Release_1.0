
function update() {
  //  output_js = document.getElementById("js_input").value;
output_html = document.getElementById("html_input").value;
output_css = document.getElementById("css_input").value;


    //console.log(output_js);
    console.log(output_html);
    console.log(output_css);

///////////////////////////////////////////////output updater//////////////////////////////////////////////////////
document.getElementById("code_output").innerHTML = output_html + "<style>" + output_css + "</style> "

}