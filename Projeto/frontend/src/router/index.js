import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/auth/Login/LoginComponent"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/auth/Profile/ProfileComponent.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/createPessoa",
    name: "createPessoa",
    component: () => import("../components/auth/Pessoa/create-pessoa/CreatePessoaComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/createPet",
    name: "createPet",
    component: () => import("../components/auth/Pet/create-pet/CreatePetComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/createDoacao",
    name: "createDoacao",
    component: () => import("../components/auth/Doacao/create-doacao/CreateDoacaoComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/createAdocao",
    name: "createAdocao",
    component: () => import("../components/auth/Adocao/create-adocao/CreateAdocaoComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/createImagem",
    name: "createImagem",
    component: () => import("../components/auth/Image/create-imagem/CreateImagemComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/updatePessoa",
    name: "updatePessoa",
    component: () => import("../components/auth/Pessoa/edit-pessoa/EditPessoaComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/updatePet",
    name: "updatePet",
    component: () => import("../components/auth/Pet/edit-pet/EditPetComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/updateDoacao",
    name: "updateDoacao",
    component: () => import("../components/auth/Doacao/edit-doacao/EditDoacaoComponent"),
    meta: {
      requireAuth: true,
    },
},
  {
    path: "/home",
    name: "home",
    component: () => import("../components/auth/Home/HomeComponent"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/auth/Register/RegisterComponent"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Lógica inerente ao NProgress
router.beforeResolve((to, from, next) => {
  // Se caso não for uma página inicial de carregamento
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

// Lógica inerente ao realizar o 'Log out' remover o token no local Storage:
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // Completando a animação da rota no NProgress
  NProgress.done();
});

export default router;