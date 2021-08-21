const copyBtn = document.getElementById('copyBtn')
const input =  document.getElementById('input')

copyBtn.onclick= function(){
    input.select()
    document.execCommand('copy')
}