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
      element.replaceWith('<object id="flash-container" type="application/x-shockwave-flash" data="http://localhost/assets/swfs/gamedata/habb.swf" width="100%" height="100%"><param name="base" value="http://localhost/assets/swfs/other/game/"><param name="allowScriptAccess" value="always"><param name="menu" value="false"><param name="wmode" value="opaque"><param name="flashvars" value="' + scope.flashvars + '"></object>');
    }
}
