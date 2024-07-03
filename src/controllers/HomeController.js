import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
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

export default new HomeController();
