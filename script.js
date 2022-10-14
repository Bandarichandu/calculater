function insert(num){
        document.cal.input.value = document.cal.input.value + num;
      }
      
function clean() {
        document.cal.input.value = "";
      }
      
function del() {
        var text = document.cal.input.value
        document.cal.input.value = text.substring(0,text.length-1)
      }
 
function calculate(){
        var text = document.cal.input.value
        document.cal.input.value = eval(text)
      }
