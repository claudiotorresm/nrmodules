

module.exports = function(RED) {
    "use strict";

    function CheerioNode(n) {
        RED.nodes.createNode(this,n);

        var node = this;
        this.on("input", function(msg) {
            if (msg.hasOwnProperty("payload")) {
	            node.warn("I saw a payload: "+msg.payload);
	            // in this example just send it straight on... should process it here really
	            node.send(msg);
            }
            else { node.send(msg); } // If no payload - just pass it on.
        });
    }
    RED.nodes.registerType("blecharacteristics",CheerioNode);
}
