module.exports = async (req , res) => {
    try {
        res.status(200).send("Entrando a la ruta /types");
    } catch (error) {
        res.status(400).send("Error en la  rupt /types");
    }
}