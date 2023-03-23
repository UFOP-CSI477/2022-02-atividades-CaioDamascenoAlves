import swal from "sweetalert";
import Api from "./Api";

export default {
  /**
   * Método responsável por criar uma nova adocao
   * (POST): localhost:3000/api/adocao
   */
  async CreateAdocao(adocao) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().post("/adocao", adocao, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = response.data;

      swal({
        title: "Sucesso!",
        text: message,
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
    }
  },

  async GetAdocao() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/adocao", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      // swal({
      //   title: "Oops!",
      //   text: "Alguma coisa deu errado aqui!",
      //   icon: "error",
      // });
    }
  },

  async UpdateAdocao(adocao) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().put("/adocao", adocao, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = response.data;

      swal({
        title: "Sucesso!",
        text: message,
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
    }
  },
  async DeleteAdocao(adocao) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().delete("/adocao", adocao, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = response.data;

      swal({
        title: "Sucesso!",
        text: message,
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
    }
  },
};
