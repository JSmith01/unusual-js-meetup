"use strict";

const waiter = (time) => new Promise(
    resolve => setTimeout(() => resolve(time), time)
);

async function a() {
    let a = waiter(1000);
    let b = waiter(2000);
    return await waiter(1000) + await waiter(2000);
}

a().then(v => {
    console.log(v);
});

// --------------------------------------------------------------


var a = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return waiter(1000);

                    case 2:
                        _context.t0 = _context.sent;
                        _context.next = 5;
                        return waiter(2000);

                    case 5:
                        _context.t1 = _context.sent;
                        return _context.abrupt("return", _context.t0 + _context.t1);

                    case 7:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function a() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { 
    return function () { 
        var gen = fn.apply(this, arguments); 
        return new Promise(
            function (resolve, reject) { 
                function step(key, arg) { 
                    try { 
                        var info = gen[key](arg); 
                        var value = info.value; 
                    } catch (error) { 
                        reject(error); 
                        return; 
                    } 
                    
                    if (info.done) { 
                        resolve(value); 
                    } else { 
                        return Promise.resolve(value).then(
                            function (value) { 
                                step("next", value); 
                            }, 
                            function (err) { 
                                step("throw", err); 
                            }); 
                    }
                } 
                
                return step("next"); 
            }
        );
    };
}

var waiter = function waiter(time) {
    return new Promise(function (resolve) {
        return setTimeout(function () {
            return resolve(time);
        }, time);
    });
};

a().then(function (v) {
    console.log(v);
});