import swal from "sweetalert";
import Api from "./Api";

export default {
  async CreateTipoSanguineo(tipo_sanguineo) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().post("/tipo_sanguineo", tipo_sanguineo, {
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

  async GetTipoSanguineo() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/tipo_sanguineo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
    }
  },

  async UpdateTipoSanguineo(tipoSanguineo) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().put("/tipo_sanguineo", tipoSanguineo, {
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
