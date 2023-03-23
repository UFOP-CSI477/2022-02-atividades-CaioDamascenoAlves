import swal from "sweetalert";
import Api from "./Api";

export default {
  /**
   * Método responsável por criar uma nova doacao
   * (POST): localhost:3000/api/doacao
   */
  async CreateDoacao(doacao) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().post("/doacao", doacao, {
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

  async GetDoacao() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/doacao", {
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

  async UpdateDoacao(doacao) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().put("/doacao", doacao, {
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
      // swal({
      //   title: "Oops!",
      //   text: "Alguma coisa deu errado aqui!",
      //   icon: "error",
      // });
    }
  },

  async DeleteDoacao(id) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().delete(`/doacao/${id}`, {
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
        text: "Alguma coisa de errado ao consumir a rota (DELETE) de Doacao!",
        icon: "error",
      });
    }
  },

  async GetDoacaoById(id) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get(`/doacao/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { doacao } = response.data;
      return doacao;
    } catch (error) {
      // swal({
      //   title: "Oops!",
      //   text: "Alguma coisa de errado ao consumir a rota (GET) de Doacao!",
      //   icon: "error",
      // });
      throw error;
    }
  }
  
  
  
};

