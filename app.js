var createHelloWorld = function() {
    
    return function a (...args) {
        return console.log('Hello World');
        
    }
    return a
};

const f = createHelloWorld();
f();
f();
