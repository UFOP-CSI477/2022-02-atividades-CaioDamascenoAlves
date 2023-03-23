import Api from "./Api";

export default {
  /**
   * Método responsável por criar uma nova imagem
   * (POST): localhost:3000/api/imagens
   */
  async CreateImagem(imagem) {
    try {
      const token = localStorage.getItem("jwt");
      const formData = new FormData();
      formData.append("imagem", imagem);
      const response = await Api().post("/imagens", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const { message } = response.data;
      return message;
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível criar a imagem.");
    }
  },

  /**
   * Método responsável por buscar todas as imagens
   * (GET): localhost:3000/api/imagens
   */
  async GetImagens() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/imagens", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível buscar as imagens.");
    }
  },
};
