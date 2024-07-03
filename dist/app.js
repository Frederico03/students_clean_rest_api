"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _tokenroutes = require('./routes/token.routes'); var _tokenroutes2 = _interopRequireDefault(_tokenroutes);
var _homeroutes = require('./routes/home.routes'); var _homeroutes2 = _interopRequireDefault(_homeroutes);
var _userroutes = require('./routes/user.routes'); var _userroutes2 = _interopRequireDefault(_userroutes);
var _alunosroutes = require('./routes/alunos.routes'); var _alunosroutes2 = _interopRequireDefault(_alunosroutes);
var _fotoroutes = require('./routes/foto.routes'); var _fotoroutes2 = _interopRequireDefault(_fotoroutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/users/', _userroutes2.default);
    this.app.use('/tokens/', _tokenroutes2.default);
    this.app.use('/alunos/', _alunosroutes2.default);
    this.app.use('/fotos/', _fotoroutes2.default);
    this.app.use('/', _homeroutes2.default);
  }
}

exports. default = new App().app;
