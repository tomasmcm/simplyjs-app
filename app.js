console.log('Simply.js demo!');
simply.style('mono');

var page=0;
var s = "#### Reactivos ####\n\
Especifique a descrição SADA\n\
Agente é toda a entidade mergulhada num ambiente, provida de sensores e de actuadores. São julgados de acordo com o seu desempenho na realização de uma dada tarefa.\n\
SADA (Sensores, Actuadores , Desempenho, Ambiente).\n\
\n\
Tipos de Ambientes\n\
Acessíveis - agente retira do ambiente toda informação para decidir acção\n\
Determinísticos (ou estocásticos) - evolução do ambiente pode ser determinada a partir da situação corrente.\n\
Estáticos (ou dinâmicos) - ambiente não se altera enquanto agente decide acção.\n\
\n\
Sistema de produção\n\
Cj de regras do tipo Se <condição> Então <acção>.\n\
Interpretador de regras ou mecanismo de controlo (lista ordenada das regras).";

simply.on('singleClick', function(e) {
  if(e.button=="up"){
	page--;
  	simply.body(s.substring(page*100));
  }
  if(e.button=="down"){
  	page++;
  	simply.body(s.substring(page*100));
  }
});

// simply.on('longClick', function(e) {
//   console.log(util2.format('long clicked $button!', e));
//   simply.vibe();
//   simply.scrollable(e.button !== 'select');
// });

// simply.on('accelTap', function(e) {
//   console.log(util2.format('tapped accel axis $axis $direction!', e));
//   simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
// });

simply.on('accelData', function(e) {
  if(e.accel.y>500){
  	page--;
  	simply.body(s.substring(page*100));
  }
  if(e.accel.y<-500){
  	page++;
  	simply.body(s.substring(page*100));
  }
  if(e.accel.x>900){
  	simply.body('RIGHT');
  }
  if(e.accel.x<-900){
  	simply.body('LEFT');
  }
});

simply.setText({
  title: '',
  body: s,
}, true);