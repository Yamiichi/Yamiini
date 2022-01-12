module.exports = async(client) => {

    client.user.setPresence({
        activity: {
            name: "trouver sa raison de vivre"
        }
    })
};