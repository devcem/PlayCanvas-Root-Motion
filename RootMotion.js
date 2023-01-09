var RootMotion = pc.createScript('rootMotion');

RootMotion.attributes.add('parentEntity', { 
    type : 'entity',
    description : 'For getting direction vector on root motion, optional.'
});

RootMotion.prototype.initialize = function() {
    this.startPosition = this.entity.getLocalPosition().clone();
};

RootMotion.prototype.postUpdate = function(dt) {
    if(this.parentEntity){
        var diff = this.entity.getLocalPosition().sub(this.startPosition);

        this.parentEntity.fire('RootMotion', diff);
    }

    this.entity.setLocalPosition(this.startPosition);
};
