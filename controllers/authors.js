import models from '../models'

export const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Could not reach the database, please try again.')
  }
}

export const getAuthorByIdOrName = async (request, response) => {
  try {
    const { identifier } = request.params

    const author = await models.Authors.findOne({
      where: {
        [models.Sequelize.Op.or]: [
          { id: identifier },
          { nameLast: { [models.Sequelize.Op.like]: `%${identifier}%` } },
        ],
      },
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }],
      }],
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not reach the database, please try again.')
  }
}
