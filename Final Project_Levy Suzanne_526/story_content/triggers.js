function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5joMt0ezSs7":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5op3Yp37O5h');
const duration = 3750;
const easing = 'ease-out';
const id = '5mu9pwY1SoJ';
const shrinkAmount = 0.2;
const delay = 19880;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
