console.log('Simply.js demo!');
var page=0;

simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.subtitle('Pressed ' + e.button + '!');
});

simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});

simply.on('accelData', function(e) {
  if(e.accel.y>500){
  	page--;
  	simply.subtitle('UP '+page);
  }
  if(e.accel.y<-500){
  	page++;
  	simply.subtitle('DOWN '+page);
  }
  if(e.accel.x>900){
  	simply.subtitle('RIGHT');
  }
  if(e.accel.x<-900){
  	simply.subtitle('LEFT');
  }
});

simply.setText({
  title: 'Simply My Demo!',
  body: '',
}, true);