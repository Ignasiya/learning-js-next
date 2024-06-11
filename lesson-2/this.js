function regularFunction() {
    console.log(this);
}

const arrowFunction = () => {
    console.log(this);
}

regularFunction();
arrowFunction();

const obj = {
    regularMethod: function () {
        console.log(this);
    },

    arrowMethod: () => {
        console.log(this);
    }
};

obj.regularMethod();
obj.regularFunction();