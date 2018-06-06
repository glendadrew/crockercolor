groovyShunt = new ShuntDiv(document.getElementById('main-container'), [
    new ShuntDiv.Transition('intro', 'game' , 'enterAnimateCss', 'event', {
        eventName: 'playGame',
        animation_name: 'fadeInDown',
        animation_time: 1200,
        animation_function: 'cubic-bezier(.1,1,.61,.96)',
    }),

    new ShuntDiv.Transition('game', 'transition' , 'dualAnimateCss', 'event', {
        eventName: 'shunt',
        exit_animation_name: 'fadeOut',
        exit_animation_time: 1500,
        exit_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_animation_name: 'fadeIn',
        enter_animation_time: 1500,
        enter_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_above: true,
    }),

    new ShuntDiv.Transition('transition', 'result' , 'dualAnimateCss', 'event', {
        eventName: 'shunt',
        exit_animation_name: 'fadeOut',
        exit_animation_time: 1500,
        exit_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_animation_name: 'fadeIn',
        enter_animation_time: 1500,
        enter_animation_function: 'cubic-bezier(.1,1,.61,.96)',
        enter_above: true,
    }),

    new ShuntDiv.Transition('result', 'intro' , 'enterAnimateCss', 'click', {
        id: 'blendAnother',
        animation_name: 'fadeInDown',
        animation_time: 800,
        animation_function: 'cubic-bezier(.1,1,.61,.96)',
    }),

], {
    default: 'intro',
    saveWithHash: false,
});

