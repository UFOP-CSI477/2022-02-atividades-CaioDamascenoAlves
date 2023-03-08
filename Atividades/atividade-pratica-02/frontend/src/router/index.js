import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/auth/login/LoginComponent"),
  },
  {
    path: "/createDonor",
    name: "createDonor",
    component: () =>
      import("../components/auth/donor/create-Donor/DonorComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/createLocaisColeta",
    name: "createLocaisColeta",
    component: () =>
      import(
        "../components/auth/locais_coleta/create-locais_coleta/CreateLocaisColetaComponent"
      ),
  },
  {
    path: "/createDonation",
    name: "createDonation",
    component: () =>
      import("../components/auth/donation/create-Doacao/DonationComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/tipoSanguineo",
    name: "tipoSanguineo",
    component: () =>
      import(
        "../components/auth/tipo_sangueneo/create-tipoSanguineo/TipoSanguineoComponent"
      ),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/updateTipoSanguineo",
    name: "updateTipoSanguineo",
    component: () =>
      import(
        "../components/auth/tipo_sangueneo/edit-tipoSanguineo/EditTipoSanguineoComponent"
      ),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/updateDonor",
    name: "updateDonor",
    component: () =>
      import("../components/auth/donor/edit-Donor/EditDonorComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/auth/profile/ProfileComponent"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/auth/register/RegisterComponent"),
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
