'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rm = exports.whoami = exports.printenv = exports.echo = exports.pwd = exports.cd = exports.mkdir = exports.cat = exports.ls = exports.clear = exports.help = exports.about = exports.education = exports.experience = exports.skills = exports.projects = exports.contact = undefined;

var _util = require('./util');

var Util = _interopRequireWildcard(_util);

var _const = require('./const');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var helpCommands = ['clear', 'about', 'education', 'experience', 'skills', 'projects', 'contact', 'resume'];

var help = exports.help = {
    exec: function exec(state) {
        var _state$history;

        return Object.assign({}, state, {
            history: (_state$history = state.history).concat.apply(_state$history, [{ value: 'Type out any of these commands to try them out! Type \'help\' to see this list again.' }].concat(_toConsumableArray(helpCommands.map(function (value) {
                return { value: value };
            }))))
        });
    }
};

var clear = exports.clear = {
    exec: function exec(state) {
        return Object.assign({}, state, { history: [] });
    }
};

const about_text_1 = "Hey, I'm Josh! This is a website I slapped together to showcase a little more about me. It was built entirely using React with React-bash."
const about_text_2 = "I'm currently a rising junior at UCSD and right in the middle of my second internship with Apple. I'm studying CS at school right now and proud to be a Jacobs Scholar, but I also love hanging out with friends, finding new places to eat, and spending way too much online."
const about_text_3 = "Explore more to learn about my background, interests, and skills!"

var about = exports.about = {
    exec: function exec(state) {
        // return Object.assign({}, state, { history: state.history.concat( {value: "My name is Josh!"} }) ;
        // console.log(state.history)
        // console.log(state.history)
        // console.log(about_text_1)
        return Object.assign({}, state, {history: state.history.concat([{value: about_text_1}, {value: " "}, {value: about_text_2}, {value: " "}, {value: about_text_3}])});
    }
};


const ucsd_text_title = "University of California, San Diego (2015-2019)"
const ucsd_text_1 = "I'm loving it at UCSD right now! Here are some quick facts:"
const ucsd_text_2 = "Class of 2019 (Rising Junior)"
const ucsd_text_3 = "Jacobs School Scholar (full-ride scholarship, 0.0044% of class of 2019)"
const ucsd_text_4 = "Regent's Scholar"
const ucsd_text_5 = "Computer Science, B.S."
const ucsd_text_6 = "3.93 GPA"

const msj_text_title = "Mission San Jose High School (2011-2015)"
const msj_text_1 = "During my high school career, I really enjoyed participating in robotics competitions and learning Japanese! Here are some stats about me back in MSJHS:"
const msj_text_2 = "3.99 GPA (unweighted)"
const msj_text_3 = "2380 SAT I"
const msj_text_4 = "800 SAT II Math, 800 SAT II Physics, 780 SAT II Biology"
const msj_text_5 = "5 in AP Calculus AB, AP Physics B, AP Physics C: Mechanics, AP Physics C: E&M, AP Computer Science"

var education = exports.education = {
     exec: function exec(state) {
        // return Object.assign({}, state, { history: state.history.concat( {value: "My name is Josh!"} }) ;
        // console.log(state.history)
        // console.log(state.history)
        // console.log(about_text_1)
        return Object.assign({}, state, { history: state.history.concat([
                                                                            {value: ucsd_text_title},
                                                                            {value: ucsd_text_1},
                                                                            {value: ucsd_text_2},
                                                                            {value: ucsd_text_3},
                                                                            {value: ucsd_text_4},
                                                                            {value: ucsd_text_5},
                                                                            {value: ucsd_text_6},
                                                                            {value: " "},
                                                                            {value: msj_text_title}, 
                                                                            {value: msj_text_1}, 
                                                                            {value: msj_text_2}, 
                                                                            {value: msj_text_3}, 
                                                                            {value: msj_text_4}, 
                                                                            {value: msj_text_5}
                                                                        ])
                                        }
        );
    }
}

const apple2017_title = "Apple Inc. (Summer 2017)"
const apple2017_text_1 = "AR Stuff rn on the SDS team"

const research_title = "Security Research (Spring 2017)"
const research_text_1 = "Description here"

const tutor_title = "UCSD CSE Tutoring (Fall 2016 - Present)"
const tutor_text_1 = "Description here"

const apple2016_title = "Apple Inc. (Summer 2016)"
const apple2016_text_1 = "I did a software engineering internship on the SDS (Strategic Data Solutions) team. I spearheaded a project that involved fraud detection, big data, and image processing techniques."

const mediatek_title = "Mediatek Inc. (Summer 2015)"
const mediatek_text_1 = "I did a software engineering internship on the MCS (Mediatek Cloud Sandbox) team. I carved a web application that displayed product information and documentation, as well as an internal admin page to dynamically update data."
var experience = exports.experience = {
    exec: function exec(state) {
        return Object.assign({}, 
                             state, 
                             { history: state.history.concat([
                                                                {value: apple2017_title},
                                                                {value: apple2017_text_1},
                                                                {value: " "},
                                                                {value: research_title},
                                                                {value: research_text_1},
                                                                {value: " "},
                                                                {value: tutor_title},
                                                                {value: tutor_text_1},
                                                                {value: " "},
                                                                {value: apple2016_title},
                                                                {value: apple2016_text_1},
                                                                {value: " "},
                                                                {value: mediatek_title},
                                                                {value: mediatek_text_1}
                                                            ])
                             }
        );
    }
}

const mobile_skill_title = "Mobile Front-end Development"
const mobile_skill_1 = "I have worked extensively with Swift for iOS applications. My first language was Java, and I have coded projects in Android Studio. Right now, I'm tinkering a lot with React-Native."

const web_skill_title = "Web Front-end Development"
const web_skill_1 = "I am proficient in Java, Javascript, HTML/CSS, and I have worked extensively with jQuery and AJAX. I mainly use React.js for all my views."

const bigdata_title = "Big data infrastructure"
const bigdata_skill_1 = "I've worked extensively with big data frameworks such as Hadoop/YARN in my internships, as well as Apache Spark and Spark Streaming for large-scale distributed computation. I've also dabbled with H20 and Pandas for simple machine learning implementations."

var skills = exports.skills = {
    exec: function exec(state) {
        return Object.assign({}, 
                             state, 
                             { history: state.history.concat([
                                                                {value: mobile_skill_title},
                                                                {value: mobile_skill_1},
                                                                {value: " "},
                                                                {value: web_skill_title},
                                                                {value: web_skill_1},
                                                                {value: " "},
                                                                {value: bigdata_title},
                                                                {value: bigdata_skill_1}
                                                            ])
                             }
        );
    }
}

var projects = exports.projects = {
    exec: function exec(state) {
        return Object.assign({},
                             state,
                             { history: state.history.concat([
                                                                {value: "All my projects go here..."}
                                                            ])
                             }
        );
    }
}

var contact = exports.contact = {
    exec: function exec(state) {
        return Object.assign({},
                             state,
                             { history: state.history.concat([
                                                                {value: "If you still have any questions, don't hesitate to reach out!"},
                                                                {value: "Email: joshua.chao39@gmail.com"},
                                                                {value: "github: joshuachao39"},
                                                                {value: "linkedin: joshuachao39"}
                                                            ])
                             }
        );
    }
}

/*
var contact = exports.contact = {
    exec: function exec(state) {
        // window.open('file:///c:/Users/joshuachao/Documents/Miscellaneous/workspace/personal-website-2/src/josh_resume.pdf')
        history.push('/resume')
        return Object.assign({}, state, state.history)
    }
}
*/

/*
var ls = exports.ls = {
    exec: function exec(state, _ref) {
        var flags = _ref.flags;
        var args = _ref.args;

        var path = args[0] || '';
        var fullPath = Util.extractPath(path, state.cwd);

        var _Util$getDirectoryByP = Util.getDirectoryByPath(state.structure, fullPath);

        var err = _Util$getDirectoryByP.err;
        var dir = _Util$getDirectoryByP.dir;


        if (err) {
            return Util.appendError(state, err, path);
        } else {
            var content = Object.keys(dir);
            if (!flags.a) {
                content = content.filter(function (name) {
                    return name[0] !== '.';
                });
            }
            if (flags.l) {
                return Object.assign({}, state, {
                    history: state.history.concat(content.map(function (value) {
                        return { value: value };
                    }))
                });
            } else {
                return Object.assign({}, state, {
                    history: state.history.concat({ value: content.join(' ') })
                });
            }
        }
    }
}; */

/*
var cat = exports.cat = {
    exec: function exec(state, _ref2) {
        var args = _ref2.args;

        var path = args[0];
        var relativePath = path.split('/');
        var fileName = relativePath.pop();
        var fullPath = Util.extractPath(relativePath.join('/'), state.cwd);

        var _Util$getDirectoryByP2 = Util.getDirectoryByPath(state.structure, fullPath);

        var err = _Util$getDirectoryByP2.err;
        var dir = _Util$getDirectoryByP2.dir;

        if (err) {
            return Util.appendError(state, err, path);
        } else if (!dir[fileName]) {
            return Util.appendError(state, _const.Errors.NO_SUCH_FILE, path);
        } else if (!dir[fileName].hasOwnProperty('content')) {
            return Util.appendError(state, _const.Errors.IS_A_DIRECTORY, path);
        } else {
            return Object.assign({}, state, {
                history: state.history.concat({
                    value: dir[fileName].content
                })
            });
        }
    }
}; */

/*
var mkdir = exports.mkdir = {
    exec: function exec(state, _ref3) {
        var args = _ref3.args;

        var path = args[0];
        var relativePath = path.split('/');
        var newDirectory = relativePath.pop();
        var fullPath = Util.extractPath(relativePath.join('/'), state.cwd);
        var deepCopy = JSON.parse(JSON.stringify(state.structure));

        var _Util$getDirectoryByP3 = Util.getDirectoryByPath(deepCopy, fullPath);

        var dir = _Util$getDirectoryByP3.dir;


        if (dir[newDirectory]) {
            return Util.appendError(state, _const.Errors.FILE_EXISTS, path);
        } else {
            dir[newDirectory] = {};
            return Object.assign({}, state, { structure: deepCopy });
        }
    }
}; */

/*
var cd = exports.cd = {
    exec: function exec(state, _ref4) {
        var args = _ref4.args;

        var path = args[0];
        if (!path || path === '/') {
            return Object.assign({}, state, { cwd: '' });
        }

        var fullPath = Util.extractPath(path, state.cwd);

        var _Util$getDirectoryByP4 = Util.getDirectoryByPath(state.structure, fullPath);

        var err = _Util$getDirectoryByP4.err;


        if (err) {
            return Util.appendError(state, err, path);
        } else {
            return Object.assign({}, state, { cwd: fullPath });
        }
    }
}; */

/*
var pwd = exports.pwd = {
    exec: function exec(state) {
        var directory = '/' + state.cwd;
        return Object.assign({}, state, {
            history: state.history.concat({ value: directory })
        });
    }
}; */

/*
var echo = exports.echo = {
    exec: function exec(state, _ref5) {
        var input = _ref5.input;

        var ECHO_LENGTH = 'echo '.length;
        var envVariables = Util.getEnvVariables(state);
        var value = input.slice(ECHO_LENGTH).replace(/(\$\w+)/g, function (key) {
            return envVariables[key.slice(1)] || '';
        });
        return Object.assign({}, state, {
            history: state.history.concat({ value: value })
        });
    }
}; */

/*
var printenv = exports.printenv = {
    exec: function exec(state) {
        var envVariables = Util.getEnvVariables(state);
        var values = Object.keys(envVariables).map(function (key) {
            return { value: key + '=' + envVariables[key] };
        });
        return Object.assign({}, state, {
            history: state.history.concat(values)
        });
    }
}; */

/*
var whoami = exports.whoami = {
    exec: function exec(state) {
        var value = state.settings.user.username;
        return Object.assign({}, state, {
            history: state.history.concat({ value: value })
        });
    }
}; */

/*
var rm = exports.rm = {
    exec: function exec(state, _ref6) {
        var flags = _ref6.flags;
        var args = _ref6.args;

        var path = args[0];
        var relativePath = path.split('/');
        var file = relativePath.pop();
        var fullPath = Util.extractPath(relativePath.join('/'), state.cwd);
        var deepCopy = JSON.parse(JSON.stringify(state.structure));

        var _Util$getDirectoryByP5 = Util.getDirectoryByPath(deepCopy, fullPath);

        var dir = _Util$getDirectoryByP5.dir;


        if (dir[file]) {
            // folder deletion requires the recursive flags `-r` or `-R`
            if (!Util.isFile(dir[file]) && !(flags.r || flags.R)) {
                return Util.appendError(state, _const.Errors.IS_A_DIRECTORY, path);
            }
            delete dir[file];
            return Object.assign({}, state, { structure: deepCopy });
        } else {
            return Util.appendError(state, _const.Errors.NO_SUCH_FILE, path);
        }
    }
}; */