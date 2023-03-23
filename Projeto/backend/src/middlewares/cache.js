const { getAsync, setAsync } = require('../config/redis.config');
const Pet = require('../model/pet.model')

// Middleware para cache
exports.cache = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Verifica se existe o valor em cache
    const cacheValue = await getAsync(id);

    // Se existir, retorna o valor do cache
    if (cacheValue != null) {
      const result = JSON.parse(cacheValue);
      return res.status(200).json({
        pet: result,
        source: 'cache'
      });
    }

    // Se não existir, chama a próxima função na cadeia de middlewares
    const pet = await Pet.findById(id);

    if (!pet) {
      return res.status(404).json({
        message: 'Pet não encontrado'
      });
    }

    // Salva o valor no cache
    await setAsync(id, JSON.stringify(pet));

    return res.status(200).json({
      pet,
      source: 'db'
    });
  } catch (error) {
    console.error('Erro ao obter dados do cache', error);
    next();
  }
};
