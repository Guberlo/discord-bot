const shootMessage = "shoot          :basketball:                           :wastebasket:"
const secondMessage = "shoot                :basketball:                     :wastebasket:"
const netMessage = `canestro: grodato                      :wastebasket:
                                                      :basketball:`
const ballLength = 12
const netLength = 13

module.exports = {
    name: 'basket',
    description: 'ammo facjmm du tir',
    execute(message, args) {
        message.channel.send(shootMessage)
            .then(msg => {
                setTimeout(() => {
                    msg.edit(secondMessage);
                }, 1000);
                setTimeout(() => {
                    if (Math.floor(Math.random() * 10) === 0)
                    msg.edit(netMessage);
                else {
                    let spacesToRemove = -Math.floor(Math.random() * 20) + 23;
                    let s = netMessage.split('\n');
                    s[0] = s[0].replace('canestro: grodato', 'cacato nel puzzo');
                    s[1] = s[1].slice(spacesToRemove);

                    let res = s[0].concat('\n').concat(s[1]);

                    msg.edit(res);
                }
                }, 2000);
            });
    }
}