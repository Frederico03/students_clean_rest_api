"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async index(req, res) {
    const novoAluno = await _Aluno2.default.create({
      nome: 'mariana',
      sobrenome: 'Garcez',
      email: 'mariscab@gmail.com',
      idade: 19,
      peso: 67.8,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

exports. default = new HomeController();
