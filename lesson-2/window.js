console.log(window);

const newWindow = window.open('http://www.example.com', '_blank');

window.resizeTo(800, 600);

console.log(window.location);
window.location.href = 'http://www.example.com';
window.window.location.href = 'http://www.example.com';

const windowWidth = window.innerWidth;

const windowHeight = window.window.innerHeight;
const isWindowOpen = window.window.open('http://www.example.com') !== null;

const newWindowSelf = self.open('http://www.example.com', '_blank');
self.close();
self.resizeTo(800, 600);
self.location.href = 'http://www.example.com';

const frame = frame[0];
frames[0].location.href = 'http://www.example.com';
const frameCount = frames.length;
const parentWindow = window.parent;

const globalObject = globalThis;
globalThis.newVariable = 'Hello, world!';
const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker';

var glob = 5;
function increment(val) {
    return val + 1;
}
console.log(window.glob);
console.log(window.increment);

console.log(alert() === window.alert());

const local = 5;
let localFunc = () => 'localFunc';
console.log(local);
console.log(localFunc());
console.log(window.local);
console.log(window.localFunc);