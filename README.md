# PlayCanvas-Root-Motion
PlayCanvas Root motion plugin to make animations in place.

Unity has a feature called root motion where it calculates the movement vector from animation data. PlayCanvas doesn't have that yet, and it's little bit troubling to work with animations that is not "in place".

With this simple plugin we set our characters into their inital positions to make them in placed. And get the movement vector on each frame to move characters with physics engine.

You can download this plugin, and attach it to the root element easily. That will make character stop it's inital position. If you need to get movement vector, you can attach entity to parent entity and listen it with "this.entity.on" event listener.
