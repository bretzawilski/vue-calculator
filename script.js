const display = new Vue({
  el: "#calculator",
  data: {
    rawValue: [0],
    accumulator: "",
    operation: "",
  },
  computed: {
    calcValue: function () {
      if (!Number(this.accumulator)) {
        if (
          this.rawValue.length === 2 &&
          this.rawValue[0] === 0 &&
          this.rawValue[1] !== "."
        ) {
          this.rawValue.splice(0, 1);
          let displayValue = parseFloat(this.rawValue.join(""));
          return displayValue;
        } else if (this.rawValue.length > 12) {
          this.rawValue.pop();
          let displayValue = parseFloat(this.rawValue.join(""));
          return displayValue;
        } else {
          let displayValue = parseFloat(this.rawValue.join(""));
          return displayValue;
        }
      } else {
        if (this.rawValue[0] === 0 && this.rawValue.length === 1) {
          let displayValue = this.accumulator;
          return displayValue;
        } else {
          if (
            this.rawValue.length === 2 &&
            this.rawValue[0] === 0 &&
            this.rawValue[1] !== "."
          ) {
            this.rawValue.splice(0, 1);
            let displayValue = parseFloat(this.rawValue.join(""));
            return displayValue;
          } else if (this.rawValue.length > 12) {
            this.rawValue.pop();
            let displayValue = parseFloat(this.rawValue.join(""));
            return displayValue;
          } else {
            let displayValue = parseFloat(this.rawValue.join(""));
            return displayValue;
          }
        }
      }
    },
    returnDisplay: function () {
      let displayValue = parseFloat(this.rawValue.join(""));
      return displayValue;
    },
  },
  methods: {
    addInt: function (event) {
      this.rawValue.push(event.currentTarget.value);
      // if (!this.accumulator) {
      //   this.rawValue.push(event.currentTarget.value);
      // } else if (this.accumulator && this.rawValue[0] === 0) {
      //   this.rawValue[0] = event.currentTarget.value;
      // }
    },
    clearDisplay: function () {
      this.rawValue = [0];
      this.accumulator = "";
      this.operation = "";
    },
    operate: function (operator) {
      if (!Number(this.accumulator)) {
        this.accumulator = parseFloat(this.calcValue);
      } else {
        this.accumulator += parseFloat(this.calcValue);
      }
      this.operation = operator;
      this.rawValue = [0];
    },
  },
});
