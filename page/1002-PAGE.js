/**
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

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
    RED.nodes.registerType("page",CheerioNode);
}
