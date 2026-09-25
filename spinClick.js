(function(document){
  var div = document.getElementById('spinContainer');
  var icon = document.getElementById('spinImage');
  var open = false;
  
  div.addEventListener('click', function(){
    if(open){
      icon.className = 'spinImage';  
    } else{
      icon.className = 'spinImage.open';
    }
    
    open = !open;
  });
})(document);