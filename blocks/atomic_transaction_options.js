Blockly.Blocks["atomic_transaction_options"] = {
  /**
   * Block for when loudness/timer/video motion is greater than the value.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "%1 %2 transaction %3gas, %4ETH",
      args0: [{
          type: "field_image",
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/atom-symbol_269b.png",
          width: 40,
          height: 40,
        },
        {
          type: "field_vertical_separator",
        },
        {
          type: "field_dropdown",
          name: "GAS",
          options: [
            ["High", "H"],
            ["Med", "M"],
            ["Low", "L"],
          ],
        },
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      category: Blockly.Categories.event,
      tooltip: "Atomic transaction start block (w/ options): Use this block to start a transaction (or any of similar shape). This one is used if you want to send Eth along with your atomic transaction.",
      extensions: ["colours_event", "shape_hat"],
    });
  },
  category: "Atomic",
  template: function () {
    return "" +
      '<block type="atomic_transaction_options" id="atomic_transaction_options">' +
      '<value name="VALUE">' +
      '<shadow type="math_number">' +
      '<field name="NUM">10</field>' +
      '</shadow>' +
      '</value>' +
      '</block>'
  }
};
