const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet.controller");
const auth = require("../middlewares/user.auth");

// ==> Rota responsável por Criar um novo 'Pet': (POST): localhost:3000/api/pet
router.post("/pet", auth, petController.createPet);

// ==> Rota responsável por Buscar os 'Pets' por usuario Logado: (GET): localhost:3000/api/pet
router.get("/pet", auth, petController.getPet);

// ==> Rota responsável por Buscar todos 'Pets': (GET): localhost:3000/api/allPets
router.get("/allPets", petController.getAllPets);

// ==> Rota responsável por Editar 'Pet' do usuario logado: (PUT): localhost:3000/api/allPetsCached
router.put("/pet", auth, petController.updatePet);

// ==> Rota responsável por Buscar todos 'Pets' no Redis: (GET): localhost:3000/api/allPets
router.get("/allPetsCached", petController.getAllPetsCache);

// ==> Rota responsável por deletar um 'Pets' : (GET): localhost:3000/api/pet
router.delete("/pet", auth, petController.deletePet);

// ==> Rota responsável por deletar um 'Pets' : (GET): localhost:3000/api/pet
router.delete("/pet/:id", auth, petController.deletePet);

module.exports = router;