import {Op} from 'sequelize'

import User from '../models/User';

class ReportController {
  async show(req, res) {
    // Encontrar todos usuários que tem email que termina com @rocketseat.com.br
    // Desses usuários eu quero buscar todos que moram na rua "Rua Guilherme Gembala"
    // Desses usuários eu quero buscar as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: "%@gmail.com"
        }
      },
      include: [
        { 
          association: 'addresses', 
          where: { 
            street: 'Rua Guilherme Gembala'
          } 
        },
        // { 
        //   association: 'techs', 
        //   required: false,
        //   where: {
        //     name: {
        //       [Op.iLike]: 'React'
        //     }
        //   }
        // },
      ]
    })

    return res.json(users);
  }
};

export default new ReportController();