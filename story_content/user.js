function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FZTTXRI6iR":
        Script1();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();

//grab the equation inputs from SL
var CoCPerc=player.GetVar("CoCPerc");
var Years=player.GetVar("Years");

//run the calculation and push into the SL variable called output
results=(1-(1+CoCPerc)**-Years)/CoCPerc

player.SetVar("output",results);



}

