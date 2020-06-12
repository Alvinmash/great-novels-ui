import models from '../models'

export const getAllNovels = async (request, response) => {
  try {
    const novels = await models.Novels.findAll({
      include: [{ model: models.Authors }, { model: models.Genres }],
    })

    return response.send(novels)
  } catch (error) {
    return response.status(500).send('Could not reach the database, please try again.')
  }
}

export const getNovelByIdOrTitle = async (request, response) => {
  try {
    const { identifier } = request.params

    const novel = await models.Novels.findOne({
      where: {
        [models.Sequelize.Op.or]: [
          { id: identifier },
          { title: { [models.Sequelize.Op.like]: `%${identifier}%` } },
        ],
      },
      include: [{ model: models.Authors }, { model: models.Genres }],
    })

    return novel
      ? response.send(novel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not reach the database, please try again.')
  }
}
