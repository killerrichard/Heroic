export default class Client
{
    constructor()
    {
        this.restrict   = 'E';
        this.replace    = true;
        this.scope      = {
            flashvars: '=flashvars'
        }

    }

    link(scope, element, attrs)
    {
      console.log(scope.habboswf)
      element.replaceWith('<object id="flash-container" type="application/x-shockwave-flash" data="http://vanitygaming.ca/swfs/gamedata/habbo.swf" width="100%" height="100%"><param name="base" value="http://vanitygaming.ca/swfs/other/game/"><param name="allowScriptAccess" value="always"><param name="menu" value="false"><param name="wmode" value="opaque"><param name="flashvars" value="' + scope.flashvars + '"></object>');
    }
}
