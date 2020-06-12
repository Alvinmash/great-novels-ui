import models from '../models'

export const getAllGenres = async (request, response) => {
  try {
    const genres = await models.Genres.findAll()

    return response.send(genres)
  } catch (error) {
    return response.status(500).send('Could not reach the database, please try again.')
  }
}

export const getGenreById = async (request, response) => {
  try {
    const { id } = request.params

    const genre = await models.Genres.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        include: [{ model: models.Authors }],
      }],
    })

    return genre
      ? response.send(genre)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not reach the database, please try again.')
  }
}
